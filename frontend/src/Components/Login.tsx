import React, { useState } from 'react';

interface LoginProps {
    setLoggedin: React.Dispatch<React.SetStateAction<boolean>>;
    onClose: () => void; // Function to handle closing the login popup
}

const Login: React.FC<LoginProps> = ({ setLoggedin, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            // Replace with your form data
            const formData = {
                email,
                password,
            };

            const response = await fetch('https://online-property-dealing-backend.onrender.com/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Login was successful
                window.alert("Login Successful");
                const data = await response.json();
                console.log('Login successful:', data);
                setLoggedin(true);
                // Optionally, you can redirect the user to another page upon successful login
                // For example: window.location.href = '/dashboard';
            } else {
                // Login failed
                window.alert("Login Failed");
                const errorData = await response.json();
                console.error('Login failed:', errorData);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="login-container">
            <button
                onClick={onClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-white">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-white">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
                />
            </div>
            <button
                onClick={handleLogin}
                className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-4 py-2"
            >
                Login
            </button>
        </div>
    );
};

export default Login;
