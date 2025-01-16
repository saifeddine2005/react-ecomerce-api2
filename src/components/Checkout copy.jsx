import React from 'react'
import { Link } from 'react-router-dom'

export default function Checkout() {
    return (
        <>
            <div className='pt-3 container d-flex justify-content-center'>

                <div className=' w-50 me-4'>
                    <h5>Billing address</h5>


                    <div class="row g-3 my-2">
                        <div class="col">
                            <label for="fNameEmail4" class="form-label">First Name</label>
                            <input type="text" id='fNameEmail4' class="form-control" aria-label="First name" />
                        </div>
                        <div class="col">
                            <label for="lNameEmail4" class="form-label">Last Name</label>
                            <input type="text" id='lNameEmail4' class="form-control" aria-label="Last name" />
                        </div>
                    </div>
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" />
                        </div>

                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div class="col-12">
                            <label for="inputAddress2" class="form-label">Address 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">City</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">State</label>
                            <select id="inputState" class="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label for="inputZip" class="form-label">Zip</label>
                            <input required type="text" class="form-control" id="inputZip" />
                        </div>
                        <div class="col-12">

                        </div>

                    </form>

                    <div class="my-2">
                        <h5>Payment</h5>
                        <div class="form-check mt-3">
                            <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required />
                            <label class="form-check-label" for="credit">Credit card</label>
                        </div>
                        <div class="form-check">
                            <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required />
                            <label class="form-check-label" for="debit">Debit card</label>
                        </div>
                    </div>

                    <div class="row gy-3">
                        <div class="col-md-6">
                            <label for="cc-name" class="form-label">Name on card</label>
                            <input type="text" class="form-control" id="cc-name" placeholder="" required />
                                <small class="text-muted">Full name as displayed on card</small>
                                <div class="invalid-feedback">
                                    Name on card is required
                                </div>
                        </div>

                        <div class="col-md-6">
                            <label for="cc-number" class="form-label">Credit card number</label>
                            <input type="text" class="form-control" id="cc-number" placeholder="" required />
                                <div class="invalid-feedback">
                                    Credit card number is required
                                </div>
                        </div>

                        <div class="col-md-3">
                            <label for="cc-expiration" class="form-label">Expiration</label>
                            <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
                                <div class="invalid-feedback">
                                    Expiration date required
                                </div>
                        </div>

                        <div class="col-md-3">
                            <label for="cc-cvv" class="form-label">CVV</label>
                            <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
                                <div class="invalid-feedback">
                                    Security code required
                                </div>
                        </div>
                        {/* <button class="w-100 btn btn-primary btn-lg mt-4" type="submit">Place order</button> */}
                            <Link to="/cart/checkout/success" className="btn btn-lg btn-primary w-100 mt-4">Place Order</Link>

                    </div>
                </div>

            </div>
        </>
    )
}
