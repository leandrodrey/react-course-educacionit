import React from "react";

const estiloH1 = {
    fontWeight: "bold",
    fontSize: "60px"
}

const estiloSubtitulo = {
    fontSize: "40px"
}

const estiloFecha = {
    color: "grey",
    fontSize: "20px"
}

function Ejercicio4() {

    return (
        <React.Fragment>
            <h1 style={estiloH1}>
                Cuatro zapatos con motor eléctrico para caminar más rápido
            </h1>
            <p style={estiloSubtitulo}>La tecnología siempre busca dar comodidad a acciones diarias y en todo el mundo se han creado</p>
            <p style={estiloFecha}>28 de Octubre de 2022</p>
        </React.Fragment>
    )
}

export default Ejercicio4;
