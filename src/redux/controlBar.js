// ACTION TYPES
const UPDATE_START = 'UPDATE_START'
const UPDATE_END = 'UPDATE_END'

// ACTION CREATORS
export const updateStart = (year) => {
    return ({
        type: UPDATE_START,
        year,
    });
};

export const updateEnd = (year) => {
    return ({
        type: UPDATE_END,
        year,
    });
};

// REDUCER
export default function controlBarReducer(state = {}, action) {
  switch (action.type) {
      case UPDATE_START:
          return {...state, ...action.year};
      case UPDATE_END:
          return {...state, ...action.year};
      default:
          return state;
  };
};
