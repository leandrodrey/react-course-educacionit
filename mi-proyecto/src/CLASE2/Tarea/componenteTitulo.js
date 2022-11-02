import React from "react";
import './css/componenteTitulo.css'

function ComponenteTitulo() {

    return (
        <React.Fragment>
            <h3 className="estiloSeccion">TECNO</h3>
            <h1 className="estiloTitulo">
                El Asistente de Google se actualiza con nuevos controles parentales y más novedades
            </h1>
            <p className="estiloSubtitulo">También se añade la función Diccionario para niños, que permitirá al asistente
                proporcionar respuestas más apropiadas y amigables</p>
            <p className="estiloFecha">2 de Noviembre de 2022</p>
        </React.Fragment>
    )
}

export default ComponenteTitulo;
