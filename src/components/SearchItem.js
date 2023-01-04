import React, {useState} from 'react'

function SearchItem() {
    const[open,setOpen]=useState(false);
    const handleOpen = () => {
        setOpen(!open);
      };

  return (
    <li className='dropDown'>
        <a href='#' className='searchButton' onClick={handleOpen}></a>
{open}
    </li>
  )
}

export default SearchItem