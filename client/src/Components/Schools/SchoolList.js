import React, { Component } from 'react'
import getCollection from '../../Database/getCollection'
import { Link } from 'react-router-dom'
import { FaMap } from 'react-icons/fa'
import ButtonBase from '@material-ui/core/ButtonBase/ButtonBase';
import Box from '@material-ui/core/Box';
import '../../CSS/Components/Home/ClassList.css'
import '../../CSS/Components/Schools/Schools.css'

export class SchoolList extends Component {

    state = {
        schools: null
    }

    componentDidMount() {
        getCollection("Schools").then(items => {
            this.setState({ schools: items })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.schools &&
                    this.state.schools.map(item => {
                        return (
                            <div >
                                <ButtonBase className="wrap" style={{ flexDirection: "column" }} >
                                    <div class='item'>
                                        <Box boxShadow={3} style={{ paddingBottom: '10px', borderRadius: '5px' }} >
                                            <Link to={{
                                                pathname: "/school-display/" + item.id,
                                                state: {
                                                    data: item
                                                }
                                            }} >
                                                <div class='school-logo wrap'>
                                                    <img height="90%" src={item.logo} />
                                                </div>
                                            </Link>
                                            <div class='container'>

                                                <Link to={{
                                                    pathname: "/school-display/" + item.id,
                                                    state: {
                                                        data: item
                                                    }
                                                }} >
                                                    <div class='name'>{item.name}</div>
                                                </Link>

                                                <div class='map'>
                                                    <div>
                                                        <a href={item.location}><FaMap size='15' color='#1389fd' />
                                                            <div></div>
                                                            <div>Map</div>
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>

                                            <Link to={{
                                                pathname: "/school-display/" + item.id,
                                                state: {
                                                    data: item
                                                }
                                            }} >

                                                <div class='type' style={{ fontFamily: "Thin", textAlign: "left" }} >
                                                    {item.address}
                                                </div>

                                                <div style={{ padding: "10px", justifyContent: "space-evenly",display:"flex"}} >
                                                    <div style={{width:"50%", borderRight:"1px solid grey", padding:"10px 0px" }} className="wrap"  >
                                                        {
                                                            item.admission ? (
                                                                <div className="admission-open" >
                                                                    ADMISSIONS OPEN
                                                                </div>
                                                            ) : (
                                                                    <div className="admission-closed" >
                                                                        ADMISSIONS CLOSED
                                                                    </div>
                                                                )
                                                        }
                                                    </div>
                                                    <div style={{width:"50%", borderLeft:"1px solid grey", padding:"10px 0px" }} className="wrap" >
                                                        Registeration: &#8377;{item.fees}
                                                    </div>
                                                </div>

                                            </Link>
                                        </Box>
                                    </div>
                                </ButtonBase>
                            </div>
                        )
                    })
                }
                <div style={{ height: "70px" }} />
            </div>
        )
    }
}

export default SchoolList
