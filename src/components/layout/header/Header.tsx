import Search from "./Search";
import SideMenu from "./SideMenu";

const Header = () => {
  return (
    <header id="header-container">
      <h1>
        Note<span>App</span>
      </h1>
      <div id="header-group">
        <Search />
        <SideMenu />
      </div>
    </header>
  );
};

export default Header;
