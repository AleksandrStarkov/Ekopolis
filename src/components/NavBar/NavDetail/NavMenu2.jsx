import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { Grow, Paper, Popper, MenuItem, MenuList, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

export default function MenuListComposition() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{ color: 'rgb(0, 0, 0)' }}
        >
          ДЛЯ ПІДПРИЄМЦІВ
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
          style={{}}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
                marginTop: '14px',
                backgroundColor: ' rgb(242 249 242 / 73%)',
                boxShadow:
                  '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    style={{ margin: '0px 10px' }}
                  >
                    <MenuItem
                      onClick={handleClose}
                      style={{
                        padding: '0px',
                      }}
                    >
                      <Link
                        style={{
                          textDecoration: 'none',
                          color: ' rgb(0, 0, 0)',
                          fontFamily:
                            ' "Roboto","Helvetica","Arial",sans-serif',
                          fontWeight: '500',
                          fontSize: '0.875rem',
                          lineHeight: '1.75',
                          letterSpacing: '0.02857em',
                          padding: '7px',
                        }}
                        // label="УКЛАСТИ ДОГОВІР"
                        // href="/Agreement"
                        to="agreement"
                      >
                        УКЛАСТИ ДОГОВІР
                      </Link>
                    </MenuItem>
                    <MenuItem
                      onClick={handleClose}
                      style={{
                        padding: '0px',
                        textDecoration: 'none',
                        color: ' rgb(0, 0, 0)',
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
                          padding: '7px',
                        }}
                        // label="ТАРИФИ"
                        // href="/rates"
                        to="rates"
                      >
                        ТАРИФИ
                      </Link>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
