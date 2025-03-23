import React from 'react'
import Container from '../layer/Container'
import { GiStarFormation } from "react-icons/gi";
import Flex from '../layer/Flex';
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import Basket from "../assets/Full_Basket.png"
import Image from '../layer/Image';
import { BsFillArrowDownCircleFill } from "react-icons/bs";


const Header = () => {
  return (
    <div>
        <Container className="bg-[#FAFAFA] rounded-b-xl rounde flex items-center justify-between gap-10 border-b-[1px] border-[#E1E1E1]">
            <Flex className="justify-between gap-20  items-center">
                <Flex className="items-center gap-3 text-[15px] ml-6">
                    <GiStarFormation className='text-yellow-500 text-xl '/>
                    <p> Get 5% Off your first order, <Link className='text-main underline'>Promo: ORDER5</Link></p>
                </Flex>
                <Flex className="items-center gap-3">
                    <FaLocationDot/>
                    <p>Regent Street, <Link className='underline'>A4,</Link> A4201, London <Link className='text-main underline'>Change Location</Link></p>
                </Flex>
            </Flex>
            <Flex className="bg-green items-center h-[70px] px-6 rounded-b-xl text-white">
                <Flex className='h-full items-center pr-5 border-r-[1px] border-[#4EAA7B]'>
                    <Link>
                        <Image src={Basket}/>
                    </Link>
                </Flex>
                <Flex className='h-full items-center px-5 border-r-[1px] border-[#4EAA7B]'>
                    <p>23 Items</p>
                </Flex>
                <Flex className='h-full items-center px-5 border-r-[1px] border-[#4EAA7B]'>
                    <p>GBP 79.89</p>
                </Flex>
                <Flex className='h-full items-center pl-5 text-3xl'>
                    <BsFillArrowDownCircleFill/>
                </Flex>
            </Flex>
        </Container>
    </div>
  )
}

export default Header