
import React, { useState } from "react";

export const Login = (props) => {
    const [NumriPersonal, setNumriPersonal] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(NumriPersonal);
    }
/*test*/
    return (
        <div className="auth-form-container">
            <h2>Kyçu!</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="NumriPersonal">Numri Personal</label>
                <input value={NumriPersonal} onChange={(e) => setNumriPersonal(e.target.value)}type="Numri Personal" placeholder="Numri Personal" id="Numri Personal" name="Numri Personal" />
                <label htmlFor="Fjalkalimi">Fjalkalimi</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="Fjalkalimi" placeholder="********" id="Fjalkalimi" name="Fjalkalimi" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Nuk keni llogari? Regjistrohuni këtu.</button>
        </div>
    )
}