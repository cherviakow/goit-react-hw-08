import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./contactsOps";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const selectContacts = (state) => state.contacts.items;

export const selectFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
    )
);

export default slice.reducer;






// import { createSlice } from "@reduxjs/toolkit";
// import initialContacts from "../initialContacts.json";
// import { nanoid } from "nanoid";

// const slice = createSlice({
//   name: "contacts",
//   initialState: {
//     items: initialContacts,
//   },
//   reducers: {
//     addContact: {
//       reducer: (state, action) => {
//         state.items.push(action.payload);
//       },
//       prepare: (name, number) => {
//         return {
//           payload: {
//             id: nanoid(),
//             name,
//             number,
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       const index = state.items.findIndex(
//         (contact) => contact.id === action.payload
//       );
//       state.items.splice(index, 1);
//     },
//   },
// });

// export const { addContact, deleteContact } = slice.actions;

// export default slice.reducer;

