import React from "react";

const estiloH1 = {
    fontWeight: "bold",
    fontSize: "80px"
}

const estiloH3 = {
    fontSize: "20px"
}

function Ejercicio3() {

    return (
        <React.Fragment>
            <h1 style={estiloH1}>
                Cuatro zapatos con motor eléctrico para caminar más rápido
            </h1>
            <h3 style={estiloH3}>La tecnología siempre busca dar comodidad a acciones diarias y en todo el mundo se han creado</h3>
            <p>28 de Octubre de 2022</p>
        </React.Fragment>
    )
}

export default Ejercicio3;
