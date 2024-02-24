import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Logo from "../assets/NazLogo.jpg";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { LuLogOut } from "react-icons/lu";
import { useAuth0 } from "@auth0/auth0-react";
import { userContext } from "../userContext/ContextApi";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user, loginWithPopup, logout}=useAuth0();
  const {setLoggedUser, loggedUser}= useContext(userContext)
  // setLoggedUser(user);

  const menuItems = [
    {
      id: crypto.randomUUID(),
      name: "Home",
      url: "/home",
    },
    {
      id: crypto.randomUUID(),
      name: "About",
      url: "/about",
    },
    {
      id: crypto.randomUUID(),
      name: "Projects",
      url: "/projects",
    },
    {
      id: crypto.randomUUID(),
      name: "News",
      url: "/news",
    },
  ];
  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <img src={Logo} className="h-9 w-16" alt="" />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={index}>
              <NavLink
                to={item.url}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 font-semibold transition-all duration-500 px-3 py-3"
                    : ""
                }
                color="foreground"
                href=""
              >
                {item.name}
              </NavLink>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          {
            user? <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Avatar
                  isBordered
                  color="success"
                  src={user.picture}
                />
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Action event example"
                onAction={(key) => alert(key)}
              >
                <DropdownItem key="profile"> <div className="flex gap-1 items-center"><CiUser/> {user.nickname}</div></DropdownItem>
                <DropdownItem key="logout"><div onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="flex gap-1 items-center"><LuLogOut /> Logout</div></DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>: <>
            <NavbarItem className="hidden lg:flex">
          <Button onClick={()=>loginWithPopup()} color="secondary" variant="flat">
              Login
            </Button>
          </NavbarItem>
          {/* <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem> */}
            </>
          }

        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NavLink
                to={item.url}
                className={({ isActive }) =>
                  isActive
                    ? "text-red-500 font-semibold transition-all duration-500 px-3 py-3"
                    : ""
                }
                color="foreground"
                href=""
              >
                {item.name}
              </NavLink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
