import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';

function Logout(){
    const out=()=>{
    localStorage.removeItem("loginEmail")
    localStorage.removeItem("loginPassword");

    }
    return (
        <div>
        <h1 className="text-center text-info m-5">are you sure you want to logout</h1>
        <div className="text-center">
        <Link to="/" className="btn btn-success  w-25" onClick={out}>yes</Link>
        <Link to="/" className="btn btn-danger w-25">No</Link>
        </div>
        </div>
    )
}

export default Logout;