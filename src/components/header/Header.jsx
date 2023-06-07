import React from 'react'
import './Header.css'

const Header = () => {
    const data = [
        {
            icon:"/images/head-icons/account 1.png"
        },
        {
            icon:"/images/head-icons/headset (1) 1.png"
        },
        {
            icon:"/images/head-icons/notification (2) 1.png"
        },
    ]
  return (
    <div className='head-body'>
        <div className="head-icons">
           {
            data.map((items,idx) => {
                return (
                    <img className='ps-4 ' src={items.icon} alt="" />
                )
            })
           }
        </div>

    </div>
  )
}

export default Header