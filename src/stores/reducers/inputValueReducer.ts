import { getUsers } from '../api/getUsers';
import { ActionTypeEnum } from '../constants';

const DEFAULT_STATE = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>, //array of users ids,
    filter: {
        term: '',
        friend: null as null | boolean
    }
}


export const inputValueReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
    case ActionTypeEnum.GetUsers:
        return { ...state, users: action.payload }
    case 'asfasf':
        return { ...state, inputValue: action.payload }
    default:
        return state;
    }
}

export const getUsersAction = (value: string) => ({
    type: ActionTypeEnum.GetUsers,
    payload: value,
});

export const fetchUsersThunkCreater = (dispatch) => {
    getUsers()
    .then(resp => resp.json())
    .then(((data) => {
        console.log(data);
        
        dispatch(getUsersAction(data.items))
    }
    ))
}
