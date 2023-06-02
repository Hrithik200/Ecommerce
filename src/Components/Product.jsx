import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
// import Products from './Products';
import { FaStar, FaCartPlus } from "react-icons/fa";
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux"
import { addCart } from '../redux/action';


function Product() {
    const dispatch = useDispatch();
    const addProduct = (data) => {
        // console.log("add");
        dispatch(addCart(data));
    }

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loding, setLoding] = useState(false);

    const fetchData = async () => {
        return await axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => setProduct(response.data));

    }
    useEffect(() => {
        fetchData();

    }, [])
    // console.log(product)

    // const Loading = () => {
    //     return (
    //         <>
    //             Loading....
    //         </>
    //     )
    // }



    return (
        <div>
            <div className="container">
                <div className="row">
                    {loding ? console.log("Still Loading") :
                        <>
                            <div className="col-md-6">
                                <img src={product.image} alt='' width={400} height={500} />
                            </div>
                            <div className="col-md-6">
                                <h4 className="text-uppercase text-black-50">
                                    {product.category}
                                </h4>
                                <h1 className="disp1ay-5">{product.title}</h1>
                                <p className="lead fw-bolder">
                                    Rating {product.rating && product.rating.rate} <FaStar className='ms-2' />({product.rating && product.rating.count})
                                </p>
                                <h3 className='display-6 fw-bold my-4'>$ {product.price}</h3>
                                <p className='lead'>{product.description}</p>
                                <button onClick={() => addProduct(product)} className='btn btn-outline-dark px-4 py-2'><FaCartPlus /> Add to cart</button>
                                <Link to='/cart' className='btn btn-outline-dark ms-2 px-3 py-2'>Go to cart</Link>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Product
