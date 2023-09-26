import React, { useState } from 'react';

const Login: React.FC = () => {
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
                window.alert("Login Successful")
                const data = await response.json();
                console.log('Login successful:', data);

                // Optionally, you can redirect the user to another page upon successful login
                // For example: window.location.href = '/dashboard';
            } else {
                // Login failed
                window.alert("Login Failed")
                const errorData = await response.json();
                console.error('Login failed:', errorData);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
