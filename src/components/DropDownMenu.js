import React from 'react'

function DropDownMenu() {
    function DropDownItem(props){
        return(
            <a href='#' className='menu-item'>
                <span className='icon-button'>{props.icon}</span>
                {props.children}
                <span></span>
            </a>
        );
    }
  return (
    <div>DropDownMenu</div>
  )
}

export default DropDownMenu