import React from 'react'

const LinkNav = ({ name }) => {
  const handleClickScroll = () => {
    const element = document.getElementById(name)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <li>
      <button onClick={handleClickScroll} className='hover:underline-offset-2 hover:underline'>{name}</button>
    </li>
  )
}

export default LinkNav
