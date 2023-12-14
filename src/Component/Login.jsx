import { Link } from "react-router-dom";
import './Styles.css';
function Login()
{
    return(
        <center>
        <form>
            <div style={{backgroundImage:`url(https://www.visionvivaah.com/blog/wp-content/uploads/2019/11/Top-10-Event-Management-Companies-In-India.jpg)`,backgroundRepeat:"no-repeat",backgroundSize:"cover",height:1000}}>
       <div>
              <br></br>
              <br></br>
              <br></br>
            
        
           <h1 style={{textAlign:'center',color:'blue',backgroundImage:"bg2.jpg"}}>LOGIN  INTO  OUR  WEBSITE</h1>

           <div style={{textAlign:'center', margin:50, padding:90,borderWidth:1,height:350,width:400,border:'2px solid grey',alignItems:'center',backgroundColor:'violet',borderRadius:30}}>
        
        
           <h2 style={{color:"Blue", fontStyle:'italic',borderRadius:30}}>Username</h2>
            <input type="text"></input>
            <h2 style={{color:"Blue", fontStyle:'italic',borderRadius:30}}>Password</h2>
            <input type="passsword"></input>
            <br></br>
            <br></br>
            <input type="checkbox"></input>
            <label>Remember me</label>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <button style={{backgroundColor:'white',height:45,width:150,color:'red' ,fontSize:20,border:0,borderRadius:30}}><Link to="Sign">Sign up</Link></button>
        </div>
        </div>
    </div>
        </form>
    </center>
    

    )
}
export default Login;