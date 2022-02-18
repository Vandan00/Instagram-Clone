// const initialState = 0;

export const reducer = (state = 0, action) => {
  switch (action.type) {
    case "PIC":
      return (state = action.payload);

    default:
      return state;
  }
};
