import React from 'react';
import Homepicture from '../../images/home-main.541f8179.svg'
import Typical from 'react-typical'
import Mypicture from '../../images/profile-pic.png'


const Home = () => {

    return (
        <div className="container">
            <div className="homediv">
                <img className="homepic" src={Homepicture} alt="homepicture" />
                <div className="homediv2">
                    <h1> Hello! My name is  Kastus Vienhura</h1>
                    <Typical
                        steps={['I am', 1000, 'Front-End Developer', 5000]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </div>
            </div>
            <h1 className="introdescr">Let me introduce myself</h1>
            <div className="homediv3">
                <img className="homepic" src={Mypicture} alt="mypicture" />
                <div className="homecontainer">
                    <p>I am alumni from Wild Code Scholl</p>
                    <p>I studied foregn languages at MSLU</p>
                    <p>I like to travel and learn new things!</p>
                </div>
            </div>
        </div>
    )
}

export default Home;