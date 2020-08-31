import React, { Component } from 'react'
import MyAppBar from '../../Components/NavBar'
import common_form_img from '../../Images/Schools/commonForm.png'
import getCollection from '../../Database/getCollection'
import SchoolList from '../../Components/Schools/SchoolList'

export class School extends Component {

    render() {
        return (
            <div>
                <MyAppBar/>
                <div className="wrap" style={{position:"sticky",top:"0", zIndex:"10000",backgroundColor:"white"}} >
                    <div placeholder="Search schools.." className="home-search-box">Search schools..</div>
                </div>
                <div className="wrap" >
                    <img src={common_form_img} width="95%" />
                </div>
                <SchoolList/>
            </div>
        )
    }
}

export default School
