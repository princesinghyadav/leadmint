import { useState } from "react"
import { useNavigate } from "react-router-dom"; 



export function Login (){
const navigate=useNavigate();

const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    // Regex pattern for email validation
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

   
    const handleSubmit = (e) => {
        e.preventDefault();
        
        let valid = true;

  
        if (!emailPattern.test(email)) {
            setEmailError("Please enter a valid email.");
            valid = false;
        } else {
            setEmailError("");
        }

        
        if (!password) {
            setPasswordError("Password cannot be empty.");
            valid = false;
        } else {
            setPasswordError("");
        }

      
        if (valid) {
            console.log("Login successful!");
            navigate("/Home");
            // Implement login action here, e.g., API call
        }
    };

    return (
        <>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleSubmit} style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
                <h2 style={{textAlign:"center"}}>Login</h2>

               
                <div style={{ marginBottom: '10px' }}>
                    <label>Email:</label>
                    <input className="input input-solid" placeholder="Enter the email" 
                     type="text"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' }}/>
                    {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
                </div>

                
                <div style={{ marginBottom: '10px' }}>
                    <label>Password:</label>
                    <input
                     className="input input-solid"
                     placeholder="Enter the password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
                </div>

           
              
                <button className="btn btn-primary"  type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', borderRadius: '4px', border: 'none' }}>
                    Login</button>
            </form>
           
        </div>






       

</>

    );
}




