import * as React from 'react';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';
import NavMenu2 from './NavMenu2';

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    localStorage.setItem('selectedTab', value.toString());
  }, [value]);

  return (
    // <>
    <Box
      sx={{
        width: '100%',
        mr: '20px',
        display: 'flex',
        alignItems: 'center',
        fontFamily: ' "Roboto","Helvetica","Arial",sans-serif',
        fontWeight: '500',
        fontSize: '0.875rem',
        lineHeight: '1.75',
        letterSpacing: '0.02857em',
      }}
    >
      <Link
        style={{
          textDecoration: 'none',
          color: ' rgb(0, 0, 0)',
          padding: '6px 8px',
        }}
        label="ГОЛОВНА"
        // href="/"
        // component={Link}
        to="/"
      >
        ГОЛОВНА
      </Link>

      <NavMenu />
      <Link
        style={{
          textDecoration: 'none',
          color: ' rgb(0, 0, 0)',
          padding: '6px 8px',
        }}
        // label="ДЛЯ НАСЕЛЕННЯ"
        // href="/population"
        to="/population"
      >
        ДЛЯ НАСЕЛЕННЯ
      </Link>

      <NavMenu2 />

      <Link
        style={{
          textDecoration: 'none',
          color: ' rgb(0, 0, 0)',
          padding: '6px 8px',
        }}
        // label="ДЛЯ НАСЕЛЕННЯ"
        // href="/information"
        to="/information"
      >
        ПУБЛІЧНА ІНФОРМАЦІЯ
      </Link>
      <Link
        style={{
          textDecoration: 'none',
          color: ' rgb(0, 0, 0)',
          padding: '6px 8px',
        }}
        // label="ДЛЯ НАСЕЛЕННЯ"
        // href="/news"
        to="/news"
      >
        НОВИНИ
      </Link>
      <Link
        style={{
          textDecoration: 'none',
          color: ' rgb(0, 0, 0)',
          padding: '6px 8px',
        }}
        label="ДЛЯ НАСЕЛЕННЯ"
        // href="/contacts"
        to="/contacts"
      >
        КОНТАКТИ
      </Link>
    </Box>
    // </>
  );
}
