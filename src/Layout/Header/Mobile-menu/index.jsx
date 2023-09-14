import { slide as Menu } from "react-burger-menu";
import "./index.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const MobileMenu = ({ menu }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <header>
      <Menu
        disableAutoFocus
        isOpen={menuOpen}
        onOpen={handleStateChange}
        onClose={handleStateChange}
      >
        {menu.map((item) => {
          return (
            <Link
              key={item.slug}
              onClick={() => closeMenu()}
              className="menu-item"
              to={item.slug}
            >
              {item.title}
            </Link>
          );
        })}
      </Menu>
    </header>
  );
};

export default MobileMenu;
