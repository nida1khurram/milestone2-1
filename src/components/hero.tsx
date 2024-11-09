
import Image from "next/image"
import Link from "next/link"
export default function Hero() {
  return (
<section>
<div className="hero-Container">
<img src={"/picture/hero.webp"} alt="" id="hero-img" />

 
  <div className="hero-content">
  <h1 className="hero-h1">Best Jewellery Collection </h1>
                <p className="hero-p">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.</p>
               
                <button  className="shop-now"> <Link href={'/'}><p id="p-shop">Shop Now</p>  </Link></button>
               
  </div>
</div>
</section>
  )
}
