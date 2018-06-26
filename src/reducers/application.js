import { TOGGLE_LAYOUT_PAGE } from '../actions/layout';

const initialState = {
  isPageOpen: false,
  pageColor: 'blue',
}

export default (state = initialState, action) => {

  switch (action.type) {
    case TOGGLE_LAYOUT_PAGE:
      const { color } = action.payload;

      if (color) {
        return {
          ...state,
          isPageOpen: action.payload.isOpen,
          pageColor: action.payload.color
        }
      }

      return {
        ...state,
        isPageOpen: action.payload.isOpen,
      }
    default:
      return state;
  }
}
