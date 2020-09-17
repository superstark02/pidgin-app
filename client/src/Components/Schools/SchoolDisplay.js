import React, { Component } from 'react'
import AppBar from '../../Components/AppBar'
import '../../CSS/Components/Class/ClassDisplay.css'
import '../../CSS/Pages/Schools/SchoolDisplay.css'
import '../../CSS/Pages/PlaySchools/PlaySchoolDisplay.css'
import { getSubCollection } from '../../Database/getCollection';
import Carousel from 'nuka-carousel';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FaStoreAlt, FaSwimmingPool, FaSnowflake, FaRobot, FaSkating } from 'react-icons/fa';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import getDoc from '../../Database/getDoc'
import addToList from '../../Database/addDoc'

import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const StyledTableCell = withStyles((theme) => ({
    body: {
        fontSize: "inherit",
        color: "white",
        padding: "6px 10px",
        fontFamily: "inherit"
    },
}))(TableCell);

const StyledTableCellMoreInfo = withStyles((theme) => ({
    body: {
        fontSize: "inherit",
        padding: "6px 10px",
        fontFamily: "inherit"
    },
}))(TableCell);

const StyledTableRowMoreInfo = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

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
            backgroundColor: "#f2b705",
            borderRadius: "10px"
        },
        '&:nth-of-type(even)': {
            backgroundColor: "#f2b7057c",
        },
    },
}))(TableRow);


function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

export default class SchoolDisplay extends Component {

    state = {
        school_data: null,
        value: 0,
        school_images: null,
        school_admissions: null,
        school_fees: null,
        school_points: null,
        more_info: null,
        open_snackbar:false
    }

    handleAdd = () => {
        var id = window.Android.getUid()
        if (id) {
            addToList("Users", id, this.state.school_data).then(result => {
                this.setState({open_snackbar:true})
            })
        }
    }

    componentDidMount() {
        getSubCollection("Schools", this.props.match.params.id, "Images").then(items => {
            this.setState({ school_images: items })
        })

        getSubCollection("Schools", this.props.match.params.id, "Admissions").then(items => {
            this.setState({ school_admissions: items })
        })

        getSubCollection("Schools", this.props.match.params.id, "Fees").then(items => {
            this.setState({ school_fees: items })
        })

        getSubCollection("Schools", this.props.match.params.id, "Points").then(items => {
            this.setState({ school_points: items })
        })

        getSubCollection("Schools", this.props.match.params.id, "Other").then(items => {
            this.setState({ more_info: items })
        })

        getDoc("Schools", this.props.match.params.id).then(snap => {
            this.setState({ school_data: snap });
        })
    }

    handleChange = (event, newValue) => {
        this.setState({ value: newValue });
    };

