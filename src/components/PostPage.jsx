import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import DataContext from '../Context/dataContext';

const  PostPage=() =>{
    const  {posts,handleDelete}=useContext(DataContext)
    const { id } = useParams();
    const post = posts.find(post=>(post.id).toString() === id);
    return (
        <div>

            <div className="postPage">
                <div className="post">
                    {post && <>
                        <h2>{post.title}

                        </h2>

                        <p className="postDate">
                            {post.datetime}</p>

                        <p className="postBody">
                            {post.body}</p> 


                            
                            
                            <button onClick={()=> handleDelete(post.id)}>Delete Post </button>
                            <Link to={`/edit/${post.id}`}>  
                
                        <button>Edit Post </button>
                        </Link>
                    </>}
                </div>
            </div>
        </div>
    )
}

export default PostPage