import React, { useContext } from 'react';
import Feed from './Feed';
import DataContext from '../Context/dataContext';

// function Home({posts,isLoading,fetchError,}) {
  function Home() {
  const {searchResults,isLoading,fetchError,} =useContext(DataContext)
  return (
    <div>
{isLoading&& 
<p className='statusMsg'>Loading Post...</p>}
{isLoading&&fetchError && <p className='statusMsg' style={{color:"red"}}>{fetchError} </p>}

{/* //if loading and fetch error  is false then only this block will execute*/}
{!isLoading&&!fetchError &&(searchResults.length)?  (
      <Feed posts={searchResults}/>
      ): ( <p style={{ marginTop: "2rem"}}> 
      
       {/* <Feed posts={posts}/>
       ): ( <p style={{ marginTop: "2rem"}}>  */}
        
            No posts to display </p>)
        }
    </div>
  )
}

export default Home