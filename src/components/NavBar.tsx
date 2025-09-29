import React from "react";

import {
  Button,
  IconButton,
  Typography,
  Collapse,
  Navbar,
} from "@material-tailwind/react";
import {
  Menu,
  ProfileCircle,
  Xmark,
  Home,
  Wrench,
  Phone
} from "iconoir-react";

const LINKS = [
  {
    icon: Home,
    title: "Home",
    href: "#",
  },
  {
    icon: Wrench,
    title: "Services",
    href: "#services",
  },
  {
    icon: ProfileCircle,
    title: "Our Team",
    href: "#team",
  },
  {
    icon: Phone,
    title: "Contact",
    href: "#",
  },
];

function NavList() {
  return (
    <ul className="mt-4 flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
      {LINKS.map(({ icon: Icon, title, href }) => (
        <li key={title}>
          <Typography
            as="a"
            href={href}
            type="small"
            className="flex items-center gap-x-2 p-1 hover:text-primary"
          >
            <Icon className="h-4 w-4" />
            {title}
          </Typography>
        </li>
      ))}
    </ul>
  );
}

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
      <Navbar className="sticky top-0 mx-auto w-full z-50">
        <div className="flex items-center">
          <Typography
            as="a"
            href="#"
            type="small"
            className="ml-2 mr-2 block py-1 font-semibold"
          >
            React Bits
          </Typography>
          <hr className="ml-1 mr-1.5 hidden h-5 w-px border-l border-t-0 border-secondary-dark lg:block" />
          <div className="hidden lg:block">
            <NavList />
          </div>
          <Button size="sm" className="hidden lg:ml-auto lg:inline-block">
            Sign In
          </Button>
          <IconButton
            size="sm"
            variant="ghost"
            color="secondary"
            onClick={() => setOpenNav(!openNav)}
            className="ml-auto grid lg:hidden"
          >
            {openNav ? (
              <Xmark className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <Button isFullWidth size="sm" className="mt-4">
            Sign In
          </Button>
        </Collapse>
      </Navbar>
  );
}


