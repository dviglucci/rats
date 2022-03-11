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
export function startReducer(state = 2011, action) {
  switch (action.type) {
      case UPDATE_START:
          return action.year;
      default:
          return state;
  };
};

export function endReducer(state = 2012, action) {
    switch (action.type) {
        case UPDATE_END:
            return action.year;
        default:
            return state;
    };
  };
