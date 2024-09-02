import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact,deleteContact } from "./contactsOps";
const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // Об'єкт редюсерів
  // reducers: {
  //   deleteContact: (state, action) => {
  //     state.items = state.items.filter(
  //       (contact) => contact.id !== action.payload
  //     );
  //   },
  //   addContact: (state, action) => {
  //     state.items.push(action.payload);
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
         state.error = null;
         state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null
          state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
    })
     .addCase(deleteContact.rejected ,handleRejected)
  },
});
//  export const {  deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contacts.items;
// Редюсер  слайсу
export const contactsReducer = contactsSlice.reducer;

