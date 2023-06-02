import React from 'react'
import product from "../assets/product.jpg"
import Products from '../Components/Products'
export default function Hero() {
    return (
        <div className='hero'>
            <div className="card text-bg-dark border-0">
                <img src={product} className="card-img" alt="..." height={800} />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}
