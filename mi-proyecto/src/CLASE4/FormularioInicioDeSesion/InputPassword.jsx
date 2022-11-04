import React, {useState} from "react";

function InputPassword(){

    //HOOK
    const [password, setPassword] = useState("");
    const [cumpleConLosCaracteres, setCumpleConLosCaracteres] = useState(false);
    const [noTieneMayuscula, setNoTieneMayuscula] = useState(true);

    const guardarPassword = (event) =>{
        let passwordIngresado = event.target.value
        setPassword(passwordIngresado)
        caracteresCorrectos()
        comienzaConMayusculas()
    }

    const caracteresCorrectos = () => {
        if (password.length >= 3 && password.length <=5) {
            setCumpleConLosCaracteres(true)
        } else {
            setCumpleConLosCaracteres(false)
        }
    }

    const comienzaConMayusculas = () => {
        let primeraLetra = password[0].toUpperCase()
        if (primeraLetra.toUpperCase() === password[0]) {
            setNoTieneMayuscula(true)
        } else {
            setNoTieneMayuscula(false)
        }
    }

    return (
        <React.Fragment>
            <input type="password" placeholder="Ingresar Password" value={password} onChange={(e)=> {guardarPassword(e)}} />
            <label>
                {cumpleConLosCaracteres ? "" : "La password debe tener entre 3 y 5 caracteres"}
            </label>
            <label>
                {noTieneMayuscula ? "No tiene mayuscula la 1era letra" : ""}
            </label>
        </React.Fragment>
    )
}

export default InputPassword;
