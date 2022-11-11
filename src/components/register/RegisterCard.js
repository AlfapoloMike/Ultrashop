import React from 'react'
import { RegisterContainer } from './RegisterStyle'

const RegisterCard = () => {
  return (
    <>
<RegisterContainer>

<input placeholder='nombre'></input>
<input placeholder='correo'></input>
<input placeholder='contraseña'></input>
</RegisterContainer>
    </>
  )
}

export default RegisterCard