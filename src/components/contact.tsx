import React from 'react'
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';
export default function Contact() {
  return (
    <>
    <section >
    <h2 className="contact-h2">OUR CONTACTS</h2>
    <div className="con-container">
    <div className="con-left">
           <p id="contact-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore accusantium qui aliquam voluptate fuga cumqu </p>
        <div className='con-con'>
        <Link href={'/'} className="contact-a2"> 
        <IoCallSharp/> (304)368-6719</Link> <br /><br />
        <Link href={'/'}  className="contact-a2">
        <IoCallSharp /> (317)011-3001</Link><br /><br />
        <Link href={'/'}  className="contact-a2">
        <IoIosMail/> info@website.com</Link>
        </div>
        <div className='animation-contact'></div>
        </div>
       
        <div className="sec11-bottom">
          <Image src={'/picture/map1.png'} alt='footer-img' id="footer-img" width={300} height={300}/>
       
    </div>
</div>

   </section>
</>
  )
}
