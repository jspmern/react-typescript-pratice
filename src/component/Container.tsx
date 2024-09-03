import React from 'react'
import Headers from './Headers'
import Home from './Home'

function Container() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Headers />
                    <br />
                    <Home />
                </div>

            </div>
        </div>
    )
}

export default Container