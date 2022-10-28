import React from "react";
import imagenAiroia from './img/aioria.jpg';

function ComponenteConImage() {

    return (
        <React.Fragment>
            <img style={{height: "400px"}} src={imagenAiroia} alt={"Aioria"} />
        </React.Fragment>
    )
}

export default ComponenteConImage;
