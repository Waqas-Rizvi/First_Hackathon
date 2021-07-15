const INITIAL_STATE = {
    Login: {},
    Cards: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN":
            return ({
                ...state,
                Login: action.user
            })
        case "CARDS":
            return({
                ...state,
                Cards: action.Cards
            })
        default:
            return state
    }
}