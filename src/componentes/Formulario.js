import React, { Fragment, useState } from 'react';
import {calcularTotal} from '../helpers';

const Formulario = (props) => {

    const { cantidad, guardarCantidad, plazo, guardarPlazo, guardarTotal, guardarCargando } = props

    //! Defonor state
    const [error, guardarError] = useState(false);

    //! Cuando el usuario hace el submit
    const calcularPrestamo = (e) => {
        e.preventDefault();

        //!valida
        if (cantidad === 0 || plazo === '') {
            guardarError(true);
            return;
        }

        //! eliminar el error previo
        guardarError(false);

        //! Habilitar spinner
        guardarCargando(true);

        setTimeout(() => {
            
            //!realizar cotizacion
            const total = calcularTotal(cantidad, plazo);

            //! una vez calculado guardar total
            guardarTotal(total)    

            //! deshabilitar el spinner
            guardarCargando(false)
        }, 3000);


        
    };

    return (
        <Fragment>
            <form onSubmit={calcularPrestamo}>
                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input
                            className="u-full-width"
                            type="number"
                            placeholder="Ejemplo: 3000"
                            onChange={(e) =>
                                guardarCantidad(parseInt(e.target.value))
                            }
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select
                            className="u-full-width"
                            onChange={(e) =>
                                guardarPlazo(parseInt(e.target.value))
                            }
                        >
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Calcular"
                            className="button-primary u-full-width"
                        />
                    </div>
                </div>
            </form>

            {(error) ? <p className="error">Todos los campos son Obligatorios</p>  : null  }
            
        </Fragment>
    );
};

export default Formulario;
