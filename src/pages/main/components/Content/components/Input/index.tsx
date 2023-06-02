import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInputValue } from 'src/stores/actionCreators';
// import { login } from 'src/stores/api/getUsers';
import { fetchUsersThunkCreater } from 'src/stores/reducers';

export const Input = () => {
    const dispatch = useDispatch();
    const users: string = useSelector(({ inputReducer }) => inputReducer.users);

    useEffect(() => {
        dispatch(fetchUsersThunkCreater)
    }
    , [])

    return (
        <>
            <div>Hello</div>

            <div>{users.map((user) =><div>{user.title}</div>)}</div>
        </>
    )
}
