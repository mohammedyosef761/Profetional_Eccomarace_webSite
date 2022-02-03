import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";



function SignIn(){

  const[email,setEmail] =useState('');
  const[password,setPassWord]=useState('');
  const [checked,setChecked] = useState(false);

  const check=()=>{
      let addEmail= JSON.parse(localStorage.getItem('email'));
      let addPassword= JSON.parse(localStorage.getItem('password'));

      if(email===addEmail && addPassword===password){
        console.log("yes");
        localStorage.setItem("loginEmail" , JSON.stringify(email));
        localStorage.setItem("loginPassword" , JSON.stringify(password));
        setChecked(true);
      }

      setEmail('');
      setPassWord('');



  }
    return (
        <div>
        <Header />
        <div className="col-md-4 text-center m-auto my-5">
        {/* <label for="validationServerUsername" className="form-label text-info">Username</label>
        <div className="input-group has-validation">
          <span className="input-group-text" id="inputGroupPrepend3">@</span>
          <input type="text" className="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
          <div id="validationServerUsernameFeedback" className="invalid-feedback">
            Please choose a username.
          </div>
        </div> */}

        <div className="col-md-12">
    <label for="validationServer03" className="form-label text-info" >Email</label>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
    <div id="validationServer03Feedback" className="invalid-feedback">
      Please provide a valid email.
    </div>
  </div>

  <div className="col-md-12">
    <label for="validationServer03" className="form-label text-info">Passwrod</label>
    <input type="password" value={password} onChange={(e)=>setPassWord(e.target.value)} className="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
    <div id="validationServer03Feedback" className="invalid-feedback">
      Please provide a valid passWord.
    </div>
  </div>
  <button className="btn btn-danger w-25 my-5 " onClick={check}>   
  LogIn
  </button>

 
  {
    checked && <Link to="/" className="btn btn-success">
    the LogIn is success click here
    </Link>
  }
       </div>


       <Footer />
</div>


    )
}

export default SignIn;
 