import './style.css';

function Paper(props) {

    const estilos = {
        marginBottom: "20px"
    }

    return (
        <div style={estilos}>
            <div className={"paper"}>
                {props.children}
            </div>
        </div>
    )

}

export default Paper;
