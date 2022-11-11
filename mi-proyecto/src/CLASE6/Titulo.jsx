
function Titulo(props) {

    return (
        <div className="mainCaja--item--titulo">
            <p className="diasGratis">{props.dias}</p>
            <h2 className="titulo">{props.titulo}</h2>
            <h3 className="empresa">{props.empresa}</h3>
        </div>
    )
}

export default Titulo;
