import Logo from "./Logo";
import NavItems from "./NavItems";
import { useState } from "react";

const Header = () => {
  const [darkmodefeature, setDarkModeFeature] = useState(true);

  const handletoggle = () => {
    setDarkModeFeature(darkmodefeature === true ? false : true);
  };

  return (
    <div
      className={
        darkmodefeature ? "header_wrapper dark" : "header_wrapper light"
      }
    >
      <Logo />
      <NavItems />
      <button onClick={handletoggle}>
        {darkmodefeature ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default Header;
