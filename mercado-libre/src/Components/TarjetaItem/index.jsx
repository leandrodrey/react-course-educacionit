import './style.css';
import {useState} from "react";

function TarjetaItem() {

    const [showDescuento, setDescuento] = useState(false);

    return (
        <div className='tarjetaItem'>
            <div className='tarjetaItem__fila'>
                <img className='tarjetaItem__imagen' src="https://picsum.photos/id/1/224/224" alt="producto" />
            </div>
            <div className='tarjetaItem__fila tarjetaItem__fila--texto'>
                <span className='tarjetaItem__promociones tarjetaItem__promociones--tachado tarjetaItem__promociones--oculto'>Antes: $169999 pesos </span>
                <h1 className='tarjetaItem__precio'>$142.999 <span>16% OFF</span></h1>
                <span className='tarjetaItem__promociones'>12x$11.874 sin interés</span>
                <span className='tarjetaItem__promociones tarjetaItem__promociones--negrita'>Envío gratis</span>
                <span className='tarjetaItem__promociones tarjetaItem__promociones--gainsboro tarjetaItem__promociones--oculto'>Smart TV Samsung Series 7 UN55AU7000GCZB LED 4K 55" 220V - 240V</span>
            </div>
        </div>
    );
}

export default TarjetaItem;
