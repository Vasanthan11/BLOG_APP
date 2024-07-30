import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import DataContext from '../Context/dataContext'
// const Nav=({search,setSearch})=> {

    const Nav=( )=> {
    const {search,setSearch}=useContext(DataContext);
    return (
        <nav className="Nav">
            <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">Search Posts</label>
                <input type="text" id='search' value={search} placeholder='Search Posts' onChange={(e) => setSearch(e.target.value)} />
            </form>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                    <Link to='/post'>Post</Link>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;