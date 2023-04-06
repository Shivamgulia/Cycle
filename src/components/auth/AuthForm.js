import { useState, useRef, useContext, Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import HowToUse from '../../pages/HowToUse';
import { Route } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const history = useHistory();

  const [isVerified, setIsVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLoading, setIsLoading] = useState(false);

  function onChange(value) {
    setIsVerified(true);
    // console.log('Captcha value:', value);
  }

  // const verifyCallback = () => {
  //   setIsVerified(true);
  // };
  // const load = () => {
  //   setIsVerified(false);
  // };

  const toggleShowPassword = () => {
    if (showPassword) setShowPassword(false);
    if (!showPassword) setShowPassword(true);
  };

  const submitionHandler = (event) => {
    event.preventDefault();

    if (isVerified) {
      const enteredEmail = emailInputRef.current.value;
      const enteredPassword = passwordInputRef.current.value;

      setIsLoading(true);

      //  const url = 'https://cycle-api.azurewebsites.net/users/login'; //login send req url
      // const url = 'http://64.226.69.16/users/login';
      const url = 'https://app.hbtu.ac.in/users/login';

      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          setIsLoading(false);
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = 'Authentication Failed';
              if (data && data.error && data.error.message) {
                setIsLoading(false);
                errorMessage = data.error.message;
              }
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          const experationTime = new Date(new Date().getTime() + +36000000);
          authCtx.login(
            data,
            enteredPassword,
            data.token,
            data._id,
            data.role,
            data.cycleid,
            experationTime.toISOString()
          );
          history.replace('/');
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      alert('Verify if you are human');
    }
  };

  const signupHandler = () => {
    history.push('/signup');
  };

  return (
    <Fragment>
      <Route path="/auth/howtouse">
        {/* {loggedIn && <Redirect to="/mainPage" />} */}
        {/* {!loggedIn && <Signup />} */}
        <HowToUse />
      </Route>
      <section className={classes.auth}>
        <h1>Login</h1>
        <form onSubmit={submitionHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="userName" id="userName" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <input type="checkbox" onClick={toggleShowPassword} /> Show Password
          <div className="centered">
            {/* <Recaptcha
            sitekey="6LdUKmUlAAAAAH_t6EjIE4ev4OK7Bw0IjQVmkGbq"
            render="explicit"
            verifyCallback={verifyCallback}
            onloadCallback={load}
          /> */}
            <ReCAPTCHA
              sitekey="6LdUKmUlAAAAAH_t6EjIE4ev4OK7Bw0IjQVmkGbq"
              onChange={onChange}
            />
          </div>
          <div className={classes.actions}>
            {!isLoading && <button>Login</button>}
            {isLoading && <p>Sending Request....</p>}
          </div>
        </form>
        <div className={classes.actions}>
          <button onClick={signupHandler}> Sign Up</button>
        </div>
      </section>
    </Fragment>
  );
};

export default AuthForm;
