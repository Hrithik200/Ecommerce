import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { delCart } from '../redux/action';
import StripeCheckout from 'react-stripe-checkout';

function Cart() {
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch()



    const handleClose = (item) => {
        dispatch(delCart(item))
    }
    const cartItems = (cartItems) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItems.id}>
                <div className="container py-4">
                    <button onClick={() => handleClose(cartItems)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItems.image} alt={cartItems.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItems.title}</h3>
                            <p className="lead fw-bold">${cartItems.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    var total = 0;
    const itemList = (item) => {
        total = total + item.price;
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">${item.price}</span>
            </li>
        );
    }
    const onToken = (token) => {
        console.log(token)

    }

    return (
        <>        <div>
            {state.length !== 0 && state.map(cartItems)}
            <ul className="list-group mb-3" style={{
                width: "50%",
                marginLeft: "25%"
            }}>
                {state.map(itemList)}

                <li className="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>${total}</strong>
                </li>
            </ul>
        </div >
            <div >
                <StripeCheckout
                    token={onToken}
                    stripeKey="pk_test_51Lt95OSGjawuL7jWhTihEJNU2KJsPpPY9IOEGx1NQeLDEJNqyd4DBILieKfHSlY6XevKrM9PvsrUyd0YHs7PqmnH00abKK9ETo"
                />

            </div>
        </>

    )
}

export default Cart
