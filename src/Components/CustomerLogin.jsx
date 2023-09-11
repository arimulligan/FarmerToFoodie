import React from "react";
import "./style/customerLogin.css";

const CustomerLogin = ()=> {
    return (
      <div className="macbook-pro">
      <div className="overlap-group">
          <div className="text-wrapper">Farmer</div>
          <div className="rectangle" />
          <div className="div">Enter your password</div>
      </div>
      <img className="undraw-online" alt="Undraw online" src="undraw-online-groceries-a02y-1.svg" />
      <div className="text-wrapper-2">Register</div>
      <div className="overlap">
          <div className="text-wrapper-3">Enter your name</div>
      </div>
      <div className="div-wrapper">
          <div className="text-wrapper-4">Enter your email</div>
      </div>
      <div className="text-wrapper-5">Name</div>
      <div className="text-wrapper-6">Email</div>
      <div className="text-wrapper-7">Password</div>
      <div className="overlap-2">
          <div className="rectangle-2" />
          <div className="text-wrapper-3">Enter your city</div>
          <div className="rectangle-3" />
          <div className="text-wrapper-8">Enter your country</div>
      </div>
      <div className="text-wrapper-9">City</div>
      <div className="text-wrapper-10">Country</div>
      <div className="overlap-3">
          <div className="text-wrapper-11">REGISTER</div>
      </div>
      <p className="already-have-an">
          <span className="span">Already have an account? </span>
          <span className="text-wrapper-12">login</span>
      </p>
  </div>
    );
}

export default CustomerLogin;
