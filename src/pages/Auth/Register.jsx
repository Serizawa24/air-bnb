import styles from "./Auth.module.scss";
import classnames from "classnames/bind";
import { useReducer,useState,useEffect } from "react";
import reducer, { initState } from "../../reduce/reducer";
import { setRegister } from "../../reduce/actions";
import { useNavigate } from "react-router-dom";

const cx = classnames.bind(styles);
function Register() {
  const [state, dispatch] = useReducer(reducer, initState);

  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [governmentId, setGovernmentId] = useState("");
  const [address, setAddress] = useState("");
  const [formRes,setFormRes] = useState("");
  const navigate = useNavigate('/')

  const handleAvatarChange = (event) => {
    setAvatar(event.target.files[0]);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleGovernmentIdChange = (event) => {
    setGovernmentId(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };



  const emailRegex =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const emailValid = emailRegex.test(email) ? undefined : 'Email is not valid';
  
  const passwordRegex = /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}).*$/g;
  const passwordValid = passwordRegex.test(password) ? undefined: 'Password is not valid'

  const confirmPasswordValid = confirmPassword === password ? undefined : 'Password do not match';

  const avatarValid = !!avatar ? undefined : 'Avatar is required';
  
  const governmentIdValid  = !!governmentId ? undefined : 'Goverment Id is required';

  const addressValid = !!address ? undefined : 'Address is required';

  const usernameValid = !!username ? undefined : 'Username is required'

  const formResValid = formRes.error || formRes.msg;

  const handleSubmit = async (event) => {
    event.preventDefault();
    let formValid = usernameValid === undefined && confirmPasswordValid ===undefined && avatarValid===undefined && governmentIdValid===undefined && addressValid === undefined && passwordValid === undefined && emailValid === undefined && true;
    
    if (formValid) {
      const formData = new FormData();
      formData.append('picture', avatar); // pass the avatar file as 'picture' property
      formData.append('username', username);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('governmentId', governmentId);
      formData.append('address', address);
      await fetch('http://127.0.0.1:1338/auth/register', {
        method: 'POST',
        body: formData
      })
      .then(res=>res.json()).then(data=>{
        setFormRes(data);
        if(!!data.username) {
          window.location.href = '/login';
        }
      })
      .catch(err=>{
        console.error(err);
      });

    }
  };


  useEffect(() => {
    if (!!state.token && state.user) {
      navigate('/');
    }
  }, [navigate, state]);

  console.log("formRes",formResValid)

  return (
    <div className={cx("wrapper")}>
      <form className={cx("form")} onSubmit={handleSubmit}>
        <h3 className={cx('heading')}>Register</h3>
        <div className={cx("spacer")}></div>
        <div className={cx("form-group")}>
          <label className={cx("form-label")} htmlFor="avatar">
            Avatar
          </label>
          <input
            className={cx("form-control")}
            id="avatar"
            name="picture"
            type="file"
            onChange={handleAvatarChange}

          />
          <span className={cx("form-message")}>{avatarValid}</span>
        </div>
        <div className={cx("spacer")}></div>
        <div className={cx("form-group")}>
          <label className={cx("form-label")} htmlFor="username">
            Username
          </label>
          <input
            className={cx("form-control")}
            id="username"
            name="username"
            placeholder="Enter username..."
            type="text"
            onChange={handleUsernameChange}

          />
          <span className={cx("form-message")}>{usernameValid}</span>
        </div>
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
            onChange={handleEmailChange}
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
            onChange={handlePasswordChange}

          />
          <span className={cx('form-message')}>{passwordValid}</span>
        </div>
        <div className={cx("spacer")}></div>
        <div className={cx('form-group')}>
          <label htmlFor="password-confirm" className={cx('form-label')}>
            Xác nhận mật khẩu
          </label>
          <input
            className={cx("form-control")}
            id="password-confirm"
            autoComplete="on"
            name="password-confirm"
            type="password"
            placeholder="Confirm password..."
            onChange={handleConfirmPasswordChange}
          />
          <span className={cx('form-message')}>{confirmPasswordValid}</span>
        </div>
        <div className={cx("spacer")}></div>
        <div className={cx("form-group")}>
          <label className={cx("form-label")} htmlFor="governmentId">
          Government Id
          </label>
          <input
            className={cx("form-control")}
            id="governmentId"
            name="governmentId"
            placeholder="Enter Government Id..."
            type="number"
            onChange={handleGovernmentIdChange}
          />
          <span className={cx("form-message")}>{governmentIdValid}</span>
        </div>
        <div className={cx("spacer")}></div>
        <div className={cx("form-group")}>
          <label className={cx("form-label")} htmlFor="address">
            Address
          </label>
          <input
            className={cx("form-control")}
            id="address"
            name="address"
            placeholder="Enter address..."
            type="text"
            onChange={handleAddressChange}
          />
          <span className={cx("form-message")}>{addressValid}</span>
        </div>
        <div className={cx('spacer')}></div>
        <button className={cx('form-submit')}>Register</button>
        <div className={cx("spacer")}></div>
        <div className={cx("form-group")}>
          <span className={cx("form-message")}>{formResValid}</span>
        </div>
      </form>

      <script src="./valid.js"></script>
    </div>
  );
}

export default Register;
