import React, { createContext, useState } from 'react';

export const Contexto = createContext();

export const MiProveedor = ({ children }) => {
  const [mensaje, setMensaje] = useState(''); 
  const [password, setPassword] = useState('');
  const [usuario, setUsuario] = useState(''); 

  return (
    <Contexto.Provider value={{mensaje, setMensaje, password, setPassword, usuario, setUsuario}}>
      {children}
    </Contexto.Provider>
  );
};