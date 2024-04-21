import Link from "next/link";
import NavbarButton from "./navbar-button";

const Navbar = (): React.ReactElement => {
  return (
    <div className="navbar bg-base-100">
      <div className="container flex mx-auto justify-between px-4 ">
        <Link className="btn btn-ghost text-xl font-bold" href="/">OpenDiary</Link>
        <NavbarButton/>
      </div>
    </div>
  );
};

export default Navbar;
