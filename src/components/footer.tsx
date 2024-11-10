import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from 'next/link';
export default function Footer() {
  return (
    
   <footer id="footer" >
    <div className="sec12-container">
      
        <div className="sec12-sub-con" id="sec12-border">
       
            <p id="footer-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             </p>
                <p id="footer-c">
                <FaRegCopyright /> NK-Jewellery 2024
            </p>
        </div>
     
        
       
         <div className="sec12-sub-con" id="sec12-border">
            <h4 className="sec12-h4 ">MENU</h4>
            <p className="f-p"><Link href={'/'}  className="footer-a">HOME</Link></p>
            <p className="f-p"> <Link href={'/'} className="footer-a">ABOUT</Link></p>   
            <p className="f-p"> <Link href={'/'} className="footer-a">CONTACT</Link></p>
         </div>
   
       <div className="sec12-sub-con">
        <h4 className="sec12-h4 ">CONTACTS</h4>
        <p className="sec12-icon-text">
            <Link href={'/'} className="footer-a2"> 
            <IoCallSharp className="footer-icon-a"/> (304)368-6719</Link> 
        </p>
        <p className="sec12-icon-text">
            <Link href={'/'}  className="footer-a2">
            <IoCallSharp className="footer-icon-a"/> (317)011-3001</Link>
        </p>
        <p className="sec12-icon-text">
            <Link href={'/'}  className="footer-a2">
            <IoIosMail className="footer-icon-a"/> info@website.com</Link>
        </p>
 
        <h4 className="sec12-h4 ">FOLLOW US</h4>
        <div id="footer-icon">
        <ul id="footer-r">
            <li><Link href={'/'} className="footer-icon-a"><FaFacebook /></Link></li>
            <li><Link href={'/'} className="footer-icon-a"><FaLinkedinIn /></Link></li>
            <li><Link href={'/'} className="footer-icon-a"><FaTwitter /></Link></li>
        </ul>
        </div>
      

       </div>  

    </div>
</footer>
  )
}
