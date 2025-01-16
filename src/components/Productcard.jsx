import React from 'react'
import '../productcard.css'
import { Link } from 'react-router-dom'


export default function Productcard(props) {
    return (
        <div className=' mb-4 d-flex x'>
            <div className="productCard card  shadow-sm" style={{ width: "17rem" }}>
                <Link to={"product/"+props.id} >
                    <img src={props.imageUrl} className="card-img-top p-3" id={props.id} alt="error"  />
                </Link>
                <div className="card-body">
                    <Link to={"product/"+props.id} >
                        <h5 className="card-title" id={props.id}>{props.title} </h5>
                    </Link>
                    <p className="card-text">{(props.description).slice(0,50)}...</p>
                    {/* <p className='bg-primary text-light ps-2 fw-bold'>DEAL OF THE DAY</p> */}
                    <h5 className="card-title"><span>₹ </span>{props.price}<span>/-</span> </h5>
                </div>
            </div>
        </div>
    )
}
