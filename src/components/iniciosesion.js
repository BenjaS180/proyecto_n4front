import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import styled from "styled-components"




const InicioSesion = () => {
    const [intentosFallidos, setIntentosFallidos] = useState(0);
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");
    const navigate = useNavigate();
  
    const handleUsuarioChange = (event) => {
      setUsuario(event.target.value);
    };
  
    const handleContrasenaChange = (event) => {
      setContrasena(event.target.value);
    };
  
    const iniciarSesion = () => {
      // Validar las credenciales
      if (usuario === "admin" && contrasena === "123456") {
        alert("Inicio sesion exitoso")
        navigate("/formulario"); // Redirigir a la página del formulario
      } else {
        setIntentosFallidos(intentosFallidos + 1);
        if (intentosFallidos === 2) {
          alert(
            "¡ACCESO DENEGADO!, Intentos fallidos excedidos."
          );
          // Cerrar la pestaña o ventana (esto puede variar según el entorno en el que se ejecute la aplicación)
        } else {
          alert("Credenciales incorrectas. Intento #" + (intentosFallidos + 1));
        }
      }
    };
  
    return (
    <Divcontainer>
      <Divlogin>
        <H1>Inicio sesion</H1>
        <Label>Nombre</Label>
        <Input
          type="text"
          id="usuario"
          value={usuario}
          onChange={handleUsuarioChange}
        />
        <Label>Contraseña</Label>
        <Input
          type="password"
          id="contrasena"
          value={contrasena}
          onChange={handleContrasenaChange}
        />
        <Button onClick={iniciarSesion}>Iniciar sesión</Button>
      </Divlogin>
    </Divcontainer>
    );
  };

  export default InicioSesion;



/* ESTILOS MIENTRAS */

const Input = styled.input
`
  width: 50%;
  padding: 5px;
  margin-bottom: 10px;
`;

const Divlogin = styled.div
`
background-color: #f6b2b2; /* Color rojo pastel */
padding: 20px;
border-radius: 10px;
border-width: 1px;
border-style: solid;
border-color: black;
`

const Divcontainer = styled.div
`
width: 300px;
margin: 0 auto;
margin-top: 200px;
text-align: center;
`
const H1 = styled.div
`
margin-bottom: 30px;
`
const Label = styled.label
`
  display: block;
  margin-bottom: 10px;
`
const Button = styled.button
`
background-color: #4caf50;
color: #ffffff;
padding: 10px 20px;
border: none;
cursor: pointer;
border-radius: 10px;
`