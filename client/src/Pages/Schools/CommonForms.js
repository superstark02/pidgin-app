import React, { Component } from 'react'
import AppBar from '../../Components/AppBar'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import '../../CSS/Pages/Schools/CommonForm.css'
import '../../CSS/Pages/Home.css'
import Advantages from '../../Components/Schools/Advantages';
import FormList from '../../Components/Schools/FormList';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { addSubDoc } from '../../Database/addDoc';
import { DialogContentText } from '@material-ui/core';
import {getSubCollection} from '../../Database/getCollection'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export class CommonForms extends Component {

    state = {
        open:false,
        name:null,
        form_list:null
    }

    handleClose = () => {
        this.setState({open:false})
    }

    handleClickOpen = () => {
        this.setState({open:true})
    }

    handleAddForm = () => {
        var temp = new Date();
        var date = temp.getDate()+"-"+temp.getMonth()+"-"+temp.getFullYear();

        var id = "YlTSGgoJG2R8Ii5qqnkXXd7gzSa2"
        id = window.Android.getUid()

        addSubDoc("Users",id,"Forms",this.state.name,{name:this.state.name,date_created:date})
        this.setState({open:false})
    }

    componentDidMount(){
        var id = 'YlTSGgoJG2R8Ii5qqnkXXd7gzSa2'
        id = window.Android.getUid()

        this.getData(id)
    }
    
    getData = (id) => {
        getSubCollection("Users",id,"Forms").then(snap=>{
            this.setState({form_list:snap})
        })
    }

    render() {
        return (
            <div>
                <AppBar name="Common Forms" goBack={this.props.history.goBack} />
                <Fab aria-label="add" onClick={this.handleClickOpen} style={{ position: "fixed", bottom: "0px", right: "0px", margin: "20px", backgroundColor: "#1fbecd", zIndex: "10000" }}>
                    <AddIcon style={{ color: "white" }} />
                </Fab>
                <div className="wrap" style={{ flexDirection: "column" }} >
                    <div className="common-form-message" >
                        The details you fill in forms are encrypted and are not shared to anyone.
                        No one not even Pidgin can see it.
                    </div>
                    <Advantages />

                    <div className="home-heading" style={{ width: "93%", marginTop: "20px" }} >
                        Your Forms
                    </div>
                    {
                        this.state.form_list === null || this.state.form_list === 0 ? (
                            <FormList list={null} />
                        ):(
                            <FormList list={this.state.form_list} />
                        )
                    }
                </div>

                <Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">Add a new form</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter a new name
                        </DialogContentText>
                        <TextField value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}} required id="standard-basic" label="Enter Student Name" />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleAddForm} color="primary">
                            ADD
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default CommonForms
