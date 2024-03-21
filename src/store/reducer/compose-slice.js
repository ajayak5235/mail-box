import { createSlice } from "@reduxjs/toolkit";

// Define the initial state properly
const initialCompose = {
  isSendMailOpen: false 
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
    }
  }
});

export const { openSendMail, closeSendMail } = sendMail.actions;
export default sendMail.reducer;
