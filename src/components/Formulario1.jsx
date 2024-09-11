import { useState, useContext } from 'react';
import '../style/Login.css';
import { Contexto } from '../Contexto.jsx';
import appFirebase from '../credenciales.js';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(appFirebase);

const Formulario1 = () => {

    const { mensaje, setMensaje, password, setPassword, usuario, setUsuario } = useContext(Contexto);
    const [registrando, setRegistrando] = useState(true);

    const manejarEnvio = async(e) => {
        e.preventDefault(); 
        const mensajeConEmail = `${mensaje}@gmail.com`;
        const contraseña = e.target.Password.value;
        const usuari = e.target.User.value;

        if (registrando) {
            await createUserWithEmailAndPassword(auth, mensajeConEmail, contraseña, usuario);
            console.log("opcion 1");

        }
        else {
            await signInWithEmailAndPassword(auth, mensajeConEmail, contraseña, usuario);
            console.log("opcion 2");
        }

        setPassword(contraseña);
        setUsuario(usuari);
        
    };

    return (
        <div className="bod3">
            <form onSubmit={manejarEnvio} action="/">
              <h1 id="h1">{registrando ? "Registrese" : "Inicie sesion"}</h1>
              <div className="info">
                <input className="fname" type="text" name="name" placeholder="Nombre completo" id="User"/>
                <input type="text" name="name" placeholder="Cedula" value={mensaje} onChange={(e) => setMensaje(e.target.value)} id="Email" />
                <input type="text" name="name" placeholder="No. detelefono" id="Password" />
              </div>
              <button className="btnform" type="submit" href="/">Enviar</button>
              <div className="formout">
                <p>{registrando ? "¿Tienes un Ticket?" : "¿No tienes Tickets?"}</p>
                <button className="btnform" href="/" onClick={()=>{setRegistrando(prev => !prev)}} >Presione Aqui</button>
            </div>
            </form>
        </div>

    );
};

export default Formulario1;