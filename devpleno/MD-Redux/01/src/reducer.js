const INITIALSTATE = {
  count: 0
}

export const  reducer = (state =INITIALSTATE, action ) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + action.value}
    case 'DECREMENT':
      return {...state, count: state.count - action.value}
    default:
      return state;
  }
}