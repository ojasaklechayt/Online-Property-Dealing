/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
    id: string;
    email: string;
}

interface UserContextType {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

export const UserProvider: React.FC = ( {children} ) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Check if the user is already authenticated by checking token cookie
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)jwt\s*=\s*([^;]*).*$)|^.*$/, '$1');

        if (token) {
            // Implement logic to verify the token and fetch user details from the server
            // Example: You can make a request to a /api/verify-token endpoint on your backend
            // and set the user if the token is valid
            // Replace 'YOUR_API_URL' with your actual backend API URL
            fetch('https://online-property-dealing-backend.onrender.com/api/users/verify-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.user) {
                        setUser(data.user);
                    } else {
                        setUser(null);
                    }
                })
                .catch(error => {
                    console.error('Error while verifying token:', error);
                    setUser(null);
                });
        } else {
            setUser(null);
        }
    }, []);

    const login = (user: User) => {
        // Implement login logic, e.g., set cookies or local storage
        setUser(user);
    };

    const logout = () => {
        // Implement logout logic, e.g., clear cookies or local storage
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
