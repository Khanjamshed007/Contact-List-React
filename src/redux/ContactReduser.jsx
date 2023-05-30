const initialState = [];
const contactReduser = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CONTACTS":
      return action.payload;

    case "ADD_CONTACT":
      return [...state, action.payload];

    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;

    case "DELETE_CONTACT":
      const filterContact = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      return filterContact;

    default:
      return state;
  }
};
export default contactReduser;