import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { addCart } from '../redux/action';

function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    let componentMounted = true;

    const dispatch = useDispatch();
    const addProduct = (data) => {
        dispatch(addCart(data));
    }

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products/");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                // console.log(filter);
            }

            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                    <Skeleton height={350} />
                    <Skeleton height={350} />
                    <Skeleton height={350} />
                </div>
            </>
        );
    }

    const filterProduct = (cat) => {
        const updateList = data.filter((x) => x.category === cat);
        setFilter(updateList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>ALL</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronic</button>
                </div>
                {
                    filter.map((products, i) => (

                        <>
                            <div className="col-md-3 mb-4" key={i}>
                                <div className="card h-100 text-center p-4" >
                                    <img src={products.image} className="card-img-top" alt={products.title} height={300} />
                                    <div className="card-body">
                                        <h5 className="card-title">{products.title.substring(0, 12)}...</h5>
                                        <p className="card-text lead fw-bold">${products.price}</p>
                                        <Link to={`/product/${products.id}`} className="btn btn-primary">Buy now</Link>
                                        {/* <button onClick={() => addProduct(data)} className="btn btn-primary">Buy now</button> */}
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                    )
                }
            </>
        )

    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest </h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products
