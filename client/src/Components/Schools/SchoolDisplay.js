import React, { Component } from 'react'
import AppBar from '../../Components/AppBar'
import '../../CSS/Components/Class/ClassDisplay.css'
import '../../CSS/Pages/Schools/SchoolDisplay.css'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { getSubCollection } from '../../Database/getCollection';
import Carousel from 'nuka-carousel';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { Link } from 'react-router-dom'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FaStoreAlt, FaSwimmingPool, FaSnowflake, FaRobot, FaSkating } from 'react-icons/fa';

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
        school_images: null,
    }

    componentDidMount() {
        getSubCollection("Schools", this.props.location.state.data.id, "Images").then(items => {
            this.setState({ school_images: items })
        })

        getSubCollection("Schools", this.props.location.state.data.id, "Images").then(items => {
            this.setState({ school_images: items })
        })
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

                <div className="wrap" style={{ position: "sticky", top: "50px", backgroundColor: "white", zIndex: "10000" }} >
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
                        <Link href="#fee-structure" ><Tab label="Fees Structure" style={{ textTransform: "none" }} {...a11yProps(3)} /></Link>
                    </Tabs>
                </div>

                <div className="wrap" style={{ flexDirection: "column" }} >
                    <div style={{ width: "100%", minHeight: "40vh" }} >
                        {
                            this.state.school_images &&
                            this.state.school_images.map(item => {
                                return (
                                    <Carousel>
                                        {
                                            item.images.map(image => {
                                                return (
                                                    <img src={image} width="100%" />
                                                )
                                            })
                                        }
                                    </Carousel>
                                )
                            })
                        }
                    </div>

                    <div style={{ width: "93%", display: "flex", margin: "20px 0px", flexWrap: "wrap" }} >
                        <div className="features-item" >
                            <div>
                                CBSE
                            </div>
                            <div className="features-caption" >
                                Board
                            </div>
                        </div>
                        <div className="features-item" >
                            <div>
                                <FaSnowflake />
                            </div>
                            <div className="features-caption" >
                                AC
                            </div>
                        </div>
                        <div className="features-item" >
                            <div>
                                <FaStoreAlt />
                            </div>
                            <div className="features-caption">
                                Canteen
                            </div>
                        </div>
                        <div className="features-item" >
                            <div>
                                <FaSwimmingPool />
                            </div>
                            <div className="features-caption">
                                Pool
                            </div>
                        </div>
                        <div className="features-item" >
                            <div>
                                <FaRobot />
                            </div>
                            <div className="features-caption">
                                Robotics Lab
                            </div>
                        </div>
                        <div className="features-item" >
                            <div>
                                <FaSkating />
                            </div>
                            <div className="features-caption">
                                Skating Arena
                            </div>
                        </div>
                    </div>

                    <div style={{ width: "93%" }} >
                        <div>
                            <strong>Admissions</strong>
                        </div>
                        <div>
                            Amissions are open for:
                        </div>
                        <div>
                            <table style={{ tableLayout: "fixed", width: "100%" }} >
                                <tr>
                                    <td className="column-heading" >
                                        Nursey
                                    </td>
                                    <td className="column-data" >
                                        100 seats
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div style={{ width: "93%" }} >
                        <div>
                            <strong>Subjects</strong>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    Medical
                                </li>
                                <li>
                                    Non - Medical
                                </li>
                                <li>
                                    <div>
                                        Third Language :
                                    </div>
                                    <ul>
                                        <li>Sanskrit</li>
                                        <li>German</li>
                                        <li>Spanish</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ width: "93%" }} id="fee-structure" >
                        <div>
                            <strong>Fees Structure</strong>
                            <div>
                                <Accordion elevation={0} >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        Pre - Primary
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <table style={{ tableLayout: "fixed", width: "100%" }} >
                                            {
                                                this.props.location.state.data.fee_structure &&
                                                this.props.location.state.data.fee_structure.map(item => {
                                                    return (
                                                        <tr>
                                                            <td>
                                                                {item.name}
                                                            </td>
                                                            <td>
                                                                {item.fees}
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </table>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default SchoolDisplay
