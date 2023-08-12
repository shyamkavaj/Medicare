import { useInsertionEffect, useRef } from "react"
import userImg from "../../assets/images/avatar-icon.png"
import logo from "../../assets/images/logo.png"
import { NavLink, Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi';
import { useEffect } from "react";
const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/Doctor',
    display: 'Find a Doctor'
  },
  {
    path: '/service',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
  }
]

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }
  useEffect(() => {
    handleStickyHeader()

    return () => window.removeEventListener('scroll', handleStickyHeader)
  })

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')


  return <header className="header flex items-center" ref={headerRef}>
    <div className="container">
      <div className="flex items-center justify-between">
        {/**==============logo */}
        <div>
          <img src={logo} alt="" />
        </div>
        {/* {=================menu================} */}
        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
          <ul className="menu flex items-center gap-[2.7rem]">
            {
              navLinks.map((link, index) => (<li key={index}>
                <NavLink to={link.path} className={navClass => navClass.isActive ? "text-purple-700 text-[16px] leading-7 font-[600]" : "text-blue-700 text-[16px] leading-7 font-[500] hover:text-blue-700"}>{link.display}</NavLink>
              </li>
              ))}
          </ul>
        </div>

        {/* {==================nav right=====================} */}
        <div className="flex items-center gap-2">

          <div className="hidden">
            <Link to='/'>
              <figure className="w-[44px] h-[44px] rounded-full cursor-pointer">
                <img src={userImg} className="w-full rounded-full" alt="" />
              </figure>
            </Link>
          </div>

          <Link to='/login'>
            <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">Login</button>
          </Link>

          <span className="md:hidden" onClick={toggleMenu}>
            <BiMenu className="w-6 h-6 cursor-pointer" />
          </span>
        </div>
      </div>
    </div>
  </header>
}

export default Header
