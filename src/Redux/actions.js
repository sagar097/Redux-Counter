import { decrement_counter_type, increment_counter_type } from './types'; //action types

export const increment=()=>({
    type:increment_counter_type,
    payload:{}
})
// export const increment = () => {
//     return {type: increment_counter_type, payload: {}}
//   }

export const decrement=()=>({
    type:decrement_counter_type,
    payload:{}
})

