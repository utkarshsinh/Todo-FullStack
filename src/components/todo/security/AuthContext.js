import { createContext, useContext, useState } from "react";
import { apiClient } from "../api/ApiClient";
import { executeBasicAuthenticationService } from "../api/AuthenticationApiService";

// 1: Create Conext
export const AuthContext = createContext()


export const useAuth = () => useContext(AuthContext)
// Put some state in context
// 2: Share the created context with other components

export default function AuthProvider({children}){
    // Put some state in context
    // const [number, setNumber] = useState(10)
    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)

    const [token, setToken] = useState(null)

    // setInterval( () => setNumber(number+1),10000)

    // function login (username, password){
    //     if (username ==='in28minutes' && password ==='dummy'){
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true
    
    //     } else{
    //         setAuthenticated(false)
    //         setUsername(null)
    //         return false
    //     }
    
    // }

    async function login (username, password){

        const baToken = 'Basic ' + window.btoa(username + ":" + password)

        


        try {

            const response = await executeBasicAuthenticationService(baToken)

            if (response.status==200){
                setAuthenticated(true)
                setUsername(username)
                setToken(baToken)

                apiClient.interceptors.request.use(
                    (config) => {
                        console.log('intercepting and adding token')
                        config.headers.Authorization = baToken
                        return config
                    }
                )
                return true
        
            } else{
                logout()
                return false
            }

        } catch(error) {
            logout()
            return false
        }
     
    }

    function logout(){
        setAuthenticated(false)
        setUsername(null)
        setToken(null)
    }
    

    // const valueTobeshared = {number, isAuthenticated, setAuthenticated}
    return(
        <AuthContext.Provider value = {{isAuthenticated, login, logout, username, token}}>
            {children}
        </AuthContext.Provider>
    )
}