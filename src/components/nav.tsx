import { NavLink } from "react-router-dom";

export const Nav = () => {
    return (
        <nav className="flex justify-end gap-4">
            <NavLink to="/about">About</NavLink>
        </nav>
    );
}