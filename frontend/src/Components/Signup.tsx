import React, { useState } from 'react';

interface SignupProps {
    onClose: () => void; // Function to handle closing the signup popup
}

const Signup: React.FC<SignupProps> = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            // Replace with your form data
            const formData = {
                email,
                password,
            };

            const response = await fetch('https://online-property-dealing-backend.onrender.com/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Signup was successful
                const data = await response.json();
                window.alert("Signed-up Successfully");
                console.log('Signup successful:', data);
            } else {
                // Signup failed
                const errorData = await response.json();
                window.alert("Signup Failed");
                console.error('Signup failed:', errorData);
            }
        } catch (error) {
            console.error('Error during signup:', error);
        }
    };

    return (
        <div className="signup-container">
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
            <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
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
                onClick={handleSignup}
                className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-4 py-2"
            >
                Sign Up
            </button>
        </div>
    );
};

export default Signup;
