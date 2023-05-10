import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setAnchorEl1(null);
    setAnchorEl2(null);
    setAnchorEl3(null);
  };

  const handleClick1 = event => {
    setAnchorEl1(event.currentTarget);
    setAnchorEl2(null);
    setAnchorEl3(null);
    setAnchorEl(null);
  };

  const handleClick2 = event => {
    setAnchorEl2(event.currentTarget);
    setAnchorEl1(null);
    setAnchorEl3(null);
    setAnchorEl(null);
  };

  const handleClick3 = event => {
    setAnchorEl3(event.currentTarget);
    setAnchorEl1(null);
    setAnchorEl2(null);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl1(null);
    setAnchorEl2(null);
    setAnchorEl3(null);
  };

  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      <div
        style={{
          minWidth: '900px',
          display: 'flex',
          justifyContent: 'space-evenly',
          // alignItems: 'center',
        }}
      >
        <Button
          color="inherit"
          component={Link}
          to="/"
          aria-owns={anchorEl}
          aria-haspopup="true"
          onClick={handleClick}
          onMouseEnter={handleClick}
          style={{
            zIndex: '1400',
          }}
        >
          ГОЛОВНА
        </Button>
        <Button
          color="inherit"
          aria-owns={anchorEl1 ? 'simple-menu-1' : undefined}
          aria-haspopup="true"
          onClick={handleClick1}
          onMouseEnter={handleClick1}
          style={{
            zIndex: '1400',
          }}
          // endIcon={<KeyboardArrowDownIcon />}
        >
          ПРО ПІДПРИЄМСТВО
        </Button>

        <Button
          color="inherit"
          aria-owns={anchorEl2 ? 'simple-menu-2' : undefined}
          aria-haspopup="true"
          onClick={handleClick2}
          // onMouseOver={handleClick2}
          onMouseEnter={handleClick2}
          style={{
            zIndex: '1400',
          }}
        >
          ДЛЯ ПІДПРИЄМЦІВ
        </Button>

        <Button
          color="inherit"
          aria-owns={anchorEl3 ? 'simple-menu-3' : undefined}
          aria-haspopup="true"
          onClick={handleClick3}
          // onMouseOver={handleClick3}
          onMouseEnter={handleClick3}
          style={{
            zIndex: '1400',
          }}
        >
          ПУБЛІЧНА ІНФОРМАЦІЯ
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="contacts"
          aria-haspopup="true"
          onClick={handleClick}
          onMouseEnter={handleClick}
          style={{
            zIndex: '1400',
          }}
        >
          КОНТАКТИ
        </Button>

        <Menu
          id="simple-menu-1"
          anchorEl={anchorEl1}
          open={Boolean(anchorEl1)}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose }}
          style={{ top: '15px' }}
        >
          <MenuItem onClick={handleClose}>
            <Link
              style={{
                textDecoration: 'none',
                color: ' #000000',
                fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
                fontWeight: '500',
                fontSize: '0.875rem',
                lineHeight: '1.75',
                letterSpacing: '0.02857em',
              }}
              to="about"
            >
              ПРО НАС
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              style={{
                textDecoration: 'none',
                color: ' #000000',
                fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
                fontWeight: '500',
                fontSize: '0.875rem',
                lineHeight: '1.75',
                letterSpacing: '0.02857em',
              }}
              to="activity"
            >
              ДІЯЛЬНІСТЬ
            </Link>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <Link
              style={{
                textDecoration: 'none',
                color: ' #000000',
                fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
                fontWeight: '500',
                fontSize: '0.875rem',
                lineHeight: '1.75',
                letterSpacing: '0.02857em',
              }}
              to="structure"
            >
              СТРУКТУРА
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              style={{
                textDecoration: 'none',
                color: ' #000000',
                fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
                fontWeight: '500',
                fontSize: '0.875rem',
                lineHeight: '1.75',
                letterSpacing: '0.02857em',
              }}
              to="vacancies"
            >
              ВАКАНСІЇ
            </Link>
          </MenuItem>
        </Menu>
        <Menu
          id="simple-menu-2"
          anchorEl={anchorEl2}
          open={Boolean(anchorEl2)}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose }}
          style={{ top: '15px' }}
        >
          <MenuItem onClick={handleClose}>
            <Link
              style={{
                textDecoration: 'none',
                color: ' rgb(0, 0, 0)',
                fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
                fontWeight: '500',
                fontSize: '0.875rem',
                lineHeight: '1.75',
                letterSpacing: '0.02857em',
              }}
              to="agreement"
            >
              УКЛАСТИ ДОГОВІР
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              style={{
                textDecoration: 'none',
                color: ' rgb(0, 0, 0)',
                fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
                fontWeight: '500',
                fontSize: '0.875rem',
                lineHeight: '1.75',
                letterSpacing: '0.02857em',
              }}
              to="rates"
            >
              ТАРИФИ
            </Link>
          </MenuItem>
        </Menu>
        <Menu
          id="simple-menu-3"
          anchorEl={anchorEl3}
          open={Boolean(anchorEl3)}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose }}
          style={{ top: '15px' }}
        >
          <MenuItem onClick={handleClose}>
            <Link
              style={{
                textDecoration: 'none',
                color: ' #000000',
                fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
                fontWeight: '500',
                fontSize: '0.875rem',
                lineHeight: '1.75',
                letterSpacing: '0.02857em',
              }}
              to="activity"
            >
              НОРМАТИВНО-ПРАВОВА БАЗА
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              style={{
                textDecoration: 'none',
                color: ' #000000',
                fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
                fontWeight: '500',
                fontSize: '0.875rem',
                lineHeight: '1.75',
                letterSpacing: '0.02857em',
              }}
              to="management"
            >
              ФІНАНСОВА ЗВІТНІСТЬ
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              style={{
                textDecoration: 'none',
                color: ' #000000',
                fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
                fontWeight: '500',
                fontSize: '0.875rem',
                lineHeight: '1.75',
                letterSpacing: '0.02857em',
              }}
              to="https://prozorro.gov.ua/"
            >
              ПУБЛІЧНІ ЗАКУПІВЛІ
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              style={{
                textDecoration: 'none',
                color: ' #000000',
                fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
                fontWeight: '500',
                fontSize: '0.875rem',
                lineHeight: '1.75',
                letterSpacing: '0.02857em',
              }}
              to="vacancies"
            >
              УСТАНОВЧІ ДОКУМЕНТИ
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              style={{
                textDecoration: 'none',
                color: ' #000000',
                fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
                fontWeight: '500',
                fontSize: '0.875rem',
                lineHeight: '1.75',
                letterSpacing: '0.02857em',
              }}
              to="vacancies"
            >
              РОЗПОРЯДЖЕННЯ
            </Link>
          </MenuItem>
        </Menu>
      </div>
    </Container>
  );
}

export default SimpleMenu;
