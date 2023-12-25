import React from 'react'

function Card() {
    return (
        <div>
            <div className="card m-3" style={{ width: "18rem", maxHeight: "360px" }}>
                <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Veg Brger</h5>
                    <p className="card-text">ld on the cof the card's content.</p>
                    <div className="container w-100">
                        <select className='m-2 h-100 bg-primary rounded'>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 bg-primary rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className='d-inline h-100 fs-5'>
                            Total Price
                        </div>
                    </div>
                    {/* <button href="#" className="btn btn-primary">Go somewhere</button> */}
                </div>
            </div>
        </div>
    )
}

export default Card