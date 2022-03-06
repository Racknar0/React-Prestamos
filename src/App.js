import React, { Fragment } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

function App() {
    return (
        <div className="App">
            <Fragment>
                <Header 
                  titulo ='Cotizador de prestamos'
                  descripcion ='Utiliza el formulario y obtén una cotización'
                />

                <div className='container'>
                    <Formulario />
                </div>
            </Fragment>
        </div>
    );
}

export default App;
