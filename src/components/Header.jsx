import "../UI/Theme/main.css";
import Avatar from "./Avatar";
import {
  SearchOutlined,
  SettingsOutlined,
  NotificationsNoneOutlined,
} from "@mui/icons-material";

const Header = ()=> {
  return (
    <header className='header'>
      <div className="fan-icon"></div>
      <h2 style={{paddingLeft: 45}}>FanAware</h2>
      <div className="icons-right icons-color icons-holder">
        <SearchOutlined />
        <SettingsOutlined />
        <NotificationsNoneOutlined />
      </div>
      <div>
        <Avatar />
      </div>
    </header>
);
}

export default Header;
