import React, { useState } from "react";
import '../CSS/signup.css';
import logo from '../img/logo.png';
import { Link } from "react-router-dom";

function Register() {
    const [personalnumber, setPersonalNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("");
    const [secretKey, setSecretKey] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (role === "Admin" && secretKey !== "OVS2023") {
            e.preventDefault();
            alert("Invalid Admin");
        } 
        
        if (password !== confirmpassword) {
            alert("Passwords do not match");
            return;
        }
    
        fetch("http://localhost:5000/auth/register", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                personalnumber,
                password,
                confirmpassword,
                role,
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegistration");
                if (data.status === "ok") {
                    alert("Successful Registration");
                } else {
                    alert("All fields are required");
                }
            });
    }

    return (
        <div className="form">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="auth-form-container">
                <div className="register">
                <h2>Regjistrohuni!</h2>
                </div>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="NumriPersonal">NumriPersonal</label>
                    <input type="text" placeholder="NumriPersonal" id="NumriPersonal"
                        onChange={e => setPersonalNumber(e.target.value)} />
                    <label htmlFor="Fjalkalimi">Fjalkalimi</label>
                    <input type="password" placeholder="********" id="Fjalkalimi"
                        onChange={e => setPassword(e.target.value)} />
                    <label htmlFor="name">Konfirmo Passwordin</label>
                    <input type="password" id="konfirmofjalkalimin" placeholder="********"
                        onChange={e => setConfirmPassword(e.target.value)} />
                    {role === "Admin" ? (
                        <div className="secretkey">
                            <label htmlFor="SecretKey">Secret Key</label>
                            <input type="text" id="secretkey" placeholder="Secret Key"
                                onChange={e => setSecretKey(e.target.value)} />
                        </div>
                    ) : null}
                    <label>Choose Role:</label>
                    <div>
                        <label>
                            <input 
                                className="role"
                                type="radio" 
                                value="User" 
                                checked={role === "User"}
                                onChange={() => setRole("User")}
                            />
                            User
                        </label>
                        <label>
                            <input 
                                className="role"
                                type="radio" 
                                value="Admin"
                                checked={role === "Admin"}
                                onChange={() => setRole("Admin")}
                            />
                            Admin
                        </label>
                    </div>
                    <button type="submit">Regjistohu</button>
                </form>
                <button className="link-btn" ><a href='/log-in'>Nëse keni një llogari vazhdoni këtu.</a></button>
            </div>
        </div>
    );
}

export default Register;
