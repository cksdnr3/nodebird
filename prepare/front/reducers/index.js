import { HYDRATE } from 'next-redux-wrapper';
import user from './user';
import post from './post';
import { combineReducers } from 'redux';

// combineReducers가 알아서 initialState을 세팅해준다.
const rootReducer = combineReducers({
    // HYDRATE(SSR)를 위해 index 리듀서를 추가해준다.
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                return { ...state, ...action.payload };
            default:
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;
