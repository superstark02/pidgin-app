import React, { Component } from 'react'
import AppBar from '../../Components/AppBar'
import '../../CSS/Components/Class/ClassDisplay.css'
import '../../CSS/Pages/Schools/SchoolDisplay.css'
import '../../CSS/Pages/PlaySchools/PlaySchoolDisplay.css'
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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';


const StyledTableCell = withStyles((theme) => ({
    body: {
        fontSize: "inherit",
        color: "white",
        padding: "6px 10px",
        fontFamily: "inherit"
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: "#0abf8c80",
        },
        '&:nth-of-type(even)': {
            backgroundColor: "#0ABF8C",
        },
    },
}))(TableRow);

const StyledTableRowPoints = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: "#85dbdb",
        },
        '&:nth-of-type(even)': {
            backgroundColor: "#04BFBF",
        },
    },
}))(TableRow);

const StyledTableRowFees = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: "#f2b7057c",
        },
        '&:nth-of-type(even)': {
            backgroundColor: "#f2b705",
        },
    },
}))(TableRow);


function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

export class PlaySchoolDisplay extends Component {

    state = {
        school_data: null,
        value: 0,
        school_images: null,
        school_admissions: null,
    }

    componentDidMount() {
        getSubCollection("Schools", this.props.location.state.data.id, "Images").then(items => {
            this.setState({ school_images: items })
        })

        getSubCollection("Schools", this.props.location.state.data.id, "Admissions").then(items => {
            this.setState({ school_admissions: items })
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

                    <div className="show-all-photos" >
                        <div>
                            Show all photos
                        </div>
                        <div>
                            <div>
                                <LocationOnOutlinedIcon />
                            </div>
                            <div style={{ fontSize: "8px", textAlign: "center", marginTop: "-5px" }} >
                                Map
                            </div>
                        </div>
                    </div>

                    <div style={{ width: "93%", boxShadow:"0px 0px 10px rgba(0,0,0,0.2)", borderRadius:"5px" }} >
                        <Accordion elevation={0} >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <strong>Vision</strong>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div style={{ fontFamily: "Thin" }} >
                                    To strive for better and better, not resting on one’s laurels; seek solutions
                                    not excuses, deliver results and serve the community by providing quality
                                    education.
                                 </div>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion elevation={0} >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <strong>Mission</strong>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div style={{ fontFamily: "Thin" }} >
                                    *To develop scholastic personalities and impart knowledge to maximise
                                    skills and competencies.
                                    *To impart wisdom that transforms mere knowledge into meaningful
                                    initiative and enterprise for a harmonious and prosperous society.
                                    *To provide holistic education to society as a whole without prejudice or
                                    discrimination.
                                    *To Equip the child to meet all challenges –social, moral and intellectual
                                    and comprehend human values.
                                    *To make students responsible, law abiding and enlightened citizens of
                                    global society.
                                    *To Instil traits of team work, empathy, patience, perseverance and
                                    respect of elders and mentors.
                                    *To ensure sensitivity and commitment to environment and all beings to
                                    save the planet for future generation
                                 </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>

                    <div style={{ width: "93%", margin: '30px 0px' }} >
                        <div style={{ marginBottom: "10px" }} >
                            <strong>Features</strong>
                        </div>
                    </div>
                    <div style={{ width: "93%", display: "flex", flexWrap: "wrap", marginBottom: "10px", boxShadow:"0px 0px 10px rgba(0,0,0,0.2)", borderRadius:"5px" }} >
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

                    <div className="wrap" >
                        <div className="timings" >
                            <div className="wrap" style={{ width: "auto", fontSize: "40px" }} >
                                <EventNoteOutlinedIcon style={{ fontSize: "30px", marginRight: "10px" }} />
                            </div>
                            <div>
                                <div>
                                    Working Days
                                </div>
                                <div style={{ fontFamily: "Thin" }} >
                                    Monday - Saturday
                                </div>
                            </div>
                            <div className="vertical" ></div>
                            <div>
                                <div>
                                    Timings
                                </div>
                                <div style={{ fontFamily: "Thin" }}>
                                    8:00 pm - 12:00 pm
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ width: "93%", margin: "30px 0px" }} >
                        <div style={{ marginBottom: "10px" }} >
                            <strong>Admissions</strong>
                        </div>
                        <div>

                        </div>
                    </div>

                    <div style={{ width: "93%", margin: '30px 0px' }} id="fee-structure" >
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
                                        <Table aria-label="customized table">
                                            <TableBody>
                                                {
                                                    this.props.location.state.data.fee_structure &&
                                                    this.props.location.state.data.fee_structure.map(item => {
                                                        return (
                                                            <StyledTableRowFees>
                                                                <StyledTableCell>
                                                                    {item.name}
                                                                </StyledTableCell>
                                                                <StyledTableCell>
                                                                    {item.fees}
                                                                </StyledTableCell>
                                                            </StyledTableRowFees>
                                                        )
                                                    })
                                                }
                                            </TableBody>
                                        </Table>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    </div>

                    <div className="school-footer" >
                        Pidgin 2020 trusted by {this.props.location.state.data.name}.
                    </div>

                    <div style={{position:"fixed",bottom:"0",width:"100%",boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.2)",backgroundColor:"white"}} >
                        <div className="school-display-button" >
                            <div>
                                <div>
                                    Form Fees
                            </div>
                                <div style={{ fontFamily: "Thin" }} >
                                    &#8377; 0
                            </div>
                            </div>
                            <button className="standard-button" style={{ fontFamily: "Thin", padding: "20px 10px", width: "50%", borderRadius: "5px" }} >
                                ADD TO LIST
                        </button>
                        </div>
                        <div style={{fontSize:"10px",textAlign:"center",padding:"10px"}} >
                            By proceeding, you agree to our Policies
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

