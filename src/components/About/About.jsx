import React from 'react'
import { Component } from 'react';
import Homepicture from '../../images/home-main.541f8179.svg'
import Reactpicture from '../../images/react.png'
import JSpicture from '../../images/js.png'
import HTMLpicture from '../../images/html.png'
import CSSpicture from '../../images/css.png'
import Reduxpicture from '../../images/redux.png'
import Sasspicture from '../../images/sass.png'
import Btcpicture from '../../images/bitcoin.png'
import Langpicture from '../../images/lang.jfif'
import Fightpicture from '../../images/martial.png'
import Travelpicture from '../../images/travel.png'
import Aboutpicture from '../../images/developer.png'





export default class About extends Component {

    render() {
        return (
            <div className="container">
                <div className="aboutdiv">
                    <img className="aboutpic" src={Aboutpicture} alt="aboutpicture" />
                    <div className="aboutdiv2">
                        <h1> Know who I am</h1>
                        <p>Hi all!</p>
                        <p>My name is Kanstancin</p>
                        <p>I would live to start my career as a Web Developer and work on an intersting project</p>
                    </div>
                </div>
                <h1 className="skills">My Skillset</h1>
                <div className="mytools">
                    {/* <img className="homepic" src={Mypicture} alt="mypicture" /> */}
                    <div className="aboutcontainer2">
                        <div className="about1">
                            <div><img className="aboutpic" src={Reactpicture} alt="aboutpicture" /></div>
                            <div><img className="aboutpic" src={JSpicture} alt="aboutpicture" /></div>
                            <div><img className="aboutpic" src={HTMLpicture} alt="aboutpicture" /></div>
                        </div>
                        <div className="about2">
                            <div><img className="aboutpic" src={CSSpicture} alt="aboutpicture" /></div>
                            <div><img className="aboutpic" src={Reduxpicture} alt="aboutpicture" /></div>
                            <div><img className="aboutpic" src={Sasspicture} alt="aboutpicture" /></div>
                        </div>
                    </div>
                </div>
                <h1 className="interestes-title">My Interests</h1>
                <div className="interests-container">
                    {/* <img className="homepic" src={Mypicture} alt="mypicture" /> */}
                    <div className="interests">

                        <div><img className="interestpic" src={Btcpicture} alt="interestpicture" /></div>
                        <div><img className="interestpic" src={Langpicture} alt="interestpicture" /></div>
                        <div><img className="interestpic" src={Fightpicture} alt="interestpicture" /></div>
                        <div><img className="interestpic" src={Travelpicture} alt="interestpicture" /></div>

                    </div>
                </div>
            </div>

        )
    }
}
