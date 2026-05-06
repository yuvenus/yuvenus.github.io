import { useState } from "react";
import { NavLink } from "react-router-dom";
import { headerIconStyle } from "../ui/icons";
import { Button } from "../ui/shadcn/button";
import { Menu, X } from "lucide-react";

const navLinks = <>
  <NavLink to="/about">About</NavLink>
  <NavLink to="/skills">Skills</NavLink>
  <NavLink to="/crafts">Crafts</NavLink>
</>;

export const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <nav className="flex justify-end @container">
        <div className="hidden items-center gap-4 @sm:flex">
          {navLinks}
        </div>

        <Button
          className="@sm:hidden cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X size={headerIconStyle} />
          ) : (
            <Menu size={headerIconStyle} />
          )}
        </Button>
      </nav>

      {mobileOpen && <div className="flex flex-col gap-2">{navLinks}</div>}
    </div>
  );
};
