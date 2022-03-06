import React, { Fragment, useState  } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Mensaje from './componentes/Mensaje';
import Resultado from './componentes/Resultado';

function App() {

    const [cantidad, guardarCantidad] = useState(0);
    const [plazo, guardarPlazo] = useState("");
    const [total, guardarTotal] = useState(0);


    let componente;
    if( total === 0) {
        componente = <Mensaje />
    } else {
        componente = <Resultado />
    }

    return (
        <div className="App">
            <Fragment>
                <Header 
                  titulo ='Cotizador de prestamos'
                  descripcion ='Utiliza el formulario y obtén una cotización'
                />

                <div className='container'>
                    <Formulario 
                        cantidad = {cantidad}
                        guardarCantidad = {guardarCantidad}
                        plazo = {plazo}
                        guardarPlazo = {guardarPlazo}
                        total = {total}
                        guardarTotal = {guardarTotal}
                    />

                    <div className='mensajes'>
                        {componente}
                    </div>
                    
                </div>
            </Fragment>
        </div>
    );
}

export default App;
