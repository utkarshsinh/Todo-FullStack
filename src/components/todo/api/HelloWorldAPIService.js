import axios from 'axios'
import { apiClient } from './ApiClient'
// export function retrieveHelloWorldbean(){
//     return axios.get('http://localhost:8080/hello-world-bean')
// }



export const retrieveHelloWorldbean = () =>apiClient.get('/hello-world-bean')

export const retrieveHelloWorldpathvariable = (username, token) => apiClient.get(`/hello-world/path-variable/${username}`
// , {
//     headers: {
//         Authorization: token
//     }
// }
)

