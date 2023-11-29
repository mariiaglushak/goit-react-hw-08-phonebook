import { createSelector } from "@reduxjs/toolkit";


export const selectContacts=state=>state.contactsStore.contacts.items;
export const selectIsloading=state=>state.contactsStore.contacts.isLoading;
export const selectError=state=>state.contactsStore.contacts.error;
export const selectFilter=state=>state.contactsStore.filter;

export const selectVisibleContacts = createSelector(
  [ selectContacts, selectFilter],
   (contacts, filter) => {
     return contacts.filter(contact => contact.name.toLowerCase()
      .includes(filter.toLowerCase().trim()))
   }
  );