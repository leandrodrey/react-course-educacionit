import React from "react";
import imagenNota from './images/imagenNota.webp';

function ComponenteImagen() {

    return (
        <React.Fragment>
            <img style={{height: "400px"}} src={imagenNota} alt={"Aioria"} />
        </React.Fragment>
    )
}

export default ComponenteImagen;
