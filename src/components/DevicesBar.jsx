import { SearchOutlined } from "@mui/icons-material";

function DevicesBar() {
  return (
    <div style={{position: "relative"}}>
      <h1 className="device-header">Devices</h1>
      <SearchOutlined className="icons-color" style={{position: "absolute",
        right: 150, top: 58}}/>
      <input type="text" className="search-box" placeholder="Search all devices"/>
    </div>
  )
}

export default DevicesBar;
