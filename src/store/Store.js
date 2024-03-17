import { configureStore } from '@reduxjs/toolkit';
import authSlice from './reducer/auth-slice'
const store =  configureStore({
    reducer:{
      auth: authSlice
    }
})

export default store;