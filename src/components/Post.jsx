import React from 'react';
import { Link } from 'react-router-dom';

function Post({ post }) {
  return (
    <div className="post">

      <Link to={`post/${post.id}`}>
        <h3>{post.title}</h3>
        <p className="postDate">{post.datetime}</p>
      </Link>
      {/* Show oif the post body content based on the number of character of the body content , show the post if the body content is less than or equal to 25 character  */}
      <p className="postBody">
        {
          (post.body).length <= 25 ? post.body : `${(post.body).slice(0, 25)}...`
        }
      </p>
    </div>
  )
}

export default Post