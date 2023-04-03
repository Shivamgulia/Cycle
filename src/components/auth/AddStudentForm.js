import { useContext, useRef, useState } from 'react';
import AuthContext from '../../store/auth-context';
import ReCAPTCHA from 'react-google-recaptcha';
import { useHistory } from 'react-router-dom';

import useHttp from '../hooks/use-http';
import { addStudent } from '../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './AddStudentForm.module.css';

const AddStudentForm = (props) => {
  const authCtx = useContext(AuthContext);
  const passwordRef = useRef();
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const { sendRequest, status, error } = useHttp(addStudent, false);

  // console.log(JSON.stringify(props.user));

  const onChange = () => {
    setIsVerified(true);
  };

  const toggleShowPassword = () => {
    if (showPassword) setShowPassword(false);
    if (!showPassword) setShowPassword(true);
  };

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered">{error}</p>;
  }

  const rollno = props.user.email.substring(0, 9);
  let branchName;
  const branchCode = rollno.substring(4, 6);
  if (branchCode === '01') {
    branchName = 'Bio Chemical Engineering';
  }
  if (branchCode === '02') {
    branchName = 'Civil Engineering';
  }
  if (branchCode === '03') {
    branchName = 'Chemical Techonology';
  }
  if (branchCode === '04') {
    branchName = 'Computer Sceince and Engineering';
  }
  if (branchCode === '05') {
    branchName = 'Electrical Engineering';
  }
  if (branchCode === '06') {
    branchName = 'Electronics Engineering';
  }
  if (branchCode === '07') {
    branchName = 'Food Technology';
  }
  if (branchCode === '08') {
    branchName = 'Information Technology';
  }
  if (branchCode === '09') {
    branchName = 'Leather Technology';
  }
  if (branchCode === '10') {
    branchName = 'Mechanical Engineering';
  }
  if (branchCode === '11') {
    branchName = 'Oil Technology';
  }
  if (branchCode === '12') {
    branchName = 'Plastic Technology';
  }
  if (branchCode === '13') {
    branchName = 'Paint Technology';
  }

  // console.log(branchName);
  const submitionHandler = (event) => {
    event.preventDefault();
    if (isVerified) {
      setIsLoading(true);
      // console.log('fuck');
      const Name = props.user.name;

      sendRequest({
        student: {
          name: Name.substring(0, Name.length - 31),
          rollno: rollno,
          branch: branchName,
          role: 'student',
          cycleid: '',
          email: props.user.email,
          password: passwordRef.current.value,
        },
        token: authCtx.token,
      });
      setIsLoading(false);
      // console.log({
      //   name: nameRef.current.value,
      //   rollno: rollnoRef.current.value,
      //   branch: branchRef.current.value,
      //   email: emailRef.current.value,
      //   role: 'student',
      //   password: passwordRef.current.value,
      // });
      history.replace('/');
    } else {
      alert('Verify that you are a human');
    }
  };

  return (
    <section className={classes.auth}>
      <h1>Add Student</h1>
      <form onSubmit={submitionHandler}>
        <div className={classes.control}>
          <label htmlFor="Name">Student Name</label>
          <input
            type="Name"
            id="Name"
            required
            value={props.user.name}
            readOnly
          />
        </div>
        {/* <div className={classes.control}>
          <label htmlFor="rollno">Student Roll Number</label>
          <input
            type="rollno"
            id="rollno"
            required
            value={props.user.email.substring(0, 9)}
            readOnly
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="branch">Branch</label>
          <input
            type="branch"
            id="branch"
            required
            value={props.user.email.substring(5, 7)}
            readOnly
          />
        </div> */}
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input
            type="userName"
            id="userName"
            required
            value={props.user.email}
            readOnly
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            required
            ref={passwordRef}
          />
        </div>
        <input type="checkbox" onClick={toggleShowPassword} /> Show Password
        <div className="centered">
          {/* <Recaptcha
            sitekey="6LfOzVQjAAAAACIJVTM3w4iuAePfdEloNCQvRhj-"
            render="explicit"
            verifyCallback={verifyCallback}
            onloadCallback={load}
          /> */}
          <ReCAPTCHA
            sitekey="6LcU0VQjAAAAAHdKzj2Ub7RAbfQCf6QXbgOif9Le"
            onChange={onChange}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>Create Account</button>}
          {isLoading && <p>Sending Request....</p>}
        </div>
      </form>
    </section>
  );
};

export default AddStudentForm;
