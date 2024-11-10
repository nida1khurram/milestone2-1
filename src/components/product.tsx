import React from 'react'

export default function Product() {
  return (
    <>
    <h2 className="contact-h2">LATEST PRODUCTS</h2>
    <div className='product-main'>
        
        {/* 1 */}
        <div className='product-sub-con'>
        <article id='product-article'>
  <figure className='product-figure'>
  <img src={"/picture/01.jpg"} alt="" id="product-img" />
    </figure>
  <h3 id='product-h3'>Ring</h3>
  <p id='product-p'>Price <span>$200</span></p>
</article>
<h4 id='product-h4'></h4>
</div>
{/* 2 */}
<div className='product-sub-con'>
        <article id='product-article'>
  <figure className='product-figure'>
  <img src={"/picture/02.jpg"} alt="" id="product-img" />
    </figure>
  <h3 id='product-h3'>Necklace</h3>
  <p id='product-p'>Price <span>$400</span></p>
</article>
<h4 id='product-h4'></h4>
</div>
{/* 3 */}
<div className='product-sub-con'>
        <article id='product-article'>
  <figure className='product-figure'>
  <img src={"/picture/03.jpg"} alt="" id="product-img" />
    </figure>
  <h3 id='product-h3'>2 Ring</h3>
  <p id='product-p'>Price <span>$400</span></p>
</article>
<h4 id='product-h4'></h4>
</div>
{/* 4 */}
<div className='product-sub-con'>
        <article id='product-article'>
  <figure className='product-figure'>
  <img src={"/picture/04.jpg"} alt="" id="product-img" />
    </figure>
  <h3 id='product-h3'>Necklace</h3>
  <p id='product-p'>Price <span>$700</span></p>
</article>
<h4 id='product-h4'></h4>
</div>
{/* 5 */}
<div className='product-sub-con'>
        <article id='product-article'>
  <figure className='product-figure'>
  <img src={"/picture/05.png"} alt="" id="product-img" />
    </figure>
  <h3 id='product-h3'>Earrings</h3>
  <p id='product-p'>Price <span>$100</span></p>
</article>
<h4 id='product-h4'></h4>
</div>
{/* 6 */}
<div className='product-sub-con'>
        <article id='product-article'>
  <figure className='product-figure'>
  <img src={"/picture/06.png"} alt="" id="product-img" />
    </figure>
  <h3 id='product-h3'>Earrings</h3>
  <p id='product-p'>Price <span>$100</span></p>
</article>
<h4 id='product-h4'></h4>
</div>
    </div>
    </>
  )
}
