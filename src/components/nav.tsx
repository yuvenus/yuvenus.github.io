import { useState } from "react";
import { NavLink } from "react-router-dom";
import { headerIconStyle } from "../ui/icons";
import { Button } from "../ui/shadcn/button";
import { Menu, X } from "lucide-react";

export const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-end @container">
        <div className="hidden items-center gap-4 @sm:flex">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/crafts">Crafts</NavLink>
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

      {mobileOpen && <div>hello</div>}
    </>
  );
};
