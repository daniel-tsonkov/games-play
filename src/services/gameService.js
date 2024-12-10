import { request } from "./requester";

const baseUrl = 'http://localhost:3030';

//asinc
// export const getAll = async () => {
//     const res = await fetch(`${baseUrl}/data/games?sortBy=_createdOn%20desc`);
//     return await res.json();
// }

//promice
export const getAll = () => {
    return request(`${baseUrl}/data/games`)
}