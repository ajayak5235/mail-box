import { configureStore } from '@reduxjs/toolkit';
// import authSlice from './reducer/auth-slice'
import sendMail from './reducer/compose-slice'
const store =  configureStore({
    reducer:{
      isOpen:sendMail
    }
})

export default store;