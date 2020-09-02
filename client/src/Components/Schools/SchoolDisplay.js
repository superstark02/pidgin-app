import React, { Component } from 'react'
import AppBar from '../../Components/AppBar'
import '../../CSS/Components/Class/ClassDisplay.css'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

export class SchoolDisplay extends Component {

    state = {
        school_data: null,
        value: 0,
    }

    componentDidMount() {
        this.setState({ school_data: this.props.location.state.data })
    }

    handleChange = (event, newValue) => {
        this.setState({ value: newValue });
    };

    render() {
        return (
            <div>
                <AppBar name="" goBack={this.props.history.goBack} />
                <div className='wrap' style={{ flexDirection: "column" }} >
                    <div style={{ display: 'flex', width: "93%", margin: "20px 0px" }} >
                        <img src={this.props.location.state.data.logo} height="100px" style={{ borderRadius: "5px", boxShadow: "0px 0px 10px rgba(0,0,0,0.2)", padding: "10px" }} />
                        <div className="wrap" style={{ flexDirection: "column", marginLeft: "10px" }} >
                            <div class='displayTitle' style={{ margin: "0px" }} >
                                {this.props.location.state.data.name}
                            </div>
                            <div className="class-display-address" style={{ margin: "0px", width: "auto", padding: "0px" }} >
                                {this.props.location.state.data.address}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrap" style={{ position: "sticky", top: "50px" }} >
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab label="Details" style={{ textTransform: "none" }} {...a11yProps(0)} />
                        <Tab label="Admission" style={{ textTransform: "none" }} {...a11yProps(1)} />
                        <Tab label="Points" style={{ textTransform: "none" }} {...a11yProps(2)} />
                        <Tab label="Fees Structure" style={{ textTransform: "none" }} {...a11yProps(3)} />
                    </Tabs>
                </div>
                <div style={{ height: "300vh" }} >

                </div>
            </div>
        )
    }
}

export default SchoolDisplay
