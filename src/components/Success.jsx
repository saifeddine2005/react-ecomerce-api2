import { Link } from 'react-router-dom'

export default function Checkout() {
  

    return (
        <>

            <div className="container"  style={{ height: "80vh" }}>


                <div class="card border-success my-3" >
                    <div class="card-body text-success">
                        <h5 class="card-title">Order placed succesfully</h5>
                        <p class="card-text">Thankyou for shopping with us</p>
                    </div>
                </div>
                <Link to="/" className="btn btn-lg btn-primary w-25">Go Home</Link>
            </div>

        </>

    )
}
