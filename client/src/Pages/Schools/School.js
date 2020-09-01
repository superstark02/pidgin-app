import React, { Component } from 'react'
import MyAppBar from '../../Components/NavBar'
import common_form_img from '../../Images/Schools/commonForm.png'
import SchoolList from '../../Components/Schools/SchoolList'
import {Link} from 'react-router-dom'
import Procedure from '../../Components/Schools/Procedure'

export class School extends Component {

    render() {
        return (
            <div>
                <MyAppBar/>
                <div className="wrap" style={{position:"sticky",top:"0", zIndex:"10000",backgroundColor:"white"}} >
                    <div placeholder="Search schools.." className="home-search-box">Search schools..</div>
                </div>
                <Procedure/>
                <Link to="/common-forms" >
                    <div className="wrap" style={{margin:"10px 0px"}} >
                        <img src={common_form_img} width="93%" />
                    </div>
                </Link>
                <SchoolList/>
            </div>
        )
    }
}

export default School
