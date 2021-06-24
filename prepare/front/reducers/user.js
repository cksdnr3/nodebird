import { HYDRATE } from 'next-redux-wrapper';

export const initialState = {
    isLoggedin: false,
    myInfo: null,
    signupData: {},
    loginData: {},
};

export const loginAction = (data) => {
    return {
        type: 'LOGIN',
        data,
    };
};

export const logoutAction = () => {
    return {
        type: 'LOGOUT',
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLoggedin: true,
                myInfo: action.data,
            };
        case 'LOGOUT':
            return {
                ...state,
                isLoggedin: false,
                myInfo: null,
            };
        default:
            return state;
    }
};

export default reducer;
