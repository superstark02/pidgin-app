import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import firebase, { rdb, db } from '../../../firebase'
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import '../../../CSS/Components/Class/chip.css';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Dialog from '@material-ui/core/Dialog';

class Courses extends React.Component {
    state = {
        courses: null,
        cart_dialog: null,
        cart_item:null,
        mode:null,
        type:null
    }

    componentDidMount() {
        this.setState({ courses: this.props.courses })
    }

    addToCart = (item) => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                rdb.ref("carts").child(firebase.auth().currentUser.uid).child(item.title).set({
                    title: item.title,
                    image: item.image,
                    price: parseInt(item.price, 10),
                    mode: this.state.mode,
                    type: this.state.type,
                })
                this.setState({ total_amount: this.state.total_amount + parseInt(item.price, 10) })
            }
            else {
                var provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(provider).then(function (result) {
                    // The signed-in user info.
                    //var user = result.user;firebase
                }).catch(function (error) {
                    // Handle Errors here.
                    var errorMessage = error.message;
                    // The email of the user's account used.
                    var email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    var credential = error.credential;

                    db.collection("LoginErrors").doc(email).set(
                        {
                            errorMessage: errorMessage,
                            email: email,
                            credential: credential
                        }
                    )
                });
            }
        })
        this.handleClose()
    }

    handleClose = () => {
        this.setState({ cart_dialog: false })
    }

    openCart = (item) => {
        this.setState({ cart_dialog: true })
        this.setState({ cart_item: item })
    }

    render() {
        return (
            <React.Fragment>
                <li>
                    <ul style={{ padding: '10px' }} >
                        <ListSubheader style={{ fontSize: '12px', backgroundColor: 'white' }} >{`Courses (` + this.props.courseLength + `)`}</ListSubheader>
                        {
                            this.state.courses &&
                            this.state.courses.map(course => {
                                return (
                                    <ListItem button style={{ padding: '0px 15px' }} >
                                        <div style={{ display: 'flex', margin: '10px 0px', width: '100%' }} >
                                            <Link style={{ display: 'flex' }} >
                                                <div>
                                                    <img src={course.image} width='70px' height='70px' style={{ borderRadius: '10px' }} />
                                                </div>
                                                <div style={{ marginLeft: '10px', width: '100%' }}>
                                                    <div style={{ fontSize: '13px', maxWidth: '90%' }} >{course.title}</div>
                                                    <div style={{ color: 'grey', fontSize: '11px' }}>&#8377; {course.price}</div>
                                                    <Divider />
                                                    <div style={{ fontSize: '8px' }} >
                                                        More Details <i class="fa fa-chevron-right" style={{ fontSize: '5px', marginTop: '10px' }}></i>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div style={{ alignContent: 'center', marginLeft: 'auto', paddingRight: '10px', right: '0', position: 'absolute' }} >
                                                <div className="chip" onClick={()=>{this.openCart(course)}} >
                                                    ADD
                                                </div>
                                            </div>
                                        </div>
                                    </ListItem>
                                )
                            })
                        }
                    </ul>
                    <Dialog open={this.state.cart_dialog} onClose={this.handleClose} >
                        <div className="cart-dialog" >
                            <div className="cart-title" >
                                {
                                    this.state.cart_item !== null ? (
                                        this.state.cart_item.title
                                    ) : (
                                            ""
                                        )
                                }
                            </div>
                            <div style={{ width: "100%", backgroundColor: "grey", height: "0.5px", margin: "10px 0px" }} ></div>

                            <div>
                                <FormControl component="fieldset">
                                    Mode
                                <div style={{ color: "grey" }} >
                                        You want classes online or offline ?
                                </div>
                                    <RadioGroup aria-label="gender" name="gender1" value={this.state.mode} onChange={(e) => { this.setState({ mode: e.target.value }) }} >
                                        <FormControlLabel value="Online" control={<Radio />} label={<div style={{ fontSize: "13px" }} >Online</div>} />
                                        <FormControlLabel value="Ofline" control={<Radio />} label={<div style={{ fontSize: "13px" }} >Ofline</div>} />
                                    </RadioGroup>
                                </FormControl>
                            </div>

                            <div>
                                <FormControl component="fieldset">
                                    Type
                                <div style={{ color: "grey" }} >
                                        You want to study alone or with group ?
                                </div>
                                    <RadioGroup aria-label="gender" name="gender1" value={this.state.type} onChange={(e) => { this.setState({ type: e.target.value }) }} >
                                        <FormControlLabel value="Individual" control={<Radio />} label={<div style={{ fontSize: "13px" }} >Individual</div>} />
                                        <FormControlLabel value="Group" control={<Radio />} label={<div style={{ fontSize: "13px" }} >Group</div>} />
                                    </RadioGroup>
                                </FormControl>
                            </div>

                            <div>
                                <FormControl component="fieldset">
                                    Timings
                                <div style={{ color: "grey" }} >
                                        What time are you comfortable with?
                                </div>
                                    <RadioGroup aria-label="gender" name="gender1">
                                        <FormControlLabel value="female" control={<Radio />} label={<div style={{ fontSize: "13px" }} >Online</div>} />
                                        <FormControlLabel value="male" control={<Radio />} label={<div style={{ fontSize: "13px" }} >Ofline</div>} />
                                    </RadioGroup>
                                </FormControl>
                            </div>

                            <div className="cart-button" onClick={() => this.addToCart(this.state.cart_item)}>
                                ADD TO CART
                        </div>
                        </div>
                    </Dialog>
                </li>
            </React.Fragment>
        )
    }
}

export default Courses;