import React, {Component, useState } from "react";
import '../CSS/login.css';
import logo from '../img/logo.png';
import { Link } from "react-router-dom";
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            personalnumber:"",
            password:"",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const {personalnumber, password} = this.state;
        console.log(personalnumber, password);
        fetch("http://localhost:5000/auth/login", {
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                personalnumber,
                password,
            })
        })
        .then((res) =>res.json())
        .then((data) => {
            console.log(data, "userLogin");
            if(data.status == "ok"){
                alert("Successful Login");
                window.localStorage.setItem("token", data.data);
                window.localStorage.setItem("loggedIn", true);

                window.location.href = "./PersonalPage";
            }
        })
    }
    render(){
        return (
            <div className="form"  onSubmit={this.handleSubmit}>
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="auth-form-container">
                    <h2>Kyçu!</h2>
                    <form className="login-form">
                        <label htmlFor="NumriPersonal">Numri Personal</label>
                        <input type="text" placeholder="Numri Personal" id="Numri Personal" name="Numri Personal" 
                         onChange={e => this.setState({personalnumber: e.target.value})}/>
                        <label htmlFor="Fjalkalimi">Fjalkalimi</label>
                        <input type="text" placeholder="********" id="Fjalkalimi" name="Fjalkalimi" 
                        onChange={(e)=> this.setState({password: e.target.value})}/>
                        <button type="submit">Log In</button>
                    </form>
                    <button className="link-btn"><a href='/sign-up'>Nuk keni llogari? Regjistrohuni këtu.</a></button>
                </div>
            </div>
        );
    }
    
};

export default Login;