import React, { Component } from 'react'

export default class Sign extends Component {
  render() {
    return (
        
       <div style={{backgroundImage:`url(https://www.mbatuts.com/wp-content/uploads/2019/11/Event-Planning-Business-in-plan.jpg)`, backgroundSize:'cover',height:1000}}>
         <br></br>
         <h1 style={{textAlign:'center', color:'navyblue'}}>SIGN UP</h1>
      <div style={{textAlign:'center', margin:100, padding:90,borderWidth:1,height:400,width:900,border:'2px solid grey',backgroundColor:'violet', alignItems:'center',color:'white'}}>
        <div style={{float:'left', height:200,width:350}}>
        <img src="https://res.cloudinary.com/dreamworth-in/image/upload/v1502875248/event-planning.jpg" alt="saliha"></img>
        </div>
        <div style={{float:'right'}}>
            <input type="text" value="First Name"></input>
            <br></br>
            <br></br>
           <input type="text" value="Last Name"></input>
           <br></br>
           <br></br>
           <input type="email" value="Email"></input>
           <br></br>
           <br></br>
           <input type="password"></input>
           <br></br>
           <br></br>
           <input type="text" value="Confirm passowrd"></input>
           <br></br>
           <br></br>
           
            <label>Gender</label>
            
            <input type="radio"></input>
            <label>Male</label>
            <input type="radio"></input>

            <label>Female</label>
           <br></br>
           <br></br>
           <label>Events Needed</label>
           <select>
            <option>Wedding</option>
            <option>Business Events</option>
            <option>Concerts</option>
            <option>Recreational Sporting Events</option>
            <option>Social Events</option>
            <option>All kind of parties</option>
           </select>
           <br></br>
           <br></br>
           <input type="checkbox"></input>
           
           <label>I accept the Terms of use & privacy policy</label>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
             

            <button style={{height:30, width:180,color:'blue',fontSize:25, backgroundColor:'pink',border:0,borderRadius:30}}>SIGN UP</button>
            <br></br>
            <h3>Already have an account?Login here</h3>

          </div>
      </div>
      </div>

    )
  }
}
