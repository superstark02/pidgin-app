import React, { Component } from 'react'
import '../../CSS/Pages/Account.css'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import firebase from '../../firebase'
import { Link } from 'react-router-dom'
import SimpleBottomNavigation from '../../Components/BottomNavBar';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const general = [
    {
        name: "Your Classes",
        icon: <SchoolOutlinedIcon />,
        link: "/your-classes"
    },
    {
        name: "Your Payments",
        icon: <PaymentOutlinedIcon />,
        link: "/your-payments"
    },
    {
        name: "List Your Classes",
        icon: <ListAltOutlinedIcon />,
        link: "/list-your-classes"
    },
    {
        name: "Your Cart",
        icon: <ShoppingCartOutlinedIcon />,
        link: "/cart"
    }
]

const help = [
    {
        name: "Help",
        icon: <HelpOutlineOutlinedIcon />,
        link: "/help"
    },
    {
        name: "About",
        icon: <InfoOutlinedIcon />,
        link: "/about"
    }
]

export class Account extends Component {

    state = {
        user_name: -1,
        user_email:null,
        user_image:null
    }

    componentDidMount() {
        /*this.setState({user_name:window.Android.getName()})
        this.setState({user_email:window.Android.getEmail()})
        this.setState({user_image:window.Android.getPhoto()})*/
    }

    handleLogout = () => {
        firebase.auth().signOut().then(function () {
            console.log("Logged Out")
        }).catch(function (error) {
            console.log(error)
        });
    }

    handleLogin = () => {
        window.Android.signIn();
    }

    render() {
        return (
            <div>
                <div style={{ padding: "10px" }} >
                    {
                        this.state.user_name === -1 ? (
                            <div className="acc-header" style={{ fontSize: "15px" }} >
                                <p style={{ fontSize: "20px", marginBottom: "5px" }} >
                                    <b>Your Profile</b>
                                </p>
                                Log in or sign up to view your complete profile
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    onClick={this.handleLogin}
                                    style={{ marginBottom: "30px", marginTop: "10px", width: "100%", textTransform: "none" }}
                                >
                                    Sign In
                            </Button>
                                <div style={{ backgroundColor: "rgba(0,0,0,0.2)", height: '0.5px' }} ></div>
                            </div>
                        ) : this.state.name !== null ? (
                            <div className="acc-header" style={{ fontSize: "15px", display: "flex", justifyContent: "space-between" }} >
                                <div>
                                    <p style={{ fontSize: "20px", marginBottom: "5px" }} >
                                        <b>{this.state.user_name}</b>
                                    </p>
                                    {this.state.user_email}
                                    <div style={{ backgroundColor: "rgba(0,0,0,0.2)", height: '0.5px' }} ></div>
                                </div>
                                <div className="wrap" style={{ width: "auto" }} >
                                    <img src={this.state.user_image} width="70px" height="70px" style={{ borderRadius: "50%" }} />
                                </div>
                            </div>
                        ) : (
                                    <div></div>
                                )
                    }

                    <div>
                        <div style={{ color: "rgba(0,0,0,0.4)", fontSize: '12px', textTransform: "uppercase", fontWeight: "700",marginTop:"20px" }} >
                            General
                    </div>

                        <List component="nav" aria-label="main mailbox folders">
                            {
                                general.map(item => {
                                    return (
                                        <Link to={item.link} >
                                            <ListItem button>
                                                <ListItemIcon>
                                                    {item.icon}
                                                </ListItemIcon>
                                                <ListItemText primary={<div>{item.name}</div>} />
                                            </ListItem>
                                        </Link>
                                    )
                                })
                            }
                        </List>
                    </div>

                    <div>
                        <div style={{ color: "rgba(0,0,0,0.4)", fontSize: '12px', textTransform: "uppercase", fontWeight: "700" }} >
                            Help
                    </div>

                        <List component="nav" aria-label="main mailbox folders">
                            {
                                help.map(item => {
                                    return (
                                        <Link to={item.link} >
                                            <ListItem button>
                                                <ListItemIcon>
                                                    {item.icon}
                                                </ListItemIcon>
                                                <ListItemText primary={<div>{item.name}</div>} />
                                            </ListItem>
                                        </Link>
                                    )
                                })
                            }
                        </List>

                    </div>
                    <strong>
                        <div className="account-options" onClick={this.handleLogout} >
                            Logout
                    </div>
                        <div className="account-options" >
                            Rate us on PlayStore
                    </div>
                        <div className="account-options" >
                            <Link to='/pidgin/feedback' >
                                Feedback
                            </Link>
                        </div>
                    </strong>
                    <div style={{ height: "100px" }} ></div>
                </div>
            </div>
        )
    }
}

export default Account
