import { useRef, useContext } from 'react';
import classes from './ProfileForm.module.css';

import AuthContext from '../../store/auth-context';

const ProfileForm = () => {
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault(); 

    const enteredNewPassword = passwordInputRef.current.value;

    
    fetch('https://protectedresource?key=1234', 
        {
          method: "POST",
          body:  JSON.stringify({
            idToken: authCtx.token,
            enteredNewPassword,
            returnSecureToken: true
            }),
          headers: {
            "Content-Type": "application/json"
          }
      }
    ).then(res => {

    }); 

  }; 
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={passwordInputRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
