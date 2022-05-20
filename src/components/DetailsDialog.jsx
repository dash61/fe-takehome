
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Typography } from '@mui/material';
import { format } from "date-fns";
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import { SettingsOutlined } from "@mui/icons-material";
import { convertStatus, bannerBkgnds } from "../utils";


function DetailsDialog(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    if (!open) {
      props.closed();
    }
    setIsOpen(open);
  };

  React.useEffect(() => {
    if (props.open && !isOpen) {
      toggleDrawer(true);
      setIsOpen(true);
    }
    else if (isOpen) {
      toggleDrawer(false);
      setIsOpen(false);
      props.closed();
    }
  }, [props.open]);

  const list = () => (
    <Box
      sx={{ width: 350, padding: 5 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <h3 style={{marginBottom: 5}}>
        {props.data.asset.alias}
        <SettingsOutlined style={{float: "right"}}/>
      </h3>
      <Typography sx={{color: "white", background: bannerBkgnds[props.data.status],
        height: 30, display: "inline-block", padding: "0 8px", fontWeight: 600, lineHeight: 1.9}}>
        {convertStatus(props.data.status)}
      </Typography>
      <Typography style={{marginTop: 10}}>
        ID: {props.data.asset.id}
      </Typography>
      <Typography sx={{marginBottom: 3}}>
        Created On: {format(props.data.timestamp, "MMM d, yyyy")} at {format(props.data.timestamp, "kk:mm")}
      </Typography>
      <Typography>
        Rotor Speed
      </Typography>
      <Typography sx={{fontSize: 30, marginBottom: 1}}>
        {props.data.operatingParams.rotorSpeed} m/s
      </Typography>
      <Typography>
        Slack
      </Typography>
      <Typography sx={{fontSize: 30, marginBottom: 1}}>
        {props.data.operatingParams.slack} m/s
      </Typography>
      <Typography>
        Threshold
      </Typography>
      <Typography sx={{fontSize: 30, marginBottom: 1}}>
        {props.data.operatingParams.rootThreshold} m/s
      </Typography>

      <Divider sx={{marginBottom: 2}} />
      <h3 style={{marginBottom: 10}}>
        Events
      </h3>
      <div className="grid-container">
        <span>Malfunction</span>
        <span>May 17, 2022</span>
        <span>12:05AM</span>
      </div>
      <div className="grid-container">
        <span>Stopped</span>
        <span>May 15, 2022</span>
        <span>8:05AM</span>
      </div>

      <Link href="#" className="link-style" sx={{textDecoration: "none"}} >Delete Device</Link>
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor={"right"}
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}


export default DetailsDialog;
