
import { useNavigate } from 'react-router-dom';



import React, { useState } from 'react';

export function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const navigate=useNavigate();
    // Regex pattern for email validation
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const handleSubmit = (e) => {
        e.preventDefault();

        let isValid = true;

      
        if (!emailPattern.test(email)) {
            setEmailError("Please enter a valid email.");
            isValid = false;
        } else {
            setEmailError("");
        }
 
        if (!password) {
            setPasswordError("Password cannot be empty.");
            isValid = false;
        } else {
            setPasswordError("");
        }
 
        if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords do not match.");
            isValid = false;
        } else {
            setConfirmPasswordError("");
        }

        
        if (isValid) {
            console.log("Registration successful!");
            navigate("/Home")
            // You can proceed with registration actions here, example:- API calls
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleSubmit} style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
                <h2 style={{textAlign:"center"}}>Register</h2>
 
                <div style={{ marginBottom: '10px' }}>
                    <label>Email:</label>
                    <input
                    className="input input-solid"
                    placeholder='enter the email'
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
                </div>

                
                <div style={{ marginBottom: '10px' }}>
                    <label>Password:</label>
                    <input
                    placeholder='enter the  password'
                    className="input input-solid"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
                </div>

               
                <div style={{ marginBottom: '10px' }}>
                    <label>Confirm Password:</label>
                    <input
                        placeholder='enter the confirm password'
                        className="input input-solid"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    {confirmPasswordError && <span style={{ color: 'red' }}>{confirmPasswordError}</span>}
                </div>

            
                <button className="btn btn-primary" type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', borderRadius: '4px', border: 'none' }}>
                    Register
                </button>
                
            </form>
        </div>
    );
}
