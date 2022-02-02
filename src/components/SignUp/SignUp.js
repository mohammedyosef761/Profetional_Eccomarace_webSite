import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


function Signup(){
  const [name,setName]= useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]= useState(''); 

  const handleRegister = (e)=>{
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log(name);
   

 localStorage.setItem('email' , JSON.stringify(email));
 localStorage.setItem('password' , JSON.stringify(password));
 localStorage.setItem('name' , JSON.stringify(name));

 setName('');
 setEmail('');
 setPassword('');



  }
    return(
      <div>
      <Header />
      <form>
      <div className="col-md-4 text-center m-auto"  >
      <label for="validationServerUsername" className="form-label text-info my-1" >Username</label>
      <div className="input-group has-validation">
        <span className="input-group-text" id="inputGroupPrepend3">@</span>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
        <div id="validationServerUsernameFeedback" className="invalid-feedback">
          Please choose a username.
        </div>
      </div>

      <div className="col-md-12 my-1">
  <label for="validationServer03" className="form-label text-info" >Email</label>
  <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)}className="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
  <div id="validationServer03Feedback" className="invalid-feedback">
    Please provide a valid email.
  </div>
</div>

<div className="col-md-12 my-1">
  <label for="validationServer03" className="form-label text-info">Passwrod</label>
  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
  <div id="validationServer03Feedback" className="invalid-feedback">
    Please provide a valid passWord.
  </div>
</div>

<button className="btn btn-success my-5" onClick={handleRegister}>

  <Link to="SignIn" className="btn btn-success">SignUp</Link>

</button>
     </div>
</form>
     <Footer />
</div>


    )
}
export default Signup;

