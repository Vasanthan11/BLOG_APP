import React  from 'react';
import { createContext, useEffect, useState } from 'react';
import { format } from 'date-fns'
// import { Navigate } from 'react-router-dom';
// import { useEffect,useState } from 'react';
// import Post from '../components/Post'
// import EditPost from '../components/EditPost';
import useWindowsSize from '../Hooks/useWindowsSize';
import useAxiosFetch from '../Hooks/useAxiosFetch';
import api from '../Api/posts';
import { useNavigate } from 'react-router-dom';

const DataContext = createContext({})
export const DataProvider = ({ children }) => {


    const navigate = useNavigate();


    const [posts, setPost] = useState([])
  
    const {width}=useWindowsSize();
    const {data,fetchError,isLoading}  = useAxiosFetch ('http://localhost:3500/posts');
  
  
    useEffect(()=>{
      setPost(data);
  
    },[data])
    
    // {
    //   id: 1,
    //   title: "First Item",
    //   datetime: "2023-11-24T12:30:00", // Assuming the date and time are in ISO format
    //   body: "This is the body of the first item.",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   datetime: "2023-11-25T14:45:00",
    //   body: "This is the body of the second item.",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   datetime: "2023-11-26T10:15:00",
    //   body: "This is the body of the third item.",
    // },
  
    // ]);
    const [search, setSearch] = useState('');
  
    // Filter the data based on search 
    const [searchResults, setSearchResults] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
  
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
  
    
    // useEffect(() => {
    //   const fetchPosts = async () => {
    //     try {
    //       const response = await api.get('/posts');
    //       setPost(response.data)
  
    //     }
    //     catch (err) {
    //       if (err.response) {
    //         console.log(err.response.data)
    //         console.log(err.response.status)
    //         console.log(err.response.headers)
    //       }
    //       else {
    //         console.log(`Error: ${err.response.status}`)
    //       }
  
    //     }
    //   }
    //   fetchPosts();
    // }, [])
  
    useEffect(() => {
  
      const filterdResults = posts.filter((post) =>
        ((post.body).toLowerCase()).includes(search.toLowerCase())
        || ((post.title).toLowerCase()).includes(search.toLowerCase()))
  
  
      // Show latest post at first 
      setSearchResults(filterdResults.reverse());
  
    }, [posts, search])
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
      // to get the last id in the array to add the new post at the last of the array 
  
      const datetime = format(new Date(), 'MMM/dd/yyyy');
  
      const newPost = { id, title: postTitle, datetime, body: postBody };
      try {
  
  
        const response = await api.post('/posts/', newPost)
        // const allPosts = [...posts, newPost];
        const allPosts = [...posts, response.data];
  
        setPost(allPosts);
  
        // empty the title and body content after submit the data;  
        setPostTitle('');
        setPostBody('');
        navigate('/')
  
      }
      // catch (err) {
      //   if (err.response) {
      //     console.log(err.response.data)
      //     console.log(err.response.status)
      //     console.log(err.response.headers)
      //   }
      //   else {
      //     console.log(`Error: ${err.response.status}`)
      //   }
  
      // }
  
      catch (err) {
  
        console.log(`Error: ${err.message}`)
  
  
      }
    }
    const handleDelete = async (id) => {
      // const postList = posts.filter(post => post.id !== id);
      // setPost(postList);
      // navigate('/')
  
      try {
        await api.delete(`posts/${id}`)
        const postsList = posts.filter(post => post.id !== id);
        setPost(postsList);
        navigate('/')
      }
  
      catch (err) {
  
        console.log(`Error: ${err.message}`)
  
  
      }
    }
  
  
    const handleEdit = async (id) => {
      const datetime = format(new Date(), 'MMMM dd, yyyy pp');
  
      const updatedPost = { id, title: editTitle, datetime, body: editBody };
      try {
        // put - update the new structured data in the server 
        const response = await api.put(`/posts/${id} `, updatedPost)
        // update the edited post only in the server
        setPost(posts.map(post => post.id === id ? { ...response.data } : post));
        // empty the title and body content after submit the data;  
        setEditTitle('');
        setEditBody('');
        navigate('/')
      }
      catch (err) {
        console.log(`Error: ${err.message}`); 
      }
    }


    // for which components we need to pass data is done by Data Provider;
    // which data we have to provide is given in value ;

    return (
        <DataContext.Provider value={

            {
width,search,setSearch,
// home parameter 
searchResults, fetchError,isLoading,
// New Post parameter 
handleSubmit,postTitle,setPostTitle,postBody,setPostBody, posts, handleEdit, editTitle, editBody, setEditTitle, setEditBody
,handleDelete
}
        }>
            {children}
        </DataContext.Provider>


    )
}
export default DataContext