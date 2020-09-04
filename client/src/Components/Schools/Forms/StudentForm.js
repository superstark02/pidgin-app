import React, { Component } from 'react'

export class StudentForm extends Component {
    render() {
        return (
            <div>
                <form style={{display:"flex", flexWrap:"wrap"}} >
                    <label>Particulars of Child</label>
                    <input className="standard-input" name="student-name" style={{width:"100%"}} placeholder="Name Of the Student" ></input>
                    
                    <input className="standard-input" style={{width:"30%"}} placeholder="Class" ></input>
                    <input className="standard-input" style={{width:"30%"}} placeholder="Gender" ></input>
                    <input className="standard-input" style={{width:"30%"}} placeholder="DOB" ></input>

                    <input className="standard-input" style={{width:"30%"}} placeholder="Age" ></input>
                    <input className="standard-input" style={{width:"30%"}} placeholder="Nationality" ></input>
                    <input className="standard-input" style={{width:"30%"}} placeholder="Religion" ></input>

                    <label>Particulars of Residence</label>
                    <input className="standard-input" name="student-name" style={{width:"100%"}} placeholder="Residential Address" ></input>
                    <input className="standard-input" name="student-name" style={{width:"100%"}} placeholder="Phone Number" ></input>
                    <input className="standard-input" name="student-name" style={{width:"100%"}} placeholder="Email" ></input>

                    <label style={{width:"100%"}} >Sibling Details</label>
                    <input className="standard-input" style={{width:"100%"}} placeholder="Sibling Name" ></input>
                    <input className="standard-input" style={{width:"47%"}} placeholder="Admission No." ></input>
                    <input className="standard-input" style={{width:"47%"}} placeholder="Class n Section" ></input>

                    <input type="submit" value="NEXT" className="standard-button" style={{backgroundColor:"#2196f3"}} ></input>
                </form>
            </div>
        )
    }
}

export default StudentForm;
