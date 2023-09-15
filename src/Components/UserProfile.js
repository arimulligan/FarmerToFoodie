import { createContext, useContext, useState } from 'react';

const UserContext = createContext([null, () => {}]);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={[user, setUser]}>
        {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};

// export const isLoggedIn = () => {
//     const [user] = useContext(UserContext); // Access user directly from context
//     return user !== null; // Check if the user is not null
// };