import React, { useContext } from 'react';
import { FaLaptop, FaMobileAlt, FaTabletAlt } from 'react-icons/fa'
import DataContext from '../Context/dataContext';
import '../style/header.css'
// function Header({title,width}) {
function Header({ title }) {
  const { width } = useContext(DataContext);

  return (
    <div className='header'>
      <h2>{title}  {width < 768 ? <FaMobileAlt /> : width < 992 ? <FaTabletAlt /> : <FaLaptop />}
 </h2>
     
    </div>
  )
}

export default Header