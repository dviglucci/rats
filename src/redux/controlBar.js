// ACTION TYPES
const UPDATE_START = 'UPDATE_START'
const UPDATE_END = 'UPDATE_END'
const SHOW_RATS = 'SHOW_RATS'
const SHOW_PIGEONS = 'SHOW_PIGEONS'

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

export const showRats = (boolean) => {
    console.log('inside showRats action creator...')
    return ({
        type: SHOW_RATS,
        showRats: boolean,
    });
};

export const showPigeons = (boolean) => {
    return ({
        type: SHOW_PIGEONS,
        showPigeons: boolean,
    });
};

// REDUCERS
export function startReducer(state = 2011, action) {
  switch (action.type) {
      case UPDATE_START:
          return parseInt(action.year);
      default:
          return state;
  };
};

export function endReducer(state = 2012, action) {
    switch (action.type) {
        case UPDATE_END:
            return parseInt(action.year);
        default:
            return state;
    };
};

export function ratReducer(state = false, action) {
    switch (action.type) {
        case SHOW_RATS:
            return action.showRats;
        default:
            return state;
    };
};

export function pigeonReducer(state = false, action) {
    switch (action.type) {
        case SHOW_PIGEONS:
            return action.showPigeons;
        default:
            return state;
    };
};
