import React, { Component } from 'react'
import getCollection from '../../Database/getCollection'
import { Link } from 'react-router-dom'
import { FaMap } from 'react-icons/fa'
import ButtonBase from '@material-ui/core/ButtonBase/ButtonBase';
import Box from '@material-ui/core/Box';
import SimpleBottomNavigation from '../BottomNavBar';
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
                <SimpleBottomNavigation value="Schools" />
                {
                    this.state.schools &&
                    this.state.schools.map(item => {
                        return (
                            <div >
                                <ButtonBase className="wrap" style={{ flexDirection: "column" }} >
                                    <div class='item'>
                                        <Box boxShadow={3} style={{ paddingBottom: '10px', borderRadius: '5px' }} >
                                            <Link to = {{
                                                pathname:"/school-display/" + item.id,
                                                state:{
                                                    data:item
                                                }
                                            }} >
                                                <div class='school-logo wrap'>
                                                    <img height="90%" src={item.logo} />
                                                </div>
                                            </Link>
                                            <div class='container'>

                                                <Link to={"/school-display/" + item.id}>
                                                    <div class='name'>{item.name}</div>
                                                </Link>

                                                <div class='map'>
                                                    <div>
                                                        <div><a href={item.location}><FaMap size='15' color='#1389fd' /></a></div>
                                                        <div>Map</div>
                                                    </div>
                                                </div>

                                            </div>

                                            <Link to={"/school-display/" + this.state.id}>
                                                <div class='type' style={{ fontFamily: "Thin",textAlign:"left" }} >
                                                    {item.address}
                                                </div>
                                            </Link>
                                        </Box>
                                    </div>
                                </ButtonBase>
                            </div>
                        )
                    })
                }
                <div style={{height:"70px"}} />
            </div>
        )
    }
}

export default SchoolList
