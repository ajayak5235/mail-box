// import { configureStore } from '@reduxjs/toolkit';
// // import authSlice from './reducer/auth-slice'
// import composeMail from './reducer/compose-slice'
// import sendMails from './reducer/email-details'
// const store =  configureStore({
//     reducer:{
//       isOpen:composeMail, sendMess: sendMails
//     }
// })

// export default store;


import { configureStore } from '@reduxjs/toolkit';
import composeMail from './reducer/compose-slice'
import sendMailsReducer from './reducer/email-details' // Importing the reducer directly

const store =  configureStore({
    reducer:{
      isOpen: composeMail,
      sendMess: sendMailsReducer // Use the imported reducer
    }
})

export default store;
