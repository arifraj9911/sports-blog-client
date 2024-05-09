import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const menuItem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add-blog">Add Blog</NavLink>
      </li>
      <li>
        <NavLink to="/all-blog">All Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/featured-blog">Featured Blog</NavLink>
      </li>
      <li>
        <NavLink to="/wishlist">Wishlist</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold">SportsEYE</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItem}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  className="object-cover w-12 h-12 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 absolute right-1 ring-1 ring-white bottom-0"></span>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  logOut();
                  navigate("/login");
                }}
              >
                SignOut
              </button>
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link className="btn btn-success" to="/login">
              Login
            </Link>
            <Link className="btn btn-warning" to="/register">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
