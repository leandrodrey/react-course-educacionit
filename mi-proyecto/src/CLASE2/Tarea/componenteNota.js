import React from "react";
import ComponenteTitulo from "./componenteTitulo";
import ComponenteImagen from "./componenteImagen";
import ComponenteContenido from "./componenteContenido";


function ComponenteNota() {

    return (
        <div>
            <ComponenteTitulo></ComponenteTitulo>
            <ComponenteImagen></ComponenteImagen>
            <ComponenteContenido></ComponenteContenido>
        </div>
    )
}

export default ComponenteNota;
