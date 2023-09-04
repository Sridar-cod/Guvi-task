import React from "react";
import { useState } from "react";

const Signup = () => {

  //user signup data
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");

     //user login data
     const [userName, setUserName] = useState("Chandramohon");
     const [UserAge, setUserAge] = useState(23);
     const [UserNumber, setUserNumber] = useState(9156321423);
   
 // for validation 
  const [nameval, setNameval] = useState("empty");
  const [emailval, setEmailval] = useState("empty");
  const [passwordval, setPasswordval] = useState("empty");
  const [conformPassval, setConformPasswordval] = useState("empty");

 //for display the success message
  const [display, setDisplay] = useState("Login");

 //this function is for after submit the login button
  function Login() {
    if (email.length < 15 || email.length === "") {
      setEmailval("fail");
    }
    else if (password.length < 8 || password.length === "") {
      setPasswordval("fail");
    }
    else {
      setEmailval("pass")
      setPasswordval("pass")
      setDisplay("")
    }  
  
  }
  //for switch between login and sign up
  const [change, setChange] = useState("Login");
  function stateChange1() {
    setName("")
    setemail("")
    setpassword("")
    setConformPassword("")
    setChange("Signup");
  }
  function stateChange2() {
    setName("")
    setemail("")
    setpassword("")
    setConformPassword("")
    setChange("Login");
  }
 //this function is for after submit the signup button
  function signup() {
    if (nameval === "pass" && emailval === "pass") {
      if (passwordval === "pass" && conformPassval === "pass") {
  setTimeout(() => {
          setName("")
          setemail("")
          setpassword("")
          setConformPassword("")
          alert('Successfully Signup')
  }, 1000);
      }
    }
  }

  return (
    <div className="outterSignup">
      < div className="innerSingup">
        {display === "Login" ?
          <div className="signupPage">
            <div className="h2"><h2>{change}</h2></div>
         
            <form
              onSubmit={(e) => {
                //for validation
                e.preventDefault();                
                if (name.length < 3 && name.length > 0) {
                  console.log("fail name")
                  setNameval("fail");
                } else if (email.length < 15 && email.length > 0) {
                  console.log("fail email")
                  setEmailval("fail");
                }
                else if (password.length < 8 && password.length > 0) {
                  console.log("fail pass")
                  setPasswordval("fail");
                }
                else if (password !== conformPassword && conformPassword.length > 0) {
                  console.log("fail con pass")
                  setConformPasswordval("fail");
                } else {
                  setNameval("pass")
                  setEmailval("pass")
                  setPasswordval("pass")
                  setConformPasswordval("pass")
                }
              }}
            >
{/* signup form */}
              <div className="signupName">
              {change === "Login" ? null : (
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                  type="text"
                  placeholder="FullName"
                  name="Name"
                />
                )}{" "}

 {/* for error msg */}
                 {nameval === "fail" ? <p style={{ color: 'red', fontSize: '.7rem' }}>User name is required</p> : null} </div>
               
 {/* for email input */}
              <div className="signupEmail">           
              <input
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                required
                type="email"
                placeholder="Email"
                name="Email"
                />
                
 {/* for error msg */}
                {emailval === "fail" ? <p style={{ color: 'red', fontSize: '.7rem' }}>Enter a valid Email</p> : null}
              </div>

 {/* for password input */}
              <div className="signupPassword">
              <input
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                required
                type="password"
                placeholder="Password"
                name="password"
                />

 {/* for error msg */}
                {passwordval === "fail" ? <p style={{ color: 'red', fontSize: '.7rem' }}>Password contains minimum 8 characters</p> : null}
              </div>
              
{/* for conform input */}
              <div className="signupConformPassword">
              {change === "Login" ? null : (
                <input
                  value={conformPassword}
                  onChange={(e) => {
                    setConformPassword(e.target.value);
                  }}
                  required
                  type="password"
                  placeholder="ConformPassword"
                  name="conform password"
                />
                )}

 {/* for error msg */}
                {conformPassval === "fail" ? <p style={{ color: 'red', fontSize: '.7rem' }}>Not equel to Password</p> : null}
              </div>
              
{/* login&signup button */}
              <div className="Bottons">
              {change === "Login" ? (
                <button onClick={ ()=> Login()} type="submit">Login</button>
              ) : (
                <button onClick={()=>signup()} type="submit">Signup</button>
                )}
              </div>
            </form>
{/*End form */}

{/* switch button */}
            <div className="loginSignupButton">

{/* signup button*/}
              <button
                onClick={() => stateChange1()}
                className={change === "Signup" ? "signupButton" : "loginButton"}
              >
                Signup
              </button>

 {/* login button */}
              <button
                onClick={() => stateChange2()}
                className={change === "Login" ? "signupButton" : "loginButton"}
              >
                Login
              </button>
            </div>
          </div> :

// userData start
          <div className="userInfo">
            <div className="inputs">
              <div className="UserInformation">
                <h1 style={{ color: "yellow", backgroundColor: "rgb(200, 200, 200)", padding: '5px' }}>User Information</h1>
            </div>
                
{/* updateform */}
              <form onSubmit={(e) => {
                e.preventDefault();
                setTimeout(() => alert(`Hi ${userName}, Successfully updated the Information `), 1000)

              }} className="userForm" action="">

{/* name input */}
                <div className="userinputs">
              <label htmlFor=" name"> Name</label>
                  <input value={userName} onChange={(e) => setUserName(e.target.value)} id="name" required type="text" />
                </div>

{/* date input */}
                <div className="userinputs">
              <label htmlFor="date "> DOB</label>
                  <input id="date" type="date" required/>
                </div>

{/* age input */}
                <div className="userinputs">
              <label htmlFor=" age"> Age</label>
                  <input value={UserAge} onChange={(e) => setUserAge(e.target.value)} id="age" type="number" required />
                </div>

{/* gender input */}
                <label htmlFor="">Gender</label>

                <div className="userGender">
                  <label htmlFor=""></label>
                  <input name="gender" id="male" type="radio" required />
                  
                 <label htmlFor="male"> Male</label>
                 <input name="gender" id="female" type="radio" required/>
                 <label htmlFor="female"> Female</label>
                </div>
                
{/* mobile number input */}
                <div className="userinputs">
              <label   htmlFor="number"> Mobile Number</label>
                  <input required value={UserNumber} onChange={(e) => setUserNumber(e.target.value)} id="number" type="number" />
                </div>

{/* save button */}
                <div className="saveButton">
                  <button  type="submit">Save</button>
                </div> 

{/* logout button */}
                <div className="logoutButton">
                  <button type="button" onClick={() => setDisplay('Login')} className="logoutButton" >LogOut</button>         
               </div>
             </form>  
          </div>
        </div>}
      </div>
    </div>
  );
};

export default Signup;
