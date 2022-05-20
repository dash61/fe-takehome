import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { format } from "date-fns";
import DetailsDialog from "./DetailsDialog";
import { convertStatus, bannerBkgnds } from "../utils";


function TabPanel(props) {
  const [data, setData] = React.useState([]);
  const [showDialog, setShowDialog] = React.useState(false);
  const [currentPanel, setCurrentPanel] = React.useState(-1);
  const { children, value, index, ...other } = props;

  React.useEffect(() => {
    let temp;
    switch (props.value) {
      case 0: temp = props.data; break;
      case 1: temp = props.data.filter(item => item.status === "MALFUNCTIONING"); break;
      case 2: temp = props.data.filter(item => item.status === "STOPPED"); break;
      case 3: temp = props.data.filter(item => item.status === "RUNNING"); break;
      default: break;
    }
    setData(temp);

  }, [props.data, props.value]);

  const handleClick = (id) => {
    setShowDialog(true);
    console.log("tabpanel handleClick - id=", id);
    setCurrentPanel(id);
  }

  const handleClose = () => {
    setShowDialog(false);
    setCurrentPanel(-1);
  }

  const currentData = props.data.find(item => item.id === currentPanel);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0, mb: 3 }}>
          {children}
          <div className="datamap">
            { data?.length && data.map((item, index) =>
              <Card key={index} className="each-card-parent" sx={{marginBottom: 4,
                background: "#395453", boxShadow: "none", borderRadius: 0}}>
                <CardContent className="each-card" onClick={() => handleClick(item.id)}>
                  <Typography sx={{ fontSize: 20, fontWeight: 600 }} color="text.secondary" gutterBottom>
                    {item.asset.alias}
                  </Typography>
                  <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                    ID: {item.asset.id}
                  </Typography>
                  <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
                    Created On: {format(item.timestamp, "MMM d, yyyy")} at {format(item.timestamp, "kk:mm")}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 16, color: "white", background: bannerBkgnds[item.status] }}
                    className="status-banner"
                    color="text.secondary"
                    gutterBottom
                  >
                    {convertStatus(item.status)}
                  </Typography>
                </CardContent>
              </Card>
            )}
          </div>
        </Box>
      )}
      { showDialog &&
        <DetailsDialog
          open={showDialog}
          closed={handleClose}
          data={currentData}
          id={currentData.id}
        />
      }
    </div>
  );
}

export default TabPanel;
