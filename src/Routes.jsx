import React from "react";
import Register from "./Register";
import { useContext } from "react";
import { UserContext } from "./userContext";

function Routes() {
          const {username, id}= useContext(UserContext);

          if(username){
                    return "logged in"
          }

          return(
                    <>
                              <Register />
                    </>
          );
}

export default Routes;