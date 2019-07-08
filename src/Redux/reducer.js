import {decrement_counter_type, increment_counter_type} from './types';

const initialState={
    count:0
};

export const CounterReducer=(state=initialState,action,payload)=>{       //reducer function
    switch (action.type) {
        case increment_counter_type:
            return  Object.assign({},{count: state.count+1})   //{...state, qty: action.payload }; instead we can also use Spread operator
        case decrement_counter_type:
            return Object.assign({},{count: state.count-1})  // one of the core principles of Redux is to never mutate state
        default:
          return state;
    }
}

export default CounterReducer;

