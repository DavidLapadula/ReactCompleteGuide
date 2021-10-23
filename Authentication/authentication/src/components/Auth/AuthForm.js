import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory(); 

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  
  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(false);

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    const reqConfig =  {
            method: "POST",
            body:  JSON.stringify({
              email,
              password,
              returnSecureToken: true
              }),
            headers: {
              "Content-Type": "application/json"
            }
    }

    if (isLogin) {
      fetch("https://signinurl?key=123", reqConfig)
            .then(res => {
                return res.json();
            }); 
    } else {
      fetch("https://signupurl?key=123", reqConfig)
            .then(res => {
              if (res.ok) {

              } else {
                return res.json()
                        .then(data => {
                          throw new Error(data.error.message);
                        })
              }
            })
            .then((data) => {
              authCtx.login(data.idToken);
              history.replace("/");
            })
            .catch((data) => console.log(data));
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef}/>
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Loading...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
