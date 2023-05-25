import styles from './Auth.module.scss';
import classnames from 'classnames/bind'
import { useReducer,useState,useRef,useEffect } from 'react';
import reducer,{initState} from '../../reduce/reducer';
import { setLogin } from '../../reduce/actions';
import { useNavigate } from 'react-router-dom';

const cx = classnames.bind(styles)
function Login() {

  const [state,dispatch] = useReducer(reducer,initState);

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [formRes,setFormRes] = useState('');

  const emailRegex =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const emailValid = emailRegex.test(email) ? undefined : 'Email is not valid';
  
  const passwordRegex = /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}).*$/g;
  const passwordValid = passwordRegex.test(password) ? undefined: 'Password is not valid'

  const navigate = useNavigate('/');

  const emailRef = useRef()
  useEffect(() => {
    emailRef.current.focus()
  }
  ,[])

  let formResValid =  formRes.error || formRes.msg;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formValid = passwordValid === undefined && emailValid === undefined && true;
    const formData = { email, password };
    if (formValid) {
      await fetch('http://127.0.0.1:1338/auth/login', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data=>{
        setFormRes(data);
        if(!!data.token && !!data.user) {
          dispatch(setLogin(data))
          window.location.href = '/';
        }
      })
      .catch(err => err);
    }
  }
  useEffect(() => {
    if (!!state.token && state.user) {
      navigate('/');
    }
  }, [navigate, state]);

  console.log('formRes',formRes)
  return ( 
    <div className={cx("wrapper")}>
      <form className={cx("form")} onSubmit={handleSubmit}>
        <h3 className={cx('heading')}>Login</h3>
        <div className={cx("spacer")}></div>
        <div className={cx("form-group")}>
          <label className={cx("form-label")} htmlFor="email">
            Email
          </label>
          <input
            className={cx("form-control")}
            id="email"
            name="email"
            placeholder="Enter email..."
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
          />
          <span className={cx("form-message")}>{emailValid}</span>
        </div>
        <div className={cx("spacer")}></div>
        <div className={cx('form-group')}>
          <label htmlFor="password" className={cx('form-label')}>
            Mật khẩu
          </label>
          <input
            className={cx("form-control")}
            id="password"
            autoComplete="on"
            name="password"
            type="password"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className={cx('form-message')}>{passwordValid}</span>
        </div>
        <div className={cx("spacer")}></div>
        <button className={cx('form-submit')}>Login</button>
        <div className={cx("spacer")}></div>
        <div className={cx("form-group")}>
          <span className={cx("form-message")}>{formResValid}</span>
        </div>
      </form>

    </div> 
  );
}

export default Login;