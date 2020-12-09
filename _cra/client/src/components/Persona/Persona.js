import React, { Component, Fragment } from 'react'
import NombrePersona from './Datos/NombrePersona';
import DireccionPersona from './Datos/DireccionPersona';
import EdadPersona from './Datos/EdadPersona';
import PicturePersona from './Datos/PicturePersona';

class Persona extends Component {
    render() {
        const {nombre, edad, direccion, foto } = this.props;
        return (
            <Fragment>
                <NombrePersona nombre={nombre} />
                <EdadPersona edad={edad}/>
                <DireccionPersona direccion={direccion}/>
                <PicturePersona foto={foto} />
            </Fragment>
        )
    }
}

export default Persona;