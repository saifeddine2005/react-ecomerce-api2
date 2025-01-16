import { useParams } from "react-router";
import { allProduct } from "./Data/Products"
import { cartProducts } from "./Data/Cart"
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Productpage() {

    const [quantity, setQuantity] = useState(1);

    console.log(quantity)
    const handleInputChange = (event) => {
        const btn = event.target.id
        if (btn == "+"){
            setQuantity(quantity >= 10 ? 10 : quantity + 1)
        }
        else if (btn == "-"){
            setQuantity(quantity != 0 ? quantity - 1 : 0)
        }
    }

    const handleChange = () => {
        console.log("change occured")
    }

    let currentPageId = useParams()

    const handleCart = () => {
        cartProducts.push({ productid: currentPageId.id, quantity: quantity })
    }

    let Product = allProduct.mobiles.filter((element) => {
        return element.id == currentPageId.id
    })


    return (
        <div className='container d-flex  pt-3 '>
            <div className='w-50'>
                <img src={Product[0].pageInfo.imageUrl} className="img-fluid w-75" alt="..."></img>
            </div>



            <div className='w-50'>
                <h4>{Product[0].pageInfo.title}</h4>
                <p className=''>{Product[0].pageInfo.rating}<span>/5 rating</span></p>
                <p className='fs-4'><span>₹ </span>{Product[0].price}/-</p>

                <div className='d-flex'>

                    <div className="btn-group mb-2" role="group" aria-label="Basic example" style={{width : "7rem"}}>
                        <button type="button" id="-" onClick={handleInputChange} className="btn btn-primary " style={{width : "2rem"}}>-</button>
                        <input contentEditable="false" onChange={handleChange}  value={quantity} className="w-50 text-center" aria-describedby="basic-addon1" />
                        <button type="button" id="+" onClick={handleInputChange} className="btn btn-primary">+</button>
                    </div>


                </div>

                <button type="button" onClick={handleCart} className="btn btn-primary me-3 w-25">Add to Cart</button>
                <Link to="/cart" onClick={handleCart} type="button" className="btn btn-warning  w-25">Buy Now</Link>

                <div className="accordion mt-3" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                About this item
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>{Product[0].pageInfo.descriptionOne}</p>
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
                                <p>{Product[0].pageInfo.descriptionTwo}</p>
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
                                <p>{Product[0].pageInfo.descriptionThree}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
