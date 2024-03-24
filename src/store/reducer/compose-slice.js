import { createSlice } from "@reduxjs/toolkit";


const initialCompose = {
  isSendMailOpen: false ,
  isDetailsMail:false,

};

const sendMail = createSlice({
  name: 'composeMail',
  initialState: initialCompose, 
  reducers: {
    openSendMail(state) {
      state.isSendMailOpen = true;
    },
    closeSendMail(state) {
      state.isSendMailOpen = false;
    },
    isDetailsOpen(state){
      state.isDetailsMail = true;
    },
    isDetailsClose(state){
      state.isDetailsMail = false;
    },
   
  }
});

export const { openSendMail, closeSendMail , isDetailsOpen, isDetailsClose, } = sendMail.actions;
 

export default sendMail.reducer;

