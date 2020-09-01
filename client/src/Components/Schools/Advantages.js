import React, { Component } from 'react'
import '../../CSS/Components/Schools/Procedure.css'
import image1 from '../../Images/Schools/Advantages/fill-one.png'
import image2 from '../../Images/Schools/Advantages/search.png'
import image3 from '../../Images/Schools/Advantages/time.png'

const data = [
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

export class Advantages extends Component {
    render() {
        return (
            <div className="wrap" >
                <div className="school-procedure" >
                    {
                        data.map(item => {
                            return (
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

export default Advantages
