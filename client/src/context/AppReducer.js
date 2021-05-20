const AppReducer = (state,action) => {
    switch(action.type) {
        case "GET_EVENTS":
            return {
                ...state,
                events: action.payload,
                loading: false
            }
        case "EDIT_EVENT":
            let events = [];
            state.events.forEach(event => {
                if (event._id === action.payload._id) {
                    events.push(action.payload)
                }else{
                    events.push(event);
                }
            });
            return {
                ...state,
                events: events
            }
        case "DELETE_EVENT":
            return {
                ...state,
                events: state.events.filter(event => event._id !== action.payload)
            }
        case "ADD_EVENT":
            return {
                ...state,
                events: [...state.events, action.payload]
            }
        case "EVENT_ERROR":
            return {
                ...state,
                error: true,
                loading: false
            }
        default:
            return state;
    }
}
export default AppReducer;