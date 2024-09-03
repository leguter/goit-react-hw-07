// import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "./contactsSlice";
export const filterValue = (state) => state.filter.filterValue;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export const filteredContacts = createSelector(
  [selectContacts, filterValue],
  (contacts, filterValue) => {
    contacts.filter((card) =>
      card.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);
