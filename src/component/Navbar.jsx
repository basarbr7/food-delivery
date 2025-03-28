import React from 'react'
import Header from './Header'
import Image from '../layer/Image'
import Logo from '/LOGO.png'
import Container from '../layer/Container'

const Navbar = () => {
  return (
    <div>
        <Header/>

        <nav>
          <Container>
            <Image src={Logo}/>

          </Container>
        </nav>
    </div>
  )
}

export default Navbar