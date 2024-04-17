import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="mx-auto flex justify-center gap-10">
            <NavLink className="btn" to="/">Home</NavLink>
            <NavLink className="btn" to="/register">Register</NavLink>
            <NavLink className="btn" to="/login">Login</NavLink>
        </div>
    );
};

export default Navbar;