import {Link} from 'react-router-dom';
import secondicon from'../image/secondicon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { useState } from 'react';


function Login() {

  let user ={
		email:'',
		password:'',
	}
	const [val,setVal]=useState(user);

	const hundleCh=(e)=>{
		e.preventDefault();
		const {name,value}=e.target;
		setVal({...val,[name]:value});

	}

  let subm = (e) => {
    e.preventDefault()
    let v=false;
    axios.get("http://localhost:200/users").then(
      user=>{
        for(let i=0 ;i<user.data.length ;i++){
          if(user.data[i].email==val.email&&user.data[i].password==val.password)
            {
              alert("equal")
            }
        }
      }

    )

  }






    return (
      <div class="container mt-5">
    <div class="row">
    <div className="col  mt-5">
		<form onSubmit={subm}  class="login-email">
			<h1  >Login</h1>
			<div class="col form-group mt-3" >
				<input class="form-control" type="email" placeholder="Email" name="email" onChange={hundleCh} />
			</div>
			<div class="col form-group mt-3" >
				<input class="form-control" type="password" placeholder="Password" name="password" onChange={hundleCh} />
			</div>
			<div class="col form-group mt-3" >
      <button  className="btn btn-outline-block btn-primary mb-5" type='submit'  name="submit" >login</button>
			</div>
			<p >Don't have an account? <Link to ='/'> <a >Register Here</a></Link>.</p>
      
		</form>
    </div>



    <div className="col  mt-5">
  
     
  <img src={secondicon} className=" w-100  mt-2" />  
  
 
 
  </div>


  </div>
	</div>

    );
  }
  
  export default Login;