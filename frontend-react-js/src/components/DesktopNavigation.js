import './DesktopNavigation.css';
import {ReactComponent as Logo} from './svg/logo.svg';
import DesktopNavigationLink from '../components/DesktopNavigationLink';
import CrudButton from '../components/CrudButton';
import ProfileInfo from '../components/ProfileInfo';
import React from "react";



export default function DesktopNavigation(props) {
  const [handle, setHandle] = React.useState([]);
  let button;
  let profile;
  let notificationsLink;
  let messagesLink;
  let profileLink;

  const load = async () => {
    const user = await props.user;
    console.log("current user in DesktopNavigation.js:::", user)
    setHandle(user.handle)
    console.log("current handle in DesktopNavigation.js:::", handle)
  }
  load();
  console.log("Current USER (DesktopNaviagation Element)", props.user)
  // console.log("Current USER handle ", props.user[cognito_user_uuid])
  if (props.user) {
    button = <CrudButton setPopped={props.setPopped} />;
    profile = <ProfileInfo user={props.user} />;
    notificationsLink = <DesktopNavigationLink 
      url="/notifications" 
      name="Notifications" 
      handle="notifications" 
      active={props.active} />;
    messagesLink = <DesktopNavigationLink 
      url="/messages"
      name="Messages"
      handle="messages" 
      active={props.active} />
    profileLink = <DesktopNavigationLink 
      url={`/@${handle}`}
      name="Profile"
      handle="profile"
      active={props.active} />
  }

  return (
    <nav>
      <Logo className='logo' />
      <DesktopNavigationLink url="/" 
        name="Home"
        handle="home"
        active={props.active} />
      {notificationsLink}
      {messagesLink}
      {profileLink}
      <DesktopNavigationLink url="/#" 
        name="More" 
        handle="more"
        active={props.active} />
      {button}
      {profile}
    </nav>
  );
}