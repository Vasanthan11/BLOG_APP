// import React, {createContext, useContext, useState, useEffect } from 'react'

import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Home from './components/Home'
// import { format } from 'date-fns'
// import { Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
// import Post from './components/Post';
import About from './components/About'
import Missing from './components/Missing';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
// import { Link, useNavigate } from 'react-router-dom';
// import api from './Api/posts'
import EditPost from './components/EditPost';
// import useWindowsSize from './Hooks/useWindowsSize';

// import useAxiosFetch from './Hooks/useAxiosFetch';

import { DataProvider } from './Context/dataContext'

function App() {

  return (
    <>
      <DataProvider>
   

        <Header title="Movie Sear̥ch App" />

        {/* <Header title="Movie Sear̥ch App" width={width}/> */}

        {/* <Routes>

          </Routes> */}
        {/* <Nav search={search} setSearch={setSearch} /> */}
        <Nav />

        <Routes>

          {/* <Route path='/' element={<Home
         posts={searchResults} 
         fetchError={fetchError}
         isLoading={isLoading} 
         />} /> */}

          <Route path='/' element={<Home />} />
          <Route path='post' >


            {/* <Route index

element={<NewPost
  handleSubmit={handleSubmit} postTitle={postTitle}
  setPostTitle={setPostTitle} postBody={postBody}
  setPostBody={setPostBody} />} /> */}
            <Route index element={<NewPost />} />
            <Route path=':id' element={<PostPage  />} />


          </Route>
{/* 
          <Route path='/edit/:id' element={<EditPost posts={posts}
            handleEdit={handleEdit} editBody={editBody}
            setEditBody={setEditBody} setPostBody={setPostBody}
            editTitle={editTitle} setEditTitle={setEditTitle} />} /> */}


          <Route path='/edit/:id' element={<EditPost/>} />
 

          <Route path='/about' element={<About />} />
          <Route path='*' element={<Missing />} />
        </Routes>


        {/* <Home posts={posts}/> */}
        {/* <Home posts={searchResults}/> */}
      </DataProvider>
    </>

  )
}


export default App;
