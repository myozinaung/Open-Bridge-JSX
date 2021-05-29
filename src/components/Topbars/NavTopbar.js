import { ReactComponent as NavMenuIcon } from "../../assets/icons/topbar-icons/nav-menu.svg";
import { ReactComponent as AlartIcon } from "../../assets/icons/topbar-icons/alert.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/topbar-icons/user.svg";
import { ReactComponent as DimmingIcon } from "../../assets/icons/topbar-icons/dimming.svg";
import { ReactComponent as AppsIcon } from "../../assets/icons/topbar-icons/apps.svg";

import React from "react";

function NavTopbar() {
  return (
    <div className="ob-nav-top-bar">
      <a href="#Menu">
        <NavMenuIcon />
      </a>
      <a className="ob-button ob-button--raised" href="#Alert">
        <AlartIcon />
      </a>
      <a className="ob-button ob-button--normal" href="#User">
        <UserIcon />
      </a>
      <a className="ob-app-btn ob-btn-icon" href="#Dimming">
        <DimmingIcon />
      </a>
      <a className="ob-button-group" href="#Apps">
        <AppsIcon />
      </a>
    </div>
  );
}

export default NavTopbar;
