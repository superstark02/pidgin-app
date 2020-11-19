import React, { Component } from 'react'
import getUser from '../../../Database/getUer';

export class Documents extends Component {

    state = {
        uid: "",
    }

    constructor(){
        super();
        getUser().then(data => {
            if (data === -1) {
                
            }
            else if (data) {
                this.setState({uid: data.uid})
            }
        })
    }
    render() {
        return (
            <div>
                <form method="POST" action="http://localhost:5000/send" >
                    <input type="hidden" name="uid" value={this.state.uid} defaultValue="uid" />
                    <div>
                        <div className="doc-div" >
                            <div>
                                <label>Passport-Size Photo</label>
                            </div>
                            <input type="file" name="photo" />
                        </div>
                        <div className="doc-div">
                            <div>
                                <label>Birth Certificate</label>
                            </div>
                            <input type="file" name="birthCertificate" />
                        </div>
                        <div className="doc-div">
                            <div>
                                <label>Adress Proof (Any one of the following)
                                    <ul>
                                        <li>Ration Card</li>
                                        <li>Domicile certificate of child or of his/her parents</li>
                                        <li>Voter I-card (EPIC) of any of the parents</li>
                                        <li>Electricity bill/MTNL bill/Water Bill/Passport in name of any of the parents or child</li>
                                        <li>Aadhaar card/UID card issued in the name of any of the parents</li>
                                    </ul>
                                </label>
                            </div>
                            <input type="file" />
                        </div>

                        <div className="doc-div">
                            <div>
                                <label>Medical Health Certificate</label>
                            </div>
                            <input type="file" />
                        </div>

                        <div className="doc-div">
                            <div>
                                <label>Proof Of Sibling Present In Selected Schools, if applicable</label>
                            </div>
                            <input type="file" />
                        </div>

                        <div className="doc-div">
                            <div>
                                <label>Proof Of Parent Alumnus, if applicable</label>
                            </div>
                            <input type="file" />
                        </div>

                        <div className="doc-div">
                            <div>
                                <label>Category Certificate, if applicable</label>
                            </div>
                            <input type="file" />
                        </div>
                    </div>

                    
                    <div>
                        <input type="submit" value="SUBMIT" className="standard-button" style={{ backgroundColor: "#2196f3" }} ></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default Documents
