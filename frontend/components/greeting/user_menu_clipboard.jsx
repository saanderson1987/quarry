<div className="UserMenu">
  <ul className="UserMenuMain">
    <li>Profile</li>
    <li>Blogs</li>
    <li>Messages</li>
    <li>Your Content</li>
    <li>Stats</li>
    <li>Settings</li>
  </ul>
  <ul className="UserMenuSub">
    <li>Contact Us · Report a Bug</li>
    <li>About · Careers</li>
    <li>Privacy · Terms · Conduct</li>
    <li>Languages · <button className="header-button" onClick={this.props.logout}>
      Logout
    </button></li>
  </ul>
</div>
