/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  AppBar,
  Container,
  Button,
  Menu,
  MenuItem,
  Typography,
  Hidden,
  Drawer,
  List,
  ListItem,
  Collapse,
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import TextLink from '../Links/TextLink';
import ImgLink from '../Links/ImgLink';

import { breakpoints } from '../../constants/design';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [sideMenu, setSideMenu] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="navbar-root">
      <AppBar position="static" elevation={0} color="transparent">
        <Container maxWidth="lg">
          <div className="navbar-flexbox">
            <ImgLink
              href="/"
              img="/static/logos/dark.png"
              alt="Schemes SG Logo"
              height="32"
              width="130"
            />

            <Hidden smDown>
              <ul className="navs">
                <li onMouseEnter={handleClick}>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <span>
                      Find schemes!
                      <KeyboardArrowDownIcon
                        style={{ height: 20, width: 20, marginLeft: 2 }}
                      />
                    </span>
                  </Typography>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    autoFocus={false}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    MenuListProps={{ onMouseLeave: handleClose }}
                  >
                    <Link href="/pal" passHref>
                      <a>
                        <MenuItem onClick={handleClose}>
                          <TextLink text="Use our AI" href="/pal" />
                        </MenuItem>
                      </a>
                    </Link>
                    <Link href="/bank" passHref>
                      <a>
                        <MenuItem onClick={handleClose}>
                          <TextLink text="See all listings" href="/bank" />
                        </MenuItem>
                      </a>
                    </Link>
                    <Link href="/case" passHref>
                      <a>
                        <MenuItem onClick={handleClose}>
                          <TextLink text="Ask a volunteer" href="/case" />
                        </MenuItem>
                      </a>
                    </Link>
                  </Menu>
                </li>
                <li>
                  <TextLink text="About" href="/about" />
                </li>
                <li>
                  <TextLink text="Our Team" href="/team" />
                </li>
                <li>
                  <TextLink text="Blog" href="/blog" />
                </li>
                <li>
                  <Button
                    href="/listing"
                    variant="contained"
                    color="primary"
                    disableElevation
                  >
                    <Typography variant="subtitle1" color="white">
                      Add Listing
                    </Typography>
                  </Button>
                </li>
              </ul>
            </Hidden>
            <Hidden mdUp>
              {' '}
              <IconButton
                color="textSecondary"
                aria-label="open drawer"
                onClick={() => setSideMenu(true)}
                edge="start"
              >
                <MenuIcon
                  style={{
                    fontSize: '1.8rem',
                  }}
                />
              </IconButton>
              <Drawer open={sideMenu} onClose={() => setSideMenu(false)}>
                <List>
                  <ListItem onClick={() => setSideMenu(false)}>
                    <ImgLink
                      className="pic"
                      href="/"
                      img="/static/logos/dark.png"
                      alt="Schemes SG Logo"
                      height="32"
                      width="130"
                    />
                  </ListItem>

                  <ListItem onClick={() => setOpen(!open)}>
                    <Typography variant="subtitle1" color="textSecondary">
                      <span>
                        Find schemes!
                        {open ? (
                          <KeyboardArrowUpIcon
                            style={{ height: 20, width: 20, marginLeft: 2 }}
                          />
                        ) : (
                          <KeyboardArrowDownIcon
                            style={{ height: 20, width: 20, marginLeft: 2 }}
                          />
                        )}
                      </span>
                    </Typography>
                  </ListItem>

                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List disablePadding style={{ paddingLeft: 12 }}>
                      <ListItem onClick={() => setSideMenu(false)}>
                        <TextLink text="Use our AI" href="/pal" />
                      </ListItem>
                      <ListItem onClick={() => setSideMenu(false)}>
                        <TextLink text="See all listings" href="/bank" />
                      </ListItem>
                      <ListItem onClick={() => setSideMenu(false)}>
                        <TextLink text="Ask a volunteer" href="/case" />
                      </ListItem>
                    </List>
                  </Collapse>

                  <ListItem onClick={() => setSideMenu(false)}>
                    <TextLink text="About" href="/about" />
                  </ListItem>
                  <ListItem onClick={() => setSideMenu(false)}>
                    <TextLink text="Our Team" href="/team" />
                  </ListItem>
                  <ListItem onClick={() => setSideMenu(false)}>
                    <TextLink text="Blog" href="/blog" />
                  </ListItem>
                  <ListItem onClick={() => setSideMenu(false)}>
                    <Button
                      href="/listing"
                      variant="contained"
                      color="primary"
                      disableElevation
                    >
                      <Typography variant="subtitle1" color="white">
                        Add Listing
                      </Typography>
                    </Button>
                  </ListItem>
                </List>
              </Drawer>
            </Hidden>
          </div>
        </Container>
      </AppBar>
      <style jsx>
        {`
          .navbar-root {
            position: relative;
          }

          .navbar-flexbox {
            display: flex;
            justify-content: space-between;
            align-items: center;
            min-height: 88px;
          }

          .navs {
            display: flex;
            align-items: center;
            list-style: none;
          }

          .navs > li {
            margin-left: 2rem;
          }

          span {
            cursor: pointer;
            display: flex;
            align-items: center;
          }

          span:hover {
            opacity: 0.7;
          }

          @media only screen and (max-width: ${breakpoints.width.md}px) {
            .navbar-flexbox {
              display: flex;
              justify-content: space-between;
              align-items: center;
              min-height: 48px;
            }
          }

        `}
      </style>
    </div>
  );
};

export default Navbar;
