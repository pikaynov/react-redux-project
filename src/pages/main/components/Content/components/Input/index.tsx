import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInputValue } from 'src/stores/actionCreators';
// import { login } from 'src/stores/api/getUsers';
import { isString } from 'lodash';
import { fetchUsersThunkCreater } from 'src/stores/reducers';

export const Input = () => {
    // const dispatch = useDispatch();
    // const users: string = useSelector(({ inputReducer }) => inputReducer.users);

    // useEffect(() => {
    //     dispatch(fetchUsersThunkCreater)
    // }
    // , [])

    // return (
    //     <>
    //         <div>Hello</div>

    //         <div>{users.map((user) =><div>{user.title}</div>)}</div>
    //     </>
    // )

    const [count, setCount] = useState(4);
    let d = 0;
    const str = 'string';
    console.log(
        isString(str),
    );

    useEffect(() => {
        const id = setInterval(() => {
            // setInterval(() => setCount(count + 1), 30000)
            console.log(`Count is: ${count}, ${d}`);
        }, 2000);
        return () => clearInterval(id)
    }, []);

    // console.log('render', count, d);

    return (
        <div>
            {count}
            <button onClick={() => {
                setCount((c) => c + 1);
                d++;
            }}>Increase</button>
        </div>
    );
}
