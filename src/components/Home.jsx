import React from 'react';
import '../home.css';
import bg from '../images/bg.svg';
import hero from '../images/man.svg';
import Button from '@mui/material/Button';

function Home(){
    return (
        
        <div className="container">
            <div className="left-side">
                <h2 className='title-1'>Introducing the new</h2>
                <h1 className='title-2'>Life Saver App!</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span> <br />
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              
               <div className='btn-cont'>
               <Button variant="contained" className="btn-1">
                    Sign Up
                </Button>

                <Button variant="contained" className="btn-2">
                    Sign In
                </Button>
               </div>
            </div>

            <div className="right-side">
                <img src={bg} alt="" className="background" />
                <img src={hero} alt="" className="hero" />
            </div>
        </div>
        
    );
}

export default Home;