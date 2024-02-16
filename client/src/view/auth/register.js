import React, { useState } from 'react';

//assets imports
import backgroundImage from '../../assets/register.png'

//utils imports
import { useHandleNavigate } from '../../utils/navigationRoutes';

//routes imports
import { handleRegisterRoute } from '../../routes/auth/authRoutes';

const Register = () => {
  const handleNavigation = useHandleNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorRegister, setErrorRegister] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="max-w-md w-full p-6 bg-opacity-10 bg-gray-500 rounded-md shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-center text-white">Register</h2>
        <section>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-white">
              Username:
            </label>
            <input
              type="text"
              id="username"
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
          {errorRegister && 
            <div className='text-center mb-1'>
              <p className='text-red-500 font-bold'>Registration Error</p>
            </div>
          }
          <div className="mb-4">
            <button
              type="submit"
              className="bg-white text-black rounded p-3 font-bold rounded-md hover:bg-pink-700 hover:border-white hover:text-white transition duration-300 ease-in-out w-full"
              onClick={() => handleRegisterRoute(email, name, password, setErrorRegister, handleNavigation)}>
              Register
            </button>
          </div>
        </section>
        <div className="text-center">
          <span className="text-white">Already have an account?</span>
          <button
            onClick={() => handleNavigation('')}
            className="text-pink-600 ml-1 hover:underline focus:outline-none"
          >
            Login here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;