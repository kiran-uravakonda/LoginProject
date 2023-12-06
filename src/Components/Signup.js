import {useState} from 'react';
import { Link } from "react-router-dom";
function SignUp() {

    let [value,setValue]=useState({
        firstName:'',
        email:'',
        password:'',
        emailErr:'',
        passwordErr:'',
        checkErr:'',
        nameErr:''
    })
 function updateChange(event){
        // console.log(event.target.value.length)
        setValue({
            ...value,
            [event.target.name]:event.target.value
        })
       
    }

  
    function submitData(event){
   event.preventDefault()
     validate()
    }

    function validate(){
      if(!value.email && !value.password && !value.firstName)
      {
        setValue({...value,checkErr:"please enter values"})
      }
      else if(!value.firstName){
        setValue({...value,nameErr:"please enter Name"})
      }
      else if(!value.password){
        setValue({...value,passwordErr:"please enter password"})
      }
      else if(!validatePassword(value.password)){
        setValue({...value,passwordErr:"please enter valid password"})
      }
      else if(!value.email){
        setValue({...value,emailErr:"please enter email"})
      }
      else if(!validateEmail(value.email)){
        setValue({...value,emailErr:"please enter valid email"})
      }
      else{
            console.log("success")
      }
    }


    function validateEmail(email) {
      var valid =  /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      return valid.test(email);
    }



    function validatePassword(password) {
      var valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
      return valid.test(password);
    }

  return (
    <div className="main">
     <section className="container-fluid">
  <section className="row justify-content-center">
  <section className="col-12 col-sm-6 col-md-4">
        <form className="form-container form">

        <div className="form-group">
          <h4 className="text-center font-weight-bold"> SignUpForm </h4>
          <label htmlFor="Inputuser1"><strong>Name</strong></label>
           {/* <input type="email" className="form-control" id="Inputuser1" aria-describeby="usernameHelp" placeholder="Enter username"/> */}
           <input type="text" className="form-control" placeholder="enterName" name="firstName" value={value.firstName} onChange={updateChange}/>
        </div>
        <span style={{color:"red"}}>{value.nameErr}</span>
     <div className="form-group">
          <label htmlFor="Inputuser1"><strong>Email</strong></label>
           {/* <input type="email" className="form-control" id="Inputuser1" aria-describeby="usernameHelp" placeholder="Enter username"/> */}
           <input type="email" className="form-control" placeholder="abc@gmail.com" name="email" value={value.email} onChange={updateChange}/>
        </div>
        <span style={{color:"red"}}>{value.emailErr}</span>
        <div className="form-group">
          <label htmlFor="InputPassword1"><strong>Password</strong></label>
          <input type="password" className=" form-control" placeholder="minimum 8 characters" name="password" value={value.password} onChange={updateChange}/>
        </div>
        <div style={{color:"red"}}>{value.passwordErr}</div>
        <button type="Sign in" className="btn btn-primary btn-block button" onClick={submitData}>Sign Up</button>
        <div className="form-footer">
        <span style={{color:"red",marginLeft:"130px"}}>{value.checkErr}</span>
        <p> Already hava account? <Link to="/">Login</Link></p>
        </div>
        </form>
      </section>
    </section>
  </section>

    

    </div>
  );
}

export default SignUp;
