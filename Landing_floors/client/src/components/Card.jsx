import React, { Fragment } from 'react'

const Card = ({ city, country, superHost, title, rating, maxGuests, type, beds, photo }) => {
    return (
        <Fragment>
            <div className="card">
                <figure>
                    <img src={photo} />
                </figure>
            </div>
        </Fragment>
    )
}

export default Card
