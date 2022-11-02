import React from "react";
import ComponenteTitulo from "./componenteTitulo";
import ComponenteImagen from "./componenteImagen";
import ComponenteContenido from "./componenteContenido";


function ComponenteNota() {

    return (
        <React.Fragment>
            <ComponenteTitulo></ComponenteTitulo>
            <ComponenteImagen></ComponenteImagen>
            <ComponenteContenido></ComponenteContenido>
        </React.Fragment>
    )
}

export default ComponenteNota;
