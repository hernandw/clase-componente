import { useState } from "react";
import './Formulario.css'

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [error, setError] = useState(false)
    const [email, setEmail] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(nombre === "" || email === "") {
            setError(true)
            
        } else {
            alert('datos enviados')
            setError(false)
            setNombre('')
            setEmail('')
        }
        
    }

  return (
    <div className="container">
          <h2>Dime tu nombre</h2>
          {error ? <p className="error">Hay un error</p>: null}
      <form onSubmit={handleSubmit}>
        <div className="w-50">
          <label className="form-label">Agrega tu nombre</label>
          <input
            className="form-control"
            type="text"
            value={nombre}
            onChange={(j) => setNombre(j.target.value)}
          />
        </div>
        <div className="w-50">
          <label className="form-label">Agrega tu correo</label>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(j) => setEmail(j.target.value)}
          />
        </div>
        <button className="btn btn-primary mt-4 w-50">agregar</button>
      </form>
    </div>
  );
};





export default Formulario;
