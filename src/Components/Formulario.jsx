import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'

const Formulario = ({almacenarCitas}) => {

    const [cita, setCita]=useState({
        paciente:'',
        area:'',
        fecha:'',
        hora:'',
        sintomas:''
    })

    const [error, setError]=useState(false)

    const setParametros = e => {
        setCita({
            ...cita,
            [e.target.name]:e.target.value
        })
    }

    const {paciente, area, fecha, hora, sintomas} = cita

    const submitFormulario = e => {
        e.preventDefault();

        if(paciente.trim()===''||area.trim()===''||fecha.trim()===''||hora.trim()===''||sintomas.trim()===''){
            setError(true);
            return;
        }

        setError(false);

       cita.id=uuidv4()

        almacenarCitas(cita)

        setCita({
            paciente:'',
            area:'',
            fecha:'',
            hora:'',
            sintomas:''
        })

    }


    return(
            <>
            <h2>Crear Cita</h2>

            {
                error ? <p className="alerta-error">Todos los Campos son Obligatorios</p>
                : null
            }
            <form
                onSubmit={submitFormulario}
            >
                <label>Nombre de Paciente</label>
                <input
                    type="text"
                    name="paciente"
                    className="u-full-width"
                    placeholder="Nombre Completo"
                    onChange={setParametros}
                    value={paciente}
                ></input>

                <label>Area Medica</label>
                <input
                    type="text"
                    name="area"
                    className="u-full-width"
                    placeholder="Clinica/Cardiologia/Traumatologia"
                    onChange={setParametros}
                    value={area}
                ></input>

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={setParametros}
                    value={fecha}
                ></input>

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={setParametros}
                    value={hora}
                ></input>

                <label>Sintomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={setParametros}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
            </>
    )
}

Formulario.propTypes ={
    almacenarCitas: PropTypes.func.isRequired
}

export default Formulario;