import React, { Component } from 'react'
import AppBar from '../../Components/AppBar'
import '../../CSS/Pages/Home.css'
import '../../CSS/Pages/About.css'
import map from '../../Images/About/map.jpg'
import classroom from '../../Images/About/classroom.jpg'

export class About extends Component {
    render() {
        return (
            <div>
                <div>
                    <AppBar name="About" goBack={this.props.history.goBack} />
                </div>
                <div>
                    <div className="about-wallpaper-overlay wrap" >
                        <div>
                            <div style={{ fontWeight: "100", letterSpacing: '2px' }} >
                                OUR MISSION
                            </div>
                            <div className="future-of-learning" >
                                Building The Future Of Learning
                            </div>
                        </div>
                    </div>
                    <div className="about-wallpaper" ></div>

                    <div className="wrap" style={{ margin: "40px 0px" }} >
                        <div className="home-width-container" >

                            <div className="about-content" >
                                <div className="about-content-display" >
                                    <div className="about-text" >
                                        <h1 style={{ fontSize: "40px" }} >
                                            Who Are We
                                        </h1>
                                        Pidgin is a company which provides all the tuitions, hobby classes, home tutors around you
                                        on a single app. We provide you all the information of a class and it's courses. <br />
                                    </div>
                                    <div>
                                        <img src={map} className="about-map" />
                                    </div>
                                </div>
                            </div>

                            <div className="about-content" >
                                <div className="about-text" >
                                    <h1 style={{ fontSize: "40px" }} >
                                        How we help teachers
                                        </h1>
                                    <div className="help-teachers" style={{ display: "flex", justifyContent: "space-evenly" }} >

                                        <div className="about-card" >
                                            <h4>Technology</h4>
                                            <div>
                                                We help them with organising online classes.<br />
                                                We set up their account, add their students to the teams and
                                                schedule the classes every week.
                                            </div>
                                        </div>

                                        <div className="about-card" >
                                            <h4>Marketing</h4>
                                            <div>
                                                Our team of experts in marketing make the institute grow.
                                                We find willing to learn students and arrange trial classes with the teachers.
                                            </div>
                                        </div>

                                        <div className="about-card" >
                                            <h4>Setting Up</h4>
                                            <div>
                                                For new tutors, it is hard to find students. We do it for them.
                                                We market their classes. Provide them their classrooms and good
                                                quality equipments.
                                            </div>
                                        </div>

                                        <div className="about-card" >
                                            <h4>Social Media</h4>
                                            <div>
                                                Social Media is great way of marketing. We prepare posts for the teachers
                                                to post on social media. So that they grow and keep on
                                                spreading the joy of education.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="about-content" >
                                <div className="about-content-display" >
                                    <div className="about-text" >
                                        <h1 style={{ fontSize: "40px" }} >
                                            Our goal is to make every existing course <br />available for you
                                        </h1>
                                        We work for providing you options for the ways of learning.
                                        We keep a check on the prices provided and ensure he quality of taching methods.<br />
                                        We ensure that you have every information of the teacher and institute which helps you to
                                        chose your teacher.
                                    </div>
                                    <div>
                                        <img src={classroom} className="about-map" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default About
