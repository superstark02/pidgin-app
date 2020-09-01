import React, { Component } from 'react'
import '../../CSS/Components/Schools/Procedure.css'
import image1 from '../../Images/Schools/Procedure/select-schools.png'
import image2 from '../../Images/Schools/Procedure/fill-form.png'
import image3 from '../../Images/Schools/Procedure/send.png'

const data =  [
    {
        img: image1,
    },
    {
        img: image2,
    },
    {
        img: image3
    }
]

export class Procedure extends Component {
    render() {
        return (
            <div className="wrap" >
                <div className="school-procedure" >
                    {
                        data.map(item=>{
                            return(
                                <div>
                                    <img src={item.img} className="procedure-image" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Procedure
