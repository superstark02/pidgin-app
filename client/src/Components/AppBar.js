import React, { Component } from 'react'
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

export class AppBar extends Component {
    render() {
        return (
            <div style={{boxShadow:"2px 0px 5px rgba(0,0,0,0.2)",display:"flex",alignItems:"center",height:"50px",padding:"0px 20px",position:"sticky",top:'0'}} >
                <div onClick={this.props.goBack} >
                    <ArrowBackRoundedIcon style={{marginTop:"5px",marginRight:"20px"}} />
                </div>
                <div style={{fontSize:'17px'}} >
                    {this.props.name}
                </div>
            </div>
        )
    }
}

export default AppBar
