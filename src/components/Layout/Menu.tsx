import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { Link, NavigateFunction } from "react-router-dom";
import { clearToken } from "../API/API";

type NavMenuPropTypes = {
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
};
export const NavMenu = (props: NavMenuPropTypes) => {
  return (
    <>
      <Button
        component={Link}
        to="/"
        onClick={props.handleCloseNavMenu}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        Home
      </Button>
      <Button
        component={Link}
        to="/books"
        onClick={props.handleCloseNavMenu}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        Discover
      </Button>
      <Button
        component={Link}
        to="/reading-list"
        onClick={props.handleCloseNavMenu}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        Reading List
      </Button>
      <Button
        component={Link}
        to="/profile"
        onClick={props.handleCloseNavMenu}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        Profile
      </Button>
    </>
  );
};

type UserMenuPropTypes = {
  handleCloseUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  anchorElUser: null | HTMLElement;
  navigate: NavigateFunction
};
export const UserMenu = (props: UserMenuPropTypes) => {
  return (
    <>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={props.anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(props.anchorElUser)}
        onClose={props.handleCloseUserMenu}
      >
        {/* const settings = ["Profile", "Account", "Dashboard", "Logout"];
         */}
        <MenuItem onClick={props.handleCloseUserMenu}>
          <Button component={Link} to="/profile">
            <Typography textAlign="center">Profile</Typography>
          </Button>
        </MenuItem>
        <MenuItem onClick={props.handleCloseUserMenu}>
          <Button component={Link} to="/account">
            <Typography textAlign="center">Account</Typography>
          </Button>
        </MenuItem>
        <MenuItem>
          <Button
            onClick={() => {
              props.handleCloseUserMenu, clearToken(), props.navigate("/")
            }}
          >
            <Typography textAlign="center">Logout</Typography>
          </Button>
        </MenuItem>
      </Menu>
    </>
  );
};

type CollapseMenuPropType = {
  anchorElNav: null | HTMLElement;
  handleCloseNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
};

export const CollapseMenu = (props: CollapseMenuPropType) => {
  return (
    <>
      <Menu
        id="menu-appbar"
        anchorEl={props.anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(props.anchorElNav)}
        onClose={props.handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        <MenuItem onClick={props.handleCloseNavMenu}>
          <Button component={Link} to="/" onClick={props.handleCloseNavMenu}>
            <Typography textAlign="center">Home</Typography>
          </Button>
        </MenuItem>
        <MenuItem onClick={props.handleCloseNavMenu}>
          <Button
            component={Link}
            to="/books"
            onClick={props.handleCloseNavMenu}
          >
            <Typography textAlign="center">Discover</Typography>
          </Button>
        </MenuItem>
        <MenuItem onClick={props.handleCloseNavMenu}>
          <Button
            component={Link}
            to="/reading-list"
            onClick={props.handleCloseNavMenu}
          >
            <Typography textAlign="center">Reading List</Typography>
          </Button>
        </MenuItem>
      </Menu>
    </>
  );
};
