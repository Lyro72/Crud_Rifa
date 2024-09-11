//App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import Formulario1 from './components/Formulario1.jsx';
import Inicio from './components/Inicio.jsx';
import appFirebase from './Credenciales.js';
import { MiProveedor } from './Contexto.jsx';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; 
const auth = getAuth(appFirebase);

function App() {
  const [registro, setRegistro] = useState(null);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => { 
    if (user) {
      console.log("todo ok");
      setRegistro(user); 
    } else {
      console.log("no todo ok");
      setRegistro(null); 
    }
  });

  return () => unsubscribe();
}, []);

  return (
    <MiProveedor>
      <div>
        {registro ? <Inicio/> : <Formulario1/>}
      </div> 
    </MiProveedor>
  );
}

export default App;
