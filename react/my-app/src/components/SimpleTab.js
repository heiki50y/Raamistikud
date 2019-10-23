import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={4}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 700,
    margin: "auto"
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <section className="section-examples">
        <div className={classes.root}>
          <div className="example-container">
          <AppBar className="tab" position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Näide 1" {...a11yProps(0)} />
              <Tab label="Näide 2" {...a11yProps(1)} />
              <Tab label="Näide 3" {...a11yProps(2)} />
              <Tab label="Näide 4" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <div>
                <h1>Hello world</h1>
                <h2><a href="https://reactjs.org/redirect-to-codepen/hello-world">Kuidas kirjutada hello world</a></h2>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <h1>To do-list</h1>
              <h2><a href="https://codesandbox.io/s/ppmy26opw7">Kuidas teha todo list</a></h2>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
            <h1>React Routes</h1>
              <h2><a href="https://codesandbox.io/s/yjzyzr29ov">Kuidas teha react route</a></h2>
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
            <h1>React Calendar</h1>
              <h2><a href="https://codesandbox.io/s/5ym1vlpmjl">Kuidas teha react kalendrit</a></h2>
            </TabPanel>
          </SwipeableViews>
          </div>
        </div>
    </section>
  );
}