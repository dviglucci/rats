// ACTION TYPES
const UPDATE_START = 'UPDATE_START';
const UPDATE_END = 'UPDATE_END';
const SHOW_RATS = 'SHOW_RATS';
const SHOW_PIGEONS = 'SHOW_PIGEONS';
const SHOW_CIRCLE = 'SHOW_CIRCLE';
const RATS_IN_CIRCLE = 'RATS_IN_CIRCLE';
const PIGEONS_IN_CIRCLE = 'PIGEONS_IN_CIRCLE';


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

export const showCircle = () => {
    return ({
        type: SHOW_CIRCLE,
        showCircle: true,
    });
};

export const ratsInCircle = (ratCount) => {
    return ({
        type: RATS_IN_CIRCLE,
        ratsInCircle: ratCount,
    });
};

export const pigeonsInCircle = (pigeonCount) => {
    return ({
        type: PIGEONS_IN_CIRCLE,
        pigeonsInCircle: pigeonCount,
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

export function circleReducer(state = false, action) {
    switch (action.type) {
        case SHOW_CIRCLE:
            return action.showCircle;
        default:
            return state;
    };
};

export function ratsInCircleReducer(state = 0, action) {
    switch (action.type) {
        case RATS_IN_CIRCLE:
            return action.ratsInCircle;
        default:
            return state;
    };
};

export function pigeonsInCircleReducer(state = 0, action) {
    switch (action.type) {
        case PIGEONS_IN_CIRCLE:
            return action.pigeonsInCircle;
        default:
            return state;
    };
};
