import React from 'react'
import Header from './Header'
import Image from '../layer/Image'
import Logo from "../assets/LOGO.png"
import Container from '../layer/Container'
import Flex from '../layer/Flex'
import {  NavLink } from 'react-router-dom'



const menuItem = [
  { name: "Home", path: "/" },
  { name: "Browse Menu", path: "/menu" },
  { name: "Special offers", path: "/offers" },
  { name: "Resturents", path: "/restaurants" },
  { name: "Track orders", path: "/track-orders" }
]


const Navbar = () => {
  return (
    <div>
        <Header/>

        <nav className='my-4'>
          <Container>
            <Flex className="justify-between items-center">
              <div>
                <Image src={Logo}/>
              </div>

              <Flex className="gap-10 items-center">
                <ul className='flex gap-6'>
                  {menuItem.map((item, index)=>(
                    <li key={index}>
                      <NavLink to={item.path} className=' py-3 px-4 cursor-pointer rounded-full'>
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <button className='bg-black text-white px-7 py-3 rounded-full cursor-pointer' >Login/signUp</button>
              </Flex>
            </Flex>
          </Container>
        </nav>
    </div>
  )
}

export default Navbar