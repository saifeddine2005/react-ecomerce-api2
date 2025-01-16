import React, { useState } from 'react'
import {
    useParams
} from "react-router";
import products, { allProduct } from "./Products"


export default function Productpage(props) {
    const [quantity , setQuantity] = useState(1);

    let currentPageId = useParams()

    let selectedProduct = allProduct.mobiles.filter((element) => {
        return  element.id == currentPageId.id
    })


    console.log(selectedProduct[0])


    return (
        <div className='container d-flex pt-3 '>
            <div className='w-50'>
                <img src="https://m.media-amazon.com/images/I/61CnyJ-IbML._SX679_.jpg" className="img-fluid w-75" alt="..."></img>
            </div>



            <div className='w-50'>
                <h4>{props.product.pageInfo.title}</h4>
                <p className=''>{props.product.pageInfo.rating}<span>/5 rating</span></p>
                <p className='fs-4'><span>₹ </span>{props.product.price}/-</p>

                <div className='d-flex'>
                    <div className="input-group mb-3 w-25 me-2">
                        <span className="input-group-text bg-primary border-primary" id="basic-addon1">Qty</span>
                        <input type="number"  className="form-control border-primary" aria-describedby="basic-addon1" />
                    </div>


                </div>

                <button type="button" className="btn btn-primary me-3 w-25">Add to Cart</button>
                <button type="button" className="btn btn-primary  w-25">Add to Wishlist</button>

                <div className="accordion mt-3" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                About this item
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>{props.product.pageInfo.descriptionOne}</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Warranty
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>{props.product.pageInfo.descriptionTwo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Box content
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>{props.product.pageInfo.descriptionThree}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
