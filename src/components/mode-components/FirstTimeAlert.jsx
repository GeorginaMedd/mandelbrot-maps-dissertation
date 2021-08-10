import React, { useState } from 'react';
import './welcomePopup.css';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import SettingsIcon from '@material-ui/icons/Settings';
import Slide from '@material-ui/core/Slide';

// , width: '10vw', height: '10vh'
function FirstTimeAlert(props) {
  const [open, setOpen] = useState(true);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  // <Slide direction="left" in={checked} mountOnEnter unmountOnExit></Slide>
  // </Slide>
  // <Collapse in={open}>
  //           </Collapse>

  // localStorage.setItem('rememberMe', rememberMe);
  // const rememberMe = localStorage.getItem('rememberMe') === 'true';

  const [returningUser, setReturningUser] = useState(
    localStorage.getItem('returningUser') === 'true',
  );

  function handleClick() {
    setOpen(false);
    localStorage.setItem('returningUser', true);
  }

  if (returningUser) {
    return null;
  } else {
    // setNewUser(false);
    // console.log(rememberMe);
    return (
      <span style={{ zIndex: 100, display: 'flex' }}>
        <span>
          <Collapse in={open} timeout={300}>
            <Alert
              severity="info"
              color="info"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  onClick={() => {
                    handleClick();
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              <AlertTitle>
                <span role="img" aria-label="sheep">
                  👋
                </span>
                {` `} Hi there
              </AlertTitle>
              We noticed that you{"'"}re new to the site, and so may not know what these
              fractals are. If you want to learn more about the site or fractals, click on
              the settings icon <SettingsIcon className="rotate-center" /> in the bottom
              right corner. Happy exploring!
            </Alert>
          </Collapse>
        </span>
      </span>
    );
  }
}

export default FirstTimeAlert;
