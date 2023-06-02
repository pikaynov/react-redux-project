import { BASE_URL } from './constants';

export const getUsers = (): Promise<unknown> => fetch(`https://www.avito.ru/web/1/main/items?forceLocation=false&locationId=637640&lastStamp=1685358744&limit=30&offset=31`, {
    method: 'GET',
});

export const login = (): Promise<unknown> => fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({
        email: 'paulkapay@gmail.com',
        password: 'HOKOTON-1996',
    }),
    headers: {
        'API-KEY': '5009cbcd-793a-4f13-86ab-ef4137c99a66',
    },
});
