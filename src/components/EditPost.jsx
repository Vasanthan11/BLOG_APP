import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from '../Context/dataContext';
// import posts from '../Api/posts';

function EditPost() {



    const {posts, handleEdit, editTitle, editBody, setEditTitle, setEditBody}= useContext(DataContext);

    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id)
    
    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);

        }

    }, [post, setEditTitle, setEditBody])

    return (
        <div>
            {editTitle &&

                <>
                    <h2>Edit Post</h2>
                   
                    <form onSubmit={(e) => e.preventDefault()}>
                        
                        <label htmlFor=""> Title : </label>
                       
                        <input type="text" id="postTitle" required  value={editTitle} onChange={(e)=> setEditBody(e.target.value)}/>
                   
                        <label htmlFor=""> Post : </label>
                       
                        <input type="text" id="postBody" required  value={editBody} onChange={(e)=> setEditBody(e.target.value)}/>
                   
                    <button type="" onClick={()=> handleEdit(post.id)}> Submit</button>

                    </form>

                </>

                }

        </div>
    )

}

export default EditPost