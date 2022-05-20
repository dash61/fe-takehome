import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Sorter from "./Sorter";
import PageStatus from "./PageStatus";
import { getDeviceData } from "../external/api";
import TabPanel from "./TabPanel";


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabControls(props) {
  const [value, setValue] = React.useState(0);
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [numThisPage, setNumThisPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [sortValue, setSortValue] = React.useState("none");
  const refData = React.useRef(0);

  const fetchData = async () => {
    const devicedata = await getDeviceData(props.page);
    if (devicedata) {
      if (refData.current === 0) {
        refData.current = devicedata.data; // save original data
      }
      setPage(devicedata.page);
      setTotalPages(devicedata.total_pages);

      const temp = sortByStatus(devicedata.data, sortValue);
      setData(temp);

      setData(devicedata.data);
      return;
    }
    throw new Error("API data not found");
  }

  React.useEffect(() => {
    fetchData();
  }, [props.value, props.page]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const StyledTabs = styled((props) => (
    <Tabs
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
    ))({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: 80,
      width: '100%',
      backgroundColor: '#33a08e',
    },
  });

  const tabStyles = {
    textTransform: "none",
    color: "white",
  }

  const sortByStatus = (data, sortType, getOld=false) => {
    if (sortType === "Status") {
      return data.sort((a, b) => {
        if (a.status > b.status) {
          return 1;
        } else if (a.status < b.status) {
          return -1;
        }
        return 0;
      });
    } else if (getOld) {
      return refData.current;
    } else {
      return data;
    }
  }

  const handleSort = (value) => {
    setSortValue(value);
    setData(sortByStatus(data, value, true));
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs"
          textColor="secondary"
          sx={{mb: 2}}
        >
          <Tab label="All" {...a11yProps(0)} sx={tabStyles}/>
          <Tab label="Malfunction" {...a11yProps(1)} sx={tabStyles}/>
          <Tab label="Stopped" {...a11yProps(2)} sx={tabStyles}/>
          <Tab label="Running" {...a11yProps(3)} sx={tabStyles}/>
        </StyledTabs>
      </Box>
      <TabPanel data={data} value={value} index={0} sx={{width: 400}}>
        <div className="sorter-page">
          <p>Sort by: </p>
          <Sorter changeSort={handleSort} />
          <PageStatus page={page} numThisPage={numThisPage} totalPages={totalPages} className="pagestatus"/>
        </div>
      </TabPanel>
      <TabPanel data={data} value={value} index={1}>
        <div className="sorter-page">
          <Sorter changeSort={handleSort} />
          <PageStatus page={page} numThisPage={numThisPage} totalPages={totalPages} className="pagestatus"/>
        </div>
      </TabPanel>
      <TabPanel data={data} value={value} index={2}>
        <div className="sorter-page">
          <Sorter changeSort={handleSort} />
          <PageStatus page={page} numThisPage={numThisPage} totalPages={totalPages} className="pagestatus"/>
        </div>
      </TabPanel>
      <TabPanel data={data} value={value} index={3}>
        <div className="sorter-page">
          <Sorter changeSort={handleSort} />
          <PageStatus page={page} numThisPage={numThisPage} totalPages={totalPages} className="pagestatus"/>
        </div>
      </TabPanel>
    </Box>
  );
}

export default TabControls;
