import React, { Fragment, useEffect, useState } from 'react'

import { Card, Title } from './index'

import data from "../assets/data/stays.json";

// <Title {...{ text: "Stays in Finland" }} />
// {
//     floors.map((floor, index) => <Card key={index} {...{
//         city: floor.city,
//         country: floor.country,
//         superHost: floor.superHost,
//         title: floor.title,
//         rating: floor.rating,
//         maxGuests: floor.maxGuests,
//         type: floor.type,
//         beds: floor.beds,
//         photo: floor.photo
//     }} />)
// }
const Floors = () => {


    const [floors, setFloors] = useState([])

    useEffect(() => {
        setFloors(data)
        return () => { }
    }, [floors])

    return (
        <Fragment>

          hola


        </Fragment>
    )
}

export default Floors
