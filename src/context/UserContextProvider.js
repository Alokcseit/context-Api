import UserContext from "./UserContext";
import { useState } from "react";
const UserContextProvider = ({ children }) => {
    const [User, SetUser] = useState(null);

    return (
        <UserContext.Provider value={{ User, SetUser }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider