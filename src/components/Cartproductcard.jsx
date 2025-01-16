import React from 'react'

export default function Cartproductcard(props) {


    return (
        <div >
            <div className="card mb-3 me-3 shadow-sm" >
                <div className="row g-0 ">
                    <div className="col-md-4 py-4" style={{ width: "18%" }}>
                        <img src={props.imageUrl} className="img-fluid rounded p-3" alt="error" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.description}</p>
                            <div className='d-flex align-items-center justify-content-between'>
                                <p className="card-text fw-bold">₹ {props.price}/-</p>
                                <p className="card-text ">Quantity :<strong> {props.quantity} </strong></p>
                                <a href='#' id={props.id} onClick={props.removeProductFn} className='mb-3 ms-3 text-danger'>Remove</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
