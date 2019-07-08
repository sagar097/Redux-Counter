import {decrement_counter_type, increment_counter_type} from './types';

const initialState={
    count:0
};

export const CounterReducer=(state=initialState,action)=>{       //reducer function
    switch (action.type) {
        case increment_counter_type:
            return{ 
                count: state.count+1
                }
        case decrement_counter_type:
            return{ 
                count: state.count-1
            }
        default:
          return state;
    }
}

export default CounterReducer;

