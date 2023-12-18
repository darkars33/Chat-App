import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
          const [username, setUsername] = useState(null);
          const [id, setId] = useState(null);

          useEffect(() =>{
                    try {
                              axios.get('/profile').then(response =>{
                                        setId(response.data.userId);
                                        setUsername(response.data.username);
                              })
                    } catch (error) {
                              console.log(error)
                    }
          },[])

          return(
                    <UserContext.Provider value={{username, setUsername, id, setId}}>
                              {children}
                    </UserContext.Provider>
          );
}