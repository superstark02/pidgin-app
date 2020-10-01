import React, { Component } from 'react'
import MyAppBar from '../../Components/NavBar'
import common_form_img from '../../Images/Schools/form.png'
import list from '../../Images/Schools/school-list.png'
import SchoolList from '../../Components/Schools/SchoolList'
import { Link } from 'react-router-dom'
import Procedure from '../../Components/Schools/Procedure'
import Geocode from "react-geocode";
import axios from 'axios'
import GotToCart from '../../Components/Schools/GotToCart'
import { ButtonBase } from '@material-ui/core'

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

    send = () => {
        axios.post('https://us-central1-pidgin-ds.cloudfunctions.net/', { hello: "hello" }).then(response => {
            console.log(response.data)
            console.log("Done")
        }).catch(err => {
            console.log(err)
            console.log("Done-1")
        })
    }

    render() {
        return (
            <div>
                <MyAppBar />
                <div className="wrap" style={{ position: "sticky", top: "0", zIndex: "10000", backgroundColor: "white" }} >
                    <div placeholder="Search schools.." className="home-search-box">Search schools..</div>
                </div>

                <div className="wrap" style={{ margin: "10px 0px" }} >
                    <div style={{ width: "93%", display: "flex", justifyContent: "space-between" }} >
                        <Link to="/your-common-form" >
                            <div className="wrap">
                                <ButtonBase>
                                    <img src={common_form_img} width="90%" style={{ borderRadius: "10px" }} />
                                </ButtonBase>
                            </div>
                        </Link>
                        <Link to="/bill" >
                            <div className="wrap">
                                <ButtonBase>
                                    <img src={list} width="90%" style={{ borderRadius: "10px" }} />
                                </ButtonBase>
                            </div>
                        </Link>
                    </div>
                </div>

                <div style={{ padding: "0px 3.5%", marginTop: "15px" }} >
                    Procedure
                    <div style={{ fontFamily: "Thin", fontSize: "12px" }} >
                        How to use the app
                    </div>
                </div>
                <Procedure />

                <div style={{ padding: "0px 3.5%", marginTop: "15px" }} >
                    Select Schools
                    <div style={{ fontFamily: "Thin", fontSize: "12px" }} >
                        From schools around you
                    </div>
                </div>
                <SchoolList />
            </div>
        )
    }
}

export default School
