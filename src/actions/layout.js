export const TOGGLE_LAYOUT_PAGE = 'TOGGLE_LAYOUT_PAGE';

export const toggleLayoutPage = (isOpen, color) => dispatch => {
  return dispatch({
    type: TOGGLE_LAYOUT_PAGE,
    payload: {
      isOpen,
      color,
    }
  });
}
