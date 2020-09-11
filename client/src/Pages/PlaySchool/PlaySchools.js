import React, { Component } from 'react'
import MyAppBar from '../../Components/NavBar'
import common_form_img from '../../Images/Schools/commonForm.png'
import PlaySchoolList from '../../Components/PlayShools/PlaySchoolList'
import { Link } from 'react-router-dom'
import Procedure from '../../Components/Schools/Procedure'
import Geocode from "react-geocode";

export class School extends Component {

    componentDidMount() {
        Geocode.setApiKey("AIzaSyCYoIBWm4Hw6kCP1P6jPWvqgJsXQdFmuPM");
        Geocode.setLanguage("en");
        Geocode.setRegion("es");
        

        Geocode.fromLatLng("48.8583701", "2.2922926").then(
            response => {
                const address = response.results[0].formatted_address;
                console.log(address);
                console.log("Done")
            },
            error => {
                console.error(error);
            }
        );
    }

    render() {
        return (
            <div>
                <MyAppBar />
                <div className="wrap" style={{ position: "sticky", top: "0", zIndex: "10000", backgroundColor: "white" }} >
                    <div placeholder="Search schools.." className="home-search-box">Search schools..</div>
                </div>
                <Procedure />
                <Link to="/common-forms" >
                    <div className="wrap" style={{ margin: "10px 0px" }} >
                        <img src={common_form_img} width="93%" />
                    </div>
                </Link>
                <PlaySchoolList />
            </div>
        )
    }
}

export default School
