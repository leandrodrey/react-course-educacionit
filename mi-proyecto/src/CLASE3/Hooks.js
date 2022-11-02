import {useState} from "react";

function AgregandoComportamiento() {
    /* Esta variable existe en el browser pero por mas cambios que le haga, por el ciclo de carga de react nunca va a
    actualizar el DOM con el color rojo porque no se entera del cambio.*/
    let variable = ""

    // HOOK
    // const [variable, la función de actualización]
    const [colorDeLaLetra, setColorDeLaLetra] = useState();
    // Cuando yo quiera ver el valor de la variable, llamo a colorDeLaLetra
    // Cuando yo quiera actualizar el valor de la variable colorDeLaLetra, utilizo la función setColorDeLaLetra

    return(
        <p style={{color: colorDeLaLetra}} onClick={()=>{setColorDeLaLetra("red")}}> De que color soy? </p>
    );
}
