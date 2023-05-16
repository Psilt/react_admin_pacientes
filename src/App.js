import React, {useState, useEffect} from 'react';
import Formulario from "./Components/Formulario";
import Cita from './Components/Cita';


function App() {

  let citasActuales=JSON.parse(localStorage.getItem('citas'))
  if(!citasActuales){
    citasActuales=[]
  }
  const [citas,setCitas]=useState(citasActuales)

  useEffect(()=>{
    let local=JSON.parse(localStorage.getItem('citas'))

    if(local){
      localStorage.setItem('citas',JSON.stringify(citas))
    }else{
      localStorage.setItem('citas',JSON.stringify([]))
    }
  },[citas])

  const almacenarCitas = cita =>  {
    setCitas([
      ...citas,
      cita
    ])
  }

  const eliminarCita= id => {
    const citasActuales= citas.filter(cita => cita.id !== id)
    setCitas(citasActuales)
  }

  const titulo = citas.length===0 ? 'No hay Citas' : 'Administra tus Citas'

  return (
    <>
     <h1>Administrador de Pacientes</h1>
     <div className="container">
       <div className="row">
         <div className="one-half column">
            <Formulario 
              almacenarCitas={almacenarCitas}
            />
         </div>
         <div className="one-half column">
           <h2>{titulo}</h2>
           {citas.map(cita => (
             <Cita 
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}
           />
           ))}
           
         </div>
       </div>
     </div>
    </>
  );
}

export default App;
