
import Image from "next/image"
import Link from "next/link"
export default function Hero() {
  return (
<section>
<div className="hero-Container">

<Image src={'/picture/hero.webp'} alt="hero-pic" width={500} height={700} id="hero-img" />
 
  <div className="hero-content">
  <h1 className="hero-h1">Best Jewellery Collection </h1>
                <p className="hero-p">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem.</p>
               
                <Link href={'/'}><button  className="shop-now"> <span>Shop Now</span></button> </Link>
               
  </div>
</div>
</section>
  )
}