    render() {
        return (
            <div>
                <AppBar name="" goBack={this.props.history.goBack} />
                {
                    this.state.school_data !== null ? (
                        <div>
                            <div className='wrap' style={{ flexDirection: "column" }} >
                                <div style={{ display: 'flex', width: "93%", margin: "20px 0px" }} >
                                    <img src={this.state.school_data.logo} height="100px" style={{ borderRadius: "5px", boxShadow: "0px 0px 10px rgba(0,0,0,0.2)", padding: "10px" }} />
                                    <div className="wrap" style={{ flexDirection: "column", marginLeft: "10px" }} >
                                        <div class='displayTitle' style={{ margin: "0px" }} >
                                            {this.state.school_data.name}
                                        </div>
                                        <div className="class-display-address" style={{ margin: "0px", width: "auto", padding: "0px" }} >
                                            {this.state.school_data.address}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="wrap" style={{ flexDirection: "column" }} id="details" >
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

                                <div style={{ width: "93%", boxShadow: "0px 0px 10px #617ea369", borderRadius: "5px", margin: "20px 0px" }} >
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

                                <div style={{ width: "93%", marginTop: "20px", marginBottom: "20px" }} >
                                    <div>
                                        <strong>Features</strong>
                                    </div>
                                </div>
                                <div style={{ width: "93%", display: "flex", flexWrap: "wrap", marginBottom: "10px", boxShadow: "0px 0px 10px #617ea369", borderRadius: "5px" }} >
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

                                <div className="wrap" style={{ margin: "20px 0px" }} >
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

                                <div style={{ width: "93%", margin: "30px 0px" }} id="admissions" >
                                    <div style={{ marginBottom: "10px" }} >
                                        <strong>Admissions</strong>
                                    </div>
                                    <div style={{ boxShadow: "0px 0px 10px #617ea369", borderRadius: "5px" }} >
                                        {
                                            this.state.school_admissions &&
                                            this.state.school_admissions.map(item => {
                                                return (
                                                    <div>
                                                        <Accordion elevation={0} >
                                                            <AccordionSummary
                                                                expandIcon={<ExpandMoreIcon />}
                                                                aria-controls="panel1a-content"
                                                                id="panel1a-header"
                                                            >
                                                                Seats
                                                        </AccordionSummary>
                                                            <AccordionDetails>
                                                                <Table aria-label="customized table">
                                                                    <TableBody>
                                                                        {
                                                                            item.seats.map(item => {
                                                                                return (
                                                                                    <StyledTableRow>
                                                                                        <StyledTableCell>
                                                                                            {item.name}
                                                                                        </StyledTableCell>
                                                                                        <StyledTableCell>
                                                                                            {item.number}
                                                                                        </StyledTableCell>
                                                                                    </StyledTableRow>
                                                                                )
                                                                            })
                                                                        }
                                                                    </TableBody>
                                                                </Table>
                                                            </AccordionDetails>
                                                        </Accordion>
                                                        <Accordion>
                                                            <AccordionSummary
                                                                expandIcon={<ExpandMoreIcon />}
                                                                aria-controls="panel1a-content"
                                                                id="panel1a-header"
                                                            >
                                                                Procedure
                                                        </AccordionSummary>
                                                            <AccordionDetails>
                                                                <Table aria-label="customized table">
                                                                    <TableBody>
                                                                        {
                                                                            item.procedure.map(item => {
                                                                                return (
                                                                                    <StyledTableRow>
                                                                                        <StyledTableCell>
                                                                                            {item}
                                                                                        </StyledTableCell>
                                                                                    </StyledTableRow>
                                                                                )
                                                                            })
                                                                        }
                                                                    </TableBody>
                                                                </Table>
                                                            </AccordionDetails>
                                                        </Accordion>
                                                        <Accordion>
                                                            <AccordionSummary
                                                                expandIcon={<ExpandMoreIcon />}
                                                                aria-controls="panel1a-content"
                                                                id="panel1a-header"
                                                            >
                                                                Dates
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                                                <Table aria-label="customized table">
                                                                    <TableBody>
                                                                        {
                                                                            item.dates.map(item => {
                                                                                return (
                                                                                    <StyledTableRow>
                                                                                        <StyledTableCell>
                                                                                            {item.name}
                                                                                        </StyledTableCell>
                                                                                        <StyledTableCell>
                                                                                            {item.date}
                                                                                        </StyledTableCell>
                                                                                    </StyledTableRow>
                                                                                )
                                                                            })
                                                                        }
                                                                    </TableBody>
                                                                </Table>
                                                            </AccordionDetails>
                                                        </Accordion>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                                <div style={{ width: "93%", margin: '30px 0px' }} id="points" >
                                    <div>
                                        <div style={{ margin: "10px 0px" }} >
                                            <strong>Points System</strong>
                                        </div>
                                        <div style={{ boxShadow: "0px 0px 10px #617ea369", borderRadius: "5px" }} >
                                            <Table aria-label="customized table">
                                                <TableBody>
                                                    {
                                                        this.state.school_points &&
                                                        this.state.school_points.map(item => {
                                                            return (
                                                                item.points.map(points => {
                                                                    return (
                                                                        <StyledTableRowPoints>
                                                                            <StyledTableCell>
                                                                                {points.name}
                                                                            </StyledTableCell>
                                                                            <StyledTableCell>
                                                                                {points.value}
                                                                            </StyledTableCell>
                                                                        </StyledTableRowPoints>
                                                                    )
                                                                })
                                                            )
                                                        })
                                                    }
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: "93%", margin: '30px 0px' }} id="fee-structure" >
                                    <div>
                                        <div style={{ margin: "10px 0px" }} >
                                            <strong>Fees Structure</strong>
                                        </div>
                                        <div style={{ boxShadow: "0px 0px 10px #617ea369", borderRadius: "5px" }} >
                                            {
                                                this.state.school_fees &&
                                                this.state.school_fees.map(f => {
                                                    return (
                                                        f.fees &&
                                                        f.fees.map(i => {
                                                            return (
                                                                <Accordion elevation={0} >
                                                                    <AccordionSummary
                                                                        expandIcon={<ExpandMoreIcon />}
                                                                        aria-controls="panel1a-content"
                                                                        id="panel1a-header"
                                                                    >
                                                                        {i.name}
                                                                    </AccordionSummary>
                                                                    <AccordionDetails>
                                                                        <Table aria-label="customized table">
                                                                            <TableBody>
                                                                                {
                                                                                    i.items.map(_i => {
                                                                                        return (
                                                                                            <StyledTableRowFees>
                                                                                                <StyledTableCell>
                                                                                                    {_i.name}
                                                                                                </StyledTableCell>
                                                                                                <StyledTableCell>
                                                                                                    {_i.value}
                                                                                                </StyledTableCell>
                                                                                            </StyledTableRowFees>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </TableBody>
                                                                        </Table>
                                                                    </AccordionDetails>
                                                                </Accordion>
                                                            )
                                                        })
                                                    )
                                                })
                                            }
                                            <Table aria-label="customized table">
                                                <TableBody>

                                                </TableBody>
                                            </Table>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: "93%", margin: '30px 0px' }} id="fee-structure" >
                                    <div>
                                        <div style={{ margin: "10px 0px" }} >
                                            <strong>Some More Information</strong>
                                        </div>
                                        {
                                            this.state.more_info &&
                                            this.state.more_info.map(i => {
                                                return (
                                                    <div style={{ boxShadow: "0px 0px 10px #617ea369", borderRadius: "5px" }} >
                                                        <div style={{ padding: "15px 10px", color: "white", backgroundColor: "#242429", borderRadius: "5px" }} >
                                                            {i.title}
                                                        </div>
                                                        <Table aria-label="customized table">
                                                            <TableBody>
                                                                {
                                                                    i.items.map(_i => {
                                                                        return (
                                                                            <StyledTableRowMoreInfo>
                                                                                <StyledTableCellMoreInfo>
                                                                                    {_i.name}
                                                                                </StyledTableCellMoreInfo>
                                                                                <StyledTableCellMoreInfo>
                                                                                    {_i.value}
                                                                                </StyledTableCellMoreInfo>
                                                                            </StyledTableRowMoreInfo>
                                                                        )
                                                                    })
                                                                }
                                                            </TableBody>
                                                        </Table>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                                <div className="school-footer" >
                                    Pidgin 2020 trusted by {this.state.school_data.name}.
                                </div>

                                <div style={{ height: "150px" }} ></div>

                                <div style={{ position: "fixed", bottom: "0", width: "100%", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", backgroundColor: "white" }} >
                                    <div className="school-display-button" >
                                        <div>
                                            <div>
                                                Form Fees
                                            </div>
                                            <div style={{ fontFamily: "Thin" }} >
                                                &#8377; 0
                                            </div>
                                        </div>
                                        <button className="standard-button" onClick={this.handleAdd} style={{ padding: "10px 10px", width: "50%", borderRadius: "5px" }} >
                                            ADD TO LIST
                                        </button>
                                    </div>
                                    <div style={{ fontSize: "10px", textAlign: "center", padding: "5px", paddingTop: "0px" }} >
                                        By proceeding, you agree to our Policies
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                            <div></div>
                        )
                }
                <Snackbar open={this.state.open_snackbar} autoHideDuration={3000} onClose={this.handleCloseSnackbar}>
                    <Alert onClose={this.handleCloseSnackbar} severity="success">
                        Added To Cart!
                        </Alert>
                </Snackbar>
            </div>
        )
    }
}

