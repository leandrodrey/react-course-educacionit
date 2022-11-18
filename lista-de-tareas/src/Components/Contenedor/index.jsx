import './style.css';

function Contenedor(props) {

    const estilo = {
        display: "flex",
        flexDirection: props.direction,
        justifyContent: props.justify,
    }

    return (
        <div style={estilo}>
            {props.children}
        </div>
    )

}

export default Contenedor;
