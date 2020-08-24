import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SearchIcon from '@material-ui/icons/Search';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const AntTabs = withStyles({
  root: {
    height:'65px'
  },
  indicator: {
    backgroundColor: '#000000',
  },
})(Tabs);

const AntTab = withStyles({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontFamily: "inherit",
    '&:hover': {
      color: '#000000',
      opacity: 0.4,
    },
    '&$selected': {
      color: '#000000',
    },
    '&:focus': {
      color: '#000000',
    },
    '&:focus': {
      opacity: 1,
    },
    fontSize:"10px",
    padding:"0px"
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: 'red',
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
    boxShadow:"0px 0px 5px rgba(0,0,0,0.3)",
    zIndex:"100"
  },
  icon:{
    margin: '0px'
  }
}));

export default function SimpleBottomNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("Home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.changePage(newValue)
  };

  return (
    <div className={classes.root}>
      <AntTabs value={value} variant="fullWidth" onChange={handleChange} aria-label="ant example">
        <AntTab icon={<HomeOutlinedIcon className={classes.icon} />} label="Home" value="Home" />
        <AntTab icon={<SearchIcon/>} label="Search" className={classes.icon} value="Search" />
        <AntTab icon={<ShoppingCartOutlinedIcon/>} label="Cart" className={classes.icon} value="Cart" />
        <AntTab icon={<AccountCircleOutlinedIcon/>} label="Account" className={classes.icon} value="Account" />
      </AntTabs>
    </div>
  );
}
