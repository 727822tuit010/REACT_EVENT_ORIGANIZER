
import React from 'react';
import './Navbar.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Navbar = () => {
   return (
    <div>
    <nav className="navbar">
      <div className="logo">
        <img src="https://t4.ftcdn.net/jpg/06/58/52/69/360_F_658526949_OPtABJyZyniWxJKa4TTpVX1SwdRunSEq.jpg" style={{height:100, width:200,borderRadius:500}}></img>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Weddings</a></li>
        <li><a href="/contact">Special Events</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    <img src="https://www.studiomemorylane.com/wp-content/uploads/2019/12/Indian-wedding-photographers-in-Nawanshahr.jpg" style={{height:700,width:1700}}></img>
       
    
     <div style={{borderWidth:1,height:500,width:1300,float:'right',margin:30}}>
      <br></br>
      <br></br>
     <h1>Popular Venue Searches</h1>
     <br></br>
      <img src="https://www.hilton.com/im/en/DELGUDI/16103082/facade-image.jpg?impolicy=crop&cw=5000&ch=2799&gravity=NorthWest&xposition=0&yposition=537&rw=768&rh=430" style={{height:350,width:600,float:'left',borderRadius:28}}></img>
       <div style={{textAlign:'center',fontSize:30,}}>
          <h1 style={{fontSize:40}}>4 Star & Above Hotels</h1>
          <br></br>
          <p style={{color:'crimson'}}>Gurgaon | central Delhi |</p>
          <p style={{color:'crimson'}}>East Delhi | All Localities</p>
        </div>
    </div>

     
    <div style={{borderWidth:1,height:500,width:1300,float:'right',margin:30}}>
      <br></br>
      <br></br>
     
     <br></br>
      <img src="https://skysuiteshotel.com/wp-content/uploads/2023/10/BG23.jpg" style={{height:350,width:600,float:'left',borderRadius:28}}></img>
       <div style={{textAlign:'center',fontSize:30,}}>
          <h1 style={{fontSize:40}}>Banquet Halls</h1>
          <br></br>
          <p style={{color:'crimson'}}>Gurgaon | central Delhi |</p>
          <p style={{color:'crimson'}}>East Delhi | All Localities</p>
        </div>
    </div>

    <div style={{borderWidth:1,height:500,width:1300,float:'right',margin:30}}>
      <br></br>
      
     
    
      <img src="https://www.bardenbp.com/hubfs/SWEET%20TEA%20MINI.jpg" style={{height:350,width:600,float:'left',borderRadius:28}}></img>
       <div style={{textAlign:'center',fontSize:30,}}>
          <h1 style={{fontSize:40}}>Lawns / Farmhouses</h1>
          <br></br>
          <p style={{color:'crimson'}}>Gurgaon | central Delhi |</p>
          <p style={{color:'crimson'}}>East Delhi | All Localities</p>
        </div>
    </div>

    <h1>Wedding Categories</h1>
       <div style={{backgroundColor:'#6F9CDE',height:400,width:1800}}>
        <div className='image'>
      <img src="https://onehorizonproductions.com/wp-content/uploads/2022/10/Whitepetals-3-849-jpg.webp" style={{float:'right',height:400,width:1000}}></img>
      </div>
       <h1 style={{padding:30,textAlign:'center',color:'white'}}>Venues</h1>
       <br></br>
       <p style={{padding:10,textAlign:'center',color:'white',fontSize:20}}>Banquet Halls, Lawns/Farmhoueses</p>
       <p style={{padding:10,textAlign:'center',color:'white',fontSize:20}}>Resorts Small Function/Party Halls</p>
      
       
       <p style={{padding:10,textAlign:'center',color:'white',fontSize:20}}>Destination Wedding , 4 start hotels</p>
       
       
       </div>

       <div style={{backgroundColor:'#D3B683',height:400,width:1800}}>
        <div className='image'>
      <img src="https://www.shutterstock.com/image-photo/image-young-asian-bride-groom-600nw-2145073147.jpg" style={{float:'right',height:400,width:1000}}></img>
      </div>
       <h1 style={{padding:30,textAlign:'center',color:'white'}}>Photographers</h1>
       <br></br>
       <p style={{padding:10,textAlign:'center',fontSize:20,color:'white'}}>Photographers</p>
       </div>

       <div style={{backgroundColor:'#A06C59',height:400,width:1800}}>
        <div className='image'>
      <img src="https://images.healthshots.com/healthshots/en/uploads/2022/12/30174040/eye-makeup-1.jpg" style={{float:'right',height:400,width:1000}}></img>
      </div>
       <h1 style={{padding:30,textAlign:'center',color:'white'}}>Makeup</h1>
       <br></br>
       <p style={{padding:10,textAlign:'center',fontSize:20,color:'white'}}>Bridal Makeup, Family Makeup</p>
       </div>


       <div style={{backgroundColor:'#6F9CDE',height:400,width:1800}}>
        <div className='image'>
      <img src="https://www.yabeshphotography.com/wp-content/uploads/2023/06/Pre-Wedding-Shoot-Ideas-to-Inspire-You-Unique-and-Creative-Concepts.jpg" style={{float:'right',height:400,width:1000}}></img>
      </div>
       <h1 style={{padding:30,textAlign:'center',color:'white'}}>Pre Wedding Shoot</h1>
       <br></br>
       <p style={{padding:10,textAlign:'center',fontSize:20,color:'white'}}>pre Wedding Shoot Locations</p>
       <p style={{padding:10,textAlign:'center',fontSize:20,color:'white'}}>pre Wedding Shoot Photographers</p>
       </div>
     

    <div style={{backgroundColor:'crimson',borderRadius:30,height:400,width:400,textAlign:'center',alignItems:'center',margin:150}}>
     <h2> Get in Touch</h2>
     <form>
        <div style={{color:'black',textAlign:'center'}}>
          
        <label>Enter Your Name: </label>
          <br></br>
          <br></br>
          <input type="text" placeholder="Name"></input>
          <br></br>
          <br></br>
          <label>Enter Your Email: </label>
          <br></br>
          <br></br>
          <input type="email"placeholder="Email"></input>
            <br></br>
            <br></br>
          
          <label>Desired Event Date: </label>
          <br></br>
          <br></br>
          <input type="date"placeholder="Enter Date"></input>
           <br></br>
           <br></br>
          <label>Type of Event</label>
          <br></br>
          <br></br>
          
          <input type="text" placeholder='email'></input>
        </div>
     </form>
     </div>
       

















    <p style={{textAlign:'center',fontSize:30,padding:30,}}> Home  Weddings  Special    Events    Contact</p>
       
    <p style={{textAlign:'center',fontSize:40,color:'crimson'}}>Wed me Good</p>   
       
</div>


     
    
    
    
    );
};
export default Navbar;
 







