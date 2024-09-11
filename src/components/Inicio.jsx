// Inicio.jsx
import { useContext } from 'react';
import { Contexto } from '../Contexto.jsx';
import '../style/inicio.css';
import appFirebase from '../credenciales.js';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(appFirebase);

const Inicio = () => {
    const { usuario } = useContext(Contexto);

    const manejarSalir = () => {
        signOut(auth).then(() => {
            console.log("Sesión cerrada");
        }).catch((error) => {
            console.error("Error al cerrar sesión", error);
        });
    };

    return (
        <div id="contenedorTarjeta">
            <div className="tarjeta">
                <h1>Bienvenido {usuario}</h1>
                <button onClick={manejarSalir}>Salir</button>
            </div>
        </div>
    );
};

export default Inicio;
