import React, { createContext, useContext, useState } from 'react';

// Create a context for user profile data
const UserProfileContext = createContext();

export function UserProfileProvider({ children }) {
    const [profile, setProfile] = useState(null);

    // You can add more functions to update or manage the profile data if needed

    return (
        <UserProfileContext.Provider value={{ profile, setProfile }}>
        {children}
        </UserProfileContext.Provider>
    );
}

export function useUserProfile() {
    const context = useContext(UserProfileContext);
    if (!context) {
        throw new Error('useUserProfile must be used within a UserProfileProvider');
    }
    return context;
}
