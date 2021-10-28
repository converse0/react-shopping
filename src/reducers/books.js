const initialState = {
  books: [
    {
      id: 0,
      title: 'Hello world',
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return {
        ...state,
        books: action.payload,
      };
    case 'ADD_BOOKS':
      return {
        books: [...state.books, action.payload],
      };
    default:
      return state;
  }
};
