import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '../../Components/AppBar';
import StudentForm from '../../Components/Schools/Forms/StudentForm';
import ParentForm from '../../Components/Schools/Forms/ParentForm';

const AntTabs = withStyles({
    root: {
        borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
        backgroundColor: '#1890ff',
    },
})(Tabs);

const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '&$selected': {
            color: '#1890ff',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#40a9ff',
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div className="wrap" >
                    <div style={{width:"93%",padding:"10px 0px"}} >{children}</div>
                </div>
            )}
        </div>
    );
}

export class CommonFormPage extends Component {

    state = {
        value: 1
    }

    handleChange = (event, newValue) => {
        this.setState({ value: newValue })
    }

    render() {
        return (
            <div>
                <AppBar goBack={this.props.history.goBack} name="Common Form" />
                <div className="wrap" >
                    <AntTabs value={this.state.value} onChange={this.handleChange} aria-label="ant example">
                        <AntTab label="Student Details" />
                        <AntTab label="Parent Details" />
                        <AntTab label="Documents" />
                    </AntTabs>
                </div>

                <div>
                    <TabPanel value={this.state.value} index={0}>
                        <StudentForm/>
                    </TabPanel>
                    <TabPanel value={this.state.value} index={1}>
                        <ParentForm/>
                    </TabPanel>
                    <TabPanel value={this.state.value} index={2}>
                        Item Three
                    </TabPanel>
                </div>

            </div>
        )
    }
}

export default CommonFormPage
