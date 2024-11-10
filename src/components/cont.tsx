import React from 'react'
import Image from 'next/image';
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import Link from 'next/link';
export default function Con() {
  return (
    <div className='con-main'>
        <div className='sub-about'>
        <p className='contact-p'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed nostrum necessitatibus eos commodi debitis impedit, 
        <br /><br />
        <Link href={'/'} className="contact-a2"> 
        <IoCallSharp/> (304)368-6719</Link> <br /><br />
        <Link href={'/'}  className="contact-a2">
         <IoCallSharp /> (317)011-3001</Link><br /> <br />
         <Link href={'/'}  className="contact-a2">
        <IoIosMail/> info@website.com</Link>
       
        </p>
   
    <div className='animation-about'></div>
        </div>
        {/* <div>
        <img src={"/picture/map1.png"} alt="" id="contact-pic"width={400} height={300} />
        </div> */}

    </div>
  )
}
