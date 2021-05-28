import React from 'react'
import { Component } from 'react';
import Homepicture from '../../images/home-main.541f8179.svg'





export default class About extends Component {

    render() {
        return (
            <div className="container">
                <div className="aboutdiv">
                    <img className="aboutpic" src={Homepicture} alt="aboutpicture" />
                    <div className="aboutdiv2">
                        <h1> Know who I am</h1>
                        <p>Hi all!</p>
                        <p>My name is Kanstancin</p>
                        <p>I want to work at IT and recieve 2k USD per month</p>
                        <p>And also i would like to have 10 btc at my wallet</p>
                        <p>So please giv me a job</p>
                    </div>
                </div>
                <h1 className="skills">My Skillset</h1>
                <div className="mytools">
                    {/* <img className="homepic" src={Mypicture} alt="mypicture" /> */}
                    <div className="aboutcontainer2">
                        <div className="about1">
                            <div><img className="aboutpic" src={Homepicture} alt="aboutpicture" /></div>
                            <div><img className="aboutpic" src={Homepicture} alt="aboutpicture" /></div>
                            <div><img className="aboutpic" src={Homepicture} alt="aboutpicture" /></div>
                        </div>
                        <div className="about2">
                            <div><img className="aboutpic" src={Homepicture} alt="aboutpicture" /></div>
                            <div><img className="aboutpic" src={Homepicture} alt="aboutpicture" /></div>
                            <div><img className="aboutpic" src={Homepicture} alt="aboutpicture" /></div>
                        </div>
                    </div>
                </div>
                <h1 className="interestes-title">My Interests</h1>
                <div className="interests-container">
                    {/* <img className="homepic" src={Mypicture} alt="mypicture" /> */}
                    <div className="interests">

                        <div><img className="interestpic" src={Homepicture} alt="interestpicture" /></div>
                        <div><img className="interestpic" src={Homepicture} alt="interestpicture" /></div>
                        <div><img className="interestpic" src={Homepicture} alt="interestpicture" /></div>
                        <div><img className="interestpic" src={Homepicture} alt="interestpicture" /></div>

                    </div>
                </div>
            </div>

        )
    }
}
