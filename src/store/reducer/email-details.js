import { createSlice } from "@reduxjs/toolkit";

const initialCompose = {
  selectedMessage: null,
  isSentBoxOpen:false ,
  isInboxOpen:true
};

const sendMails = createSlice({
  name: 'sendMail',
  initialState: initialCompose, 
  reducers: {
    openMessage(state, action) {
      state.selectedMessage = action.payload; 
    },
    isSentBoxOpen(state){
        state.isSentBoxOpen = true;
    },
    isSentBoxClose(state){
        state.isSentBoxOpen = false
    },
    isInboxOpen(state){
        state.isInboxOpen=  true;
    },
    isInboxClose(state){
        state.isInboxOpen = false
    }
  }
});

export const { openMessage, isSentBoxOpen, isSentBoxClose, isInboxOpen, isInboxClose } = sendMails.actions; // Destructure and export openMessage directly
export const selected = (state) => state.sendMails.selectedMessage;

export default sendMails.reducer;
