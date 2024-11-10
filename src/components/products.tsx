import React from 'react'

export default function Product() {
  return (
    <div className='pro-main'>
        {/* 1 */}
 <div className='card-pro'>
  <img src={"/picture/01.jpg"} alt="" id="pro-img" width={200} height={200}/>
  <div className="pro-text">
    <h4><b>Ring</b></h4>
    <p>Price <span>$200</span></p>
  </div>
</div>
{/* 2 */}
<div className='card-pro'>
  <img src={"/picture/02.jpg"} alt="" id="pro-img" width={200} height={200}/>
  <div className="pro-text">
    <h4><b>Necklace</b></h4>
    <p>Price <span>$400</span></p>
  </div>
</div>
{/* 3 */}
<div className='card-pro'>
  <img src={"/picture/03.jpg"} alt="" id="pro-img" width={200} height={200}/>
  <div className="pro-text">
    <h4><b>2 Rings</b></h4>
    <p>Price <span>$400</span></p>
  </div>
</div>
        {/* 4 */}
        <div className='card-pro'>
  <img src={"/picture/04.jpg"} alt="" id="pro-img" width={200} height={200}/>
  <div className="pro-text">
    <h4><b>Necklace</b></h4>
    <p>Price <span>$600</span></p>
  </div>
</div>
{/* 5 */}
<div className='card-pro'>
  <img src={"/picture/05.png"} alt="" id="pro-img" width={200} height={200}/>
  <div className="pro-text">
    <h4><b>Ring</b></h4>
    <p>Price <span>$100</span></p>
  </div>
</div>
{/* 6 */}
<div className='card-pro'>
  <img src={"/picture/06.png"} alt="" id="pro-img" width={200} height={200}/>
  <div className="pro-text">
    <h4><b>Earrings</b></h4>
    <p>Price <span>$200</span></p>
  </div>
</div>

    </div>
  )
}
