import React from 'react'
import RegisterCard from '../../components/register/RegisterCard'
import { useLocation } from 'react-router-dom'
import { createUser, signInWithGoogle } from '../../firebase/firebase-utils'
import {registerInitialValues, registerValidationSchema} from '../../formik/index'
import { Form, LoginButtonGoogleStyled, LoginEmailStyled, RegisterInput } from './RegisterStyle'
import { Formik } from 'formik'
import useRedirect from '../../hooks/useRedirect'
import { LoginInputStyled } from '../../components/login/LoginStyle'
import LoginInput from '../../components/login/LoginInput'
import Submit from '../../components/submit/Submit'

const Register = () => {

  const {state} = useLocation()

  useRedirect(state?.redirectedFromCheckout ? '/checkout' : '/');
  
  return (
    <>
  <Formik
    initialValues={registerInitialValues}
    validationSchema={registerValidationSchema}
    onSubmit={async (values, actions) => {
      try {
        await createUser(values.email, values.password, values.name);
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          alert('Mail en uso');
        }
      }
      actions.resetForm();
    }}
  >
    <Form>
    <LoginInput name='name' type='text' placeholder='nombre'></LoginInput>
    <LoginInput name='email' type='email' placeholder='email'></LoginInput>
    <LoginInput name='password' type='password' placeholder='contraseña'></LoginInput>
    <LoginButtonGoogleStyled type='button' onClick={signInWithGoogle}>
            <img
              src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/google-icon_jgdcr1.png'
              alt='Google logo'
            />
            Google
          </LoginButtonGoogleStyled>
          <LoginEmailStyled to='/login'>
            <p>¿Ya tenes cuenta? Inicia sesión</p>
          </LoginEmailStyled>
          <Submit>Registrarte</Submit>
    </Form>
  </Formik>
    </>
  )
}

export default Register