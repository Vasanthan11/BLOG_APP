import React, { useContext } from 'react'
import DataContext from '../Context/dataContext'

// function NewPost( {handleSubmit,postTitle,setPostTitle,postBody,setPostBody}) {

const NewPost=()=>{
   
    const  {handleSubmit,postTitle,setPostTitle,postBody,setPostBody}= useContext(DataContext)
    return (
        <div className='NewPost'>


            <h2>New Post</h2>
            <form action="" className="postTitle" onSubmit={handleSubmit}>
                <label htmlFor="" >
                     Title : 

                </label>
                <input type="text"  required value ={postTitle} onChange={(e)=> setPostTitle(e.target.value)} />
            <label htmlFor="postBody">
                Post : 
            </label>
            <textarea name="" id="postBody"  required value={postBody} cols="30" rows="10" onChange={(e)=> setPostBody(e.target.value)} >
                
            </textarea>
            <button type='submit'>Submit</button>
            </form>


        </div>
    )
}

export default NewPost