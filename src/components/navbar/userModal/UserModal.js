import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../../../firebase/firebase-utils'
import { HrStyled, LinkStyled, ModalContainerStyled, UsernameStyled } from './UserModalStyle'
import * as userActions from '../../../redux/user/user-actions'
import { AnimatePresence } from 'framer-motion'

const UserModal = () => {

const {currentUser, hiddenMenu} = useSelector(state => state.user)
const dispatch = useDispatch()


useEffect(() => {
    if (!hiddenMenu) {
      dispatch(userActions.toggleMenuHidden());
    }
  }, [dispatch]);


  return (
    <>
    <AnimatePresence>
          {!hiddenMenu && (
        <ModalContainerStyled
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ duration: 0.5 }}
          key='cart-user'
        >
          <UsernameStyled>{`Hola ${currentUser?.displayName}!!`}</UsernameStyled>
          <HrStyled />
          <LinkStyled to='/mis-ordenes'><h3>Mis Ordenes</h3></LinkStyled>
          <span
            onClick={() =>
              auth
                .signOut()
                .then(() => dispatch(userActions.toggleMenuHidden()))

            }>Cerrar Sesion</span>
        </ModalContainerStyled>
      )
      }

    </AnimatePresence>
    </>
  )
}

export default UserModal