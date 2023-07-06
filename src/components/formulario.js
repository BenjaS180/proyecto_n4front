import React, { useState } from 'react'
import styled from "styled-components"

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [correo, setCorreo] = useState("");
    const [masculino, setMasculino] = useState("");
    const [femenino, setFemenino] = useState("");
    const [acepto, setAcepto] = useState("");
    const [selectedCountry, setSelectedCountry] = useState('');

    const countries = [
        { value: '', label: 'Seleccione un país' },
        { value: 'argentina', label: 'Argentina' },
        { value: 'brasil', label: 'Brasil' },
        { value: 'chile', label: 'Chile' },
        { value: 'peru', label: 'Perú' },
      ];

    const handleCountryChange = (event) => {
      setSelectedCountry(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes realizar las acciones que deseas al enviar el formulario
        console.log('País seleccionado:', selectedCountry);
      };
      

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handleEdadChange = (event) => {
        setEdad(event.target.value);
    };

    const handleCorreoChange = (event) => {
        setCorreo(event.target.value);
    };

    const handleMasculinoSelec = (event) => {
        setMasculino(event.target.value);
    };

    const handleFemeninoSelec = (event) => {
        setFemenino(event.target.value);
    };

    const handleAceptoChange = (event) => {
        setAcepto(event.target.value)
    }

  return (
    <div>
    <h1>Formulario de ejemplo</h1>
      <Label>Nombre:</Label>
      <input
        type="text"
        id="nombre"
        value={nombre}
        onChange={handleNombreChange}
        required
      />
  
      <Label>Edad:</Label>
      <input
        type="text"
        id="edad"
        value = {edad}
        required
        pattern="[0-9]+"
        onChange={handleEdadChange}
        title="Ingrese un número válido"
      />
  
      <Label>Correo electrónico:</Label>
      <input
        type="email"
        id="correo"
        value = {correo}
        onChange={handleCorreoChange}
        required
      />
  
      <Label>Género:</Label>
      <input
        type="radio"
        id="masculino"
        value={masculino}
        onChange={handleMasculinoSelec}
        required
      />
      <Label>Masculino</Label>
      <input
        type="radio"
        id="femenino"
        value={femenino}
        onChange={handleFemeninoSelec}
      />
      <Label>Femenino</Label>
  
      <Label>Acepto los términos y condiciones:</Label>
      <input
        type="checkbox"
        id="acepto"
        value={acepto}
        onChange={handleAceptoChange}
        required
        />
      <form onSubmit={handleSubmit}>
        <label htmlFor="pais">País:</label>
        <select id="pais" name="pais" value={selectedCountry} onChange={handleCountryChange} required>
          {countries.map((country) => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}
        </select>
    
        <input type="submit" id="submitBtn" value="Enviar" />
      </form>
    </div>
  )
}

export default Formulario


const Label = styled.label
`
display: block;
margin-bottom: 5px;
`