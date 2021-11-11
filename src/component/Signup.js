import {Link} from 'react-router-dom';
import mainicon from'../image/iconsign.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import axios from 'axios'



function Signup() {

	let user ={
		username:'',
		email:'',
		password:'',
		cpassword:''
	}
	const [val,setVal]=useState(user);

	const hundleCh=(e)=>{
		e.preventDefault();
		const {name,value}=e.target;
		setVal({...val,[name]:value});

	}

	const hdlSub=(e)=>{
		e.preventDefault();
		axios.post("http://localhost:200/users",val).then(alert('succes'))

	}



    return (
      <div>
     <div class="container ">
     <div class="row">
     <div class="col">  
	<div class="row  mt-5">
		<form action="" onSubmit={hdlSub} >
            <h1 className="font-weight-bold">Sign up</h1>
			<div className="  justify-content-center">
			<div className="col form-group mt-3" >
				<input className="form-control " type="text" placeholder="Username" name="username" onChange={hundleCh} />
			</div>
			<div className="col form-group mt-3" >
				<input className="form-control " type="email" placeholder="Email" name="email"onChange={hundleCh} />
			</div>
			<div className="col form-group mt-3 "  >
				<input className="form-control" type="password" placeholder="Password" name="password" onChange={hundleCh}  />
            </div>
            <div className="col form-group mt-3 " >
				<input className="form-control" type="password" placeholder="Confirm Password" name="cpassword" onChange={hundleCh} />
			</div>
			<div className="col form-group mt-3 " >
				<button  className="btn btn-outline-block btn-primary mb-5" type='submit'  name="submit" >Register</button>
			</div>
			</div>
			<p >Have an account? <Link to ='/Login'> <a  className=" ">Login Here </a> </Link>.</p>
		</form>
	</div>
  </div>
  <div className="col  mt-5">
  
     
     <img className=" w-100  mt-5" src={mainicon}/>  
     
    
    
     </div>

	</div>
   

  
     </div>
    
     </div>
    );
  }
  
  export default Signup;