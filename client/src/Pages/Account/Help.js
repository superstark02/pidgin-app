import React, { Component } from 'react'
import AppBar from '../../Components/AppBar'
import emailjs from 'emailjs-com';
import '../../CSS/Pages/Home.css'
import '../../CSS/Pages/Help.css'

export class Help extends Component {

    sendMail = (e) => {
        e.preventDefault();
        console.log(e.target)
        emailjs.sendForm('gmail', 'template_h67d3rY4_clone', e.target, 'user_rdnQ08wROAm4vj2HIcVdc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    render() {
        return (
            <div>
                <AppBar name="Help" goBack={this.props.history.goBack} />
                <div>
                    <div className="contact-wallpaper-overlay wrap" >
                        <div>
                            <div className="future-of-learning" >
                                We Would Love To Here From You
                            </div>
                        </div>
                    </div>
                    <div className="contact-wallpaper" ></div>

                    <div className="wrap" style={{ margin: "40px 0px" }} >
                        <div className="home-width-container" >

                            <div className="about-content" >
                                <div className="about-content-display" >
                                    <div className="about-text" >
                                        <h1 style={{ fontSize: "40px", marginBottom: "40px" }} >
                                            We are available 24/7
                                        </h1>
                                        <form onSubmit={this.sendMail} style={{ display: "flex", flexDirection: "column" }} >
                                            <input className="standard-input" name="name" placeholder="Name" required />
                                            <input className="standard-input" name="email" placeholder="Email" />
                                            <input className="standard-input" name="phone" placeholder="Phone" />
                                            <textarea style={{ minHeight: "100px" }} type="multiline" className="standard-input" name="message" placeholder="Message" required />
                                            <input className="standard-button" type="submit" value="SUBMIT" />
                                        </form>
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

export default Help
