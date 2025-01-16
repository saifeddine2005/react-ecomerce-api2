import React from 'react'
import Productcard from './Productcard'
import products, { allProduct } from "./Data/Products"

// This is version 1.3

export default function Homepage(props) {

    const allMoblies = allProduct.mobiles.map((element) => {
        return <Productcard key={element.id} id={element.id}  title={element.title} description={element.description} price={element.price} imageUrl={element.imageUrl} />
    })


    return (
        <div className='container '>
            <div className='my-4'>
                <h5>Deal of the day! Discount on selected products</h5>
            </div>
            <div className='row row-cols-5'>
                {allMoblies}
            </div>
        </div>
    )
}
