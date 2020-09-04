import React, { Component } from 'react'

export class ParentForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <label style={{width:"100vw"}} >Particulars of Parents</label>

                    <div>Name</div>
                    <input className="standard-input" name="student-name" style={{width:"100%"}} placeholder="Father" ></input>
                    <input className="standard-input" name="student-name" style={{width:"100%"}} placeholder="Mother" ></input>

                    <div>Aadhaar Number</div>
                    <input className="standard-input" name="student-name" style={{width:"100%"}} placeholder="Father" ></input>
                    <input className="standard-input" name="student-name" style={{width:"100%"}} placeholder="Mother" ></input>

                    <div>Qualification</div>
                    <input className="standard-input" name="student-name" style={{width:"100%"}} placeholder="Father" ></input>
                    <input className="standard-input" name="student-name" style={{width:"100%"}} placeholder="Mother" ></input>

                    <div>Occupation</div>
                    <input className="standard-input" name="student-name" style={{width:"100%"}} placeholder="Father" ></input>
                    <input className="standard-input" name="student-name" style={{width:"100%"}} placeholder="Mother" ></input>

                    <div>Mobile Number</div>
                    <input className="standard-input" name="student-name" style={{width:"100%"}} placeholder="Father" ></input>
                    <input className="standard-input" name="student-name" style={{width:"100%"}} placeholder="Mother" ></input>

                    <input type="submit" value="NEXT" className="standard-button" style={{backgroundColor:"#2196f3"}} ></input>
                </form>
            </div>
        )
    }
}

export default ParentForm
