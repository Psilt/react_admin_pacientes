import React from 'react'
import PropTypes from 'prop-types'


const Cita = ({cita, eliminarCita}) => {

    const {id,paciente, area, fecha, hora, sintomas}=cita

    return(
        <div className="cita">
        <p>Paciente: <span>{paciente}</span></p>
        <p>Area Medica: <span>{area}</span></p>
        <p>Fecha: <span>{fecha}</span></p>
        <p>Hora: <span>{hora}</span></p>
        <p>Sintomas: <span>{sintomas}</span></p>

        <button
            className="button eliminar u-full-width"
            onClick={()=>eliminarCita(id)}
        >Eliminar &times;</button>
    </div>
    )
}

Cita.propTypes ={
    cita: PropTypes.object.isRequired,
    aliminarCita: PropTypes.func.isRequired
}
export default Cita