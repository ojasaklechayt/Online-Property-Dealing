import React, { useState } from 'react';

const Signup: React.FC = () => {
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
        <div className="signup">
            <h2>Sign Up</h2>
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
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    );
};

export default Signup;
