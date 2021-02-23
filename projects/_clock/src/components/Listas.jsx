import React, { useState } from 'react'

export default function Listas() {
    const [lista1, setLista1] = useState([8, 12, 20])
    const [lista2, setLista2] = useState([1, 7, 50])
    const [lista3, setLista3] = useState([-2, 5, 15, -7, -8])
    const [lista4, setLista4] = useState([{ name: 'Alberto' }, { name: 'Fran' }])
    const [lista5, setLista5] = useState(['lorem ipsum dolor', 'hello world'])
    const [lista6, setLista6] = useState([[1, 2], [34, 20, 5], [11], [2, 4]])
    const [lista7, setLista7] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const [lista8, setLista8] = useState([
        { name: "lorem", important: true },
        { name: "ipsum", important: true },
        { name: "covid-19", important: false },
    ])
    const [lista9, setLista9] = useState([1, 2, 34, 20, 5, 11, 2, 4])
    const [lista10, setLista10] = useState(["hola", 7, "que", "tal", 2, "adrian", 56])
    const [lista11, setLista11] = useState([1, -2, 34, -20, 5, 11, -2, 4]);
    const [lista12, setLista12] = useState([[1, 2], [34, 20, 5], [11], [2, 4]]);


    // Maps
    const handleHalf = (list) =>
        list.map(item => item / 2)

    const handleString = (list) =>
        list.map(item => `${item}`)

    const handleSymbol = (list) =>
        list.map(item => item >= 0 ? '+' : '-')

    const handleNames = (list) =>
        list.map(item => item.name)

    const handleCapitalLeters = (list) =>
        list.map(x => x.split(" ")
            .map(i => i.charAt(0))
            .join(""));

    // Maps & Reduce
    const handleSum = (list) =>
        list.map(x => x.reduce((acc, x) => acc + x, 0));

    // Filter
    const handlePair = (list) =>
        list.filter((x) => x % 2 !== 0);

    const handleImportant = (list) =>
        list.filter((x) => x.important);


    // Reduce
    const handleRes = list => list.reduce((acc, x) => acc - x, 0)

    const handleConcat = list => list.reduce((acc, x) => typeof x === 'string' ? acc + x : acc, "")

    const handlePositiveNum = list => list.reduce((acc, x) => x > 0 ? acc + x : acc, 0)

    const handleMax = list => list.reduce((acc, x) => x > acc ? acc = x : acc, 0)


    return (
        <div>
            {/* <h2>Maps</h2> */}
            <div>{console.log(handleHalf(lista1))}</div>
            <div>{console.log(handleString(lista2))}</div>
            <div>{console.log(handleSymbol(lista3))}</div>
            <div>{console.log(handleNames(lista4))}</div>
            <div>{console.log(handleCapitalLeters(lista5))}</div>
            <div>{console.log(handleSum(lista6))}</div>

            {/* <h2>Filter</h2> */}
            <div>{console.log(handlePair(lista7))}</div>
            <div>{console.log(handleImportant(lista8))}</div>

            {/* <h2>Reduce</h2> */}
            <div>{console.log(handleRes(lista9))}</div>
            <div>{console.log(handleConcat(lista10))}</div>
            <div>{console.log(handlePositiveNum(lista11))}</div>
            <div>{console.log(handleMax(lista11))}</div>
        </div>
    )
}
