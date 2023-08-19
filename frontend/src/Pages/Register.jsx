import React, { Component, useState } from "react";
import '../CSS/signup.css';
import logo from '../img/logo.png';
import { Link } from "react-router-dom";

class Register extends Component {
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
        const {personalnumber, password, confirmpassword} = this.state;
        console.log(personalnumber, password);
        fetch("http://localhost:5000/register", {
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
                confirmpassword
            })
        })
        .then((res) =>res.json())
        .then((data) => {
            console.log(data, "userRagistration");
        })
    }
    render(){
        return (
            <div className="form" onSubmit={this.handleSubmit}>
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="auth-form-container">
                    <h2>Regjistrohuni!</h2>
                        <form className="register-form" >
                    
                            <label htmlFor="NumriPersonal">NumriPersonal</label>
                            <input type="text"  placeholder="NumriPersonal" id="NumriPersonal"
                            onChange={e => this.setState({personalnumber: e.target.value})}  />
                            <label htmlFor="Fjalkalimi">Fjalkalimi</label>
                            <input type="text" placeholder="********" id="Fjalkalimi"
                            onChange={e => this.setState({password: e.target.value})} />
                            <label htmlFor="name">Konfirmo Passwordin</label>
                            <input type="text" id="konfirmofjalkalimin" placeholder="********" 
                           />
                            <button type="submit">Regjistohu</button>
                        </form>
                        <button className="link-btn" ><a href='/log-in'>Nëse keni një llogari vazhdoni këtu.</a></button>
                </div>
            </div>
        )
    }
}

export default Register;
  

