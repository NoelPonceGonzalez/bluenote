import { useState } from "react";

//assets imports
import backgroundImage from '../../assets/login.png'

//utils imports
import { useHandleNavigate } from "../../utils/navigationRoutes";

//rotues imports
import { handleLoginRoute } from "../../routes/auth/authRoutes";

const Login = () => {
    const handleNavigation = useHandleNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorLogin, setErrorLogin] = useState(false);
    
    return (
      <div className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="max-w-md w-full p-6 bg-opacity-10 bg-gray-500 rounded-md shadow-md">
            <h2 className="text-3xl font-semibold mb-4 text-center text-white">Login</h2>
            <section>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-white">
                  Username:
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-white">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errorLogin && 
                <div className='text-center mb-1'>
                  <p className='text-red-500 font-bold'>Login Error</p>
                </div>
              }
              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-white text-black rounded p-3 font-bold rounded-md hover:bg-pink-700 hover:border-white hover:text-white transition duration-300 ease-in-out w-full"
                  onClick={() => handleLoginRoute(name, password, setErrorLogin, handleNavigation)}>
                  Login
                </button>
              </div>
            </section>
            <div className="text-center">
              <span className="text-white">Don't have an account?</span>
              <button
                onClick={() => handleNavigation('register')}
                className="text-pink-600 ml-1 hover:underline focus:outline-none"
              >
                Register here
              </button>
            </div>
          </div>
        </div>
      );
    };
    
    export default Login;