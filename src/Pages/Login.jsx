
import '../Styles/Login.css';
import '../Styles/Common.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("DIGIT");
  const [password, setPassword] = useState("teju@2103");

  const handleLogin = () => {
    console.log("clicked login");

    if (setToken) {
      localStorage.setItem('token', 'dummy-token');
      setToken('dummy-token');
    }

    navigate('/home');
  };

  return (
    <div>
      {/* Banner Section */}
      <section className="banner" style={{ backgroundImage: "url('./Images/login.png')" }}>
        <div className="banner-content">
          <img src="./Images/logo1.png" alt="logo" width="200px" />
          <h1>Unlimited streaming of</h1>
          <h1 className="banner-head">movies,series,and more.</h1>
          <p>All your favorites in one place. Start watching now.</p>

          {/* Button trigger modal */}
          <a href="#" className="btn-login" data-bs-toggle="modal" data-bs-target="#loginModal">
            <b> LOGIN</b>
          </a>

          {/* Modal */}
          <div
            className="modal fade"
            id="loginModal"
            tabIndex="-1"
            aria-labelledby="loginModalLabel"
            aria-hidden="true" >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header border-0">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <h3>LOGIN</h3>
                  <form>
                    <div className="mb-3">
                      <label>USERNAME:</label>
                      <input type="text" className="form-control" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    </div>
                    <div className="mb-3">
                      <label>PASSWORD:</label>
                      <input type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required/>
                    </div>
                    <br />
                    <button
                      type="button"
                      className="btn w-100"
                      data-bs-dismiss="modal"
                      onClick={handleLogin}
                    >
                      <b>LOGIN</b>
                    </button>
                  </form>
                </div>
                
                <div className="modal-footer justify-content-center border-0">
                  
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
