import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import School from '../Pages/Schools/School';
import CommonForms from '../Pages/Schools/CommonForms';
import Account from '../Pages/Account/Account';
import BillView from '../Pages/Schools/BillView'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
      style={{ position: "fixed", top: "0", width: "100%", zIndex: "-10000", overflowY: "scroll", height: "100vh" }}
    >
      {value === index && (
        <div>
          <Typography>{children}</Typography>
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const AntTabs = withStyles({
  root: {
    flexGrow: 1,
    width: '100%',
    position: "fixed",
    bottom: "0",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.3)",
    zIndex: "1000000",
    backgroundColor:"white",
    height:"65px"
  },
  indicator: {
    backgroundColor: '#00b6c7',
    position: "absolute",
    top:0,
    '& > span': {
      maxWidth: 0,
      width: '100%',
      backgroundColor: '#00b6c7',
    },
  },
})(Tabs);

const AntTab = withStyles({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontFamily: "inherit",
    fontSize: "10px",
    padding: "0px",
    zIndex: "10000"
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 0,
      width: '100%',
      backgroundColor: 'white',
    },
  },
  selected: {},
})((props) => <Tab {...props} TabIndicatorProps={{ children: <span /> }} />);


function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: "fixed",
    bottom: "0",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.3)",
    zIndex: "1000000"
  },
  icon: {
    margin: '0px',
  }
}));

export default function SimpleBottomNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div  style={{ zIndex: "100000" }} >
      <AntTabs value={value} variant="fullWidth" onChange={handleChange} aria-label="ant example">
        <AntTab icon={<img src="https://img.icons8.com/pastel-glyph/64/000000/school-1-1.png" width="20px" />} className={classes.icon} label="Schools" />
        <AntTab icon={<img src="https://img.icons8.com/wired/64/000000/google-forms.png" width="20px" />} label="Common Form" className={classes.icon} />
        <AntTab icon={<img src="https://img.icons8.com/ios/50/000000/add-list.png" width="20px" />} label="Your List" className={classes.icon} />
        <AntTab icon={<AccountCircleOutlinedIcon />} label="Account" className={classes.icon} />
      </AntTabs>
      <TabPanel value={value} index={0}>
        <School />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CommonForms/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <BillView/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Account/>
      </TabPanel>
    </div>
  );
}
