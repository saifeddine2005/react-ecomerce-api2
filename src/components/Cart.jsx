import React, { useEffect, useState } from 'react'
import { cartProducts } from "./Data/Cart"
import Cartproductcard from './Cartproductcard'
import { allProduct } from "./Data/Products"
import { Link } from 'react-router-dom'

export default function Cart() {
    const [displayCartProducts, setDisplayCartProducts] = useState([]);
    const [cartCount, updateCount] = useState(1)

    const removeProductFn = (element) => {
        let indexofElement = cartProducts.findIndex(item => item.productid == element.target.id)
        cartProducts.splice(indexofElement, 1)
        updateCount(cartCount + 1)
    }

    let cartProductDetail = []
    let productsList = cartProducts.map((element) => {
        allProduct.mobiles.forEach(product => {
            return product.id === element.productid && cartProductDetail.push({ product: product, quantity: element.quantity })
        });
    })

    let deliveryCharges = 50;
    let total = null;
    let totalItems = cartProductDetail.length

    let finalCartProducts = cartProductDetail.map((element) => {
        let qtyBasedPrice = element.product.price * element.quantity
        total += qtyBasedPrice
    })

    useEffect(()=>{
        let finalCartProducts = cartProductDetail.map((element) => {
            return <Cartproductcard id={element.product.id} key={element.product.id} imageUrl={element.product.imageUrl} title={element.product.title} description={element.product.description} price={element.product.price} quantity={element.quantity} removeProductFn={removeProductFn} />
        })
        setDisplayCartProducts(finalCartProducts)
    },[cartCount])  

    return (
        <>

            <div className='container pt-3'>
                <h4 className='mb-3'> Shopping Cart ({totalItems})</h4>

                {!displayCartProducts.length ? 
                <div className='fs-4 ' style={{height: '80vh'}}><p>Cart is empty!</p></div> 
                :
                    <div className='d-flex'  style={{minHeight: '80vh'}}>
                        <div className="d-flex flex-column">
                            {displayCartProducts}
                        </div>

                        <div className="card w-25" style={{ height: "15rem" }}>
                            <div className="card-body">
                                <p className="card-text">Price : ₹ {total}</p>
                                <p className="card-text">Delivery Charges : ₹ {!total ? "00" : deliveryCharges * totalItems}</p>
                                <p className="card-text">Discount : none</p>
                                <p className="card-title">Total : <strong>₹ {total + deliveryCharges*totalItems}.00</strong></p>
                                <Link to="/cart/checkout" className="btn btn-primary w-100 mt-3">Check out</Link>
                            </div>
                        </div>

                    </div>
                }
            </div>

        </>
    )
}
