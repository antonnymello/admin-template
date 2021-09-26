import { useState } from 'react';
import Image from 'next/image';
import AuthInput from '../components/auth/AuthInput';
import { WarningIcon } from '../components/icons';
import useAuth from '../data/hook/useAuth';

const Authentication = () => {
  const { register, login, loginGoogle } = useAuth();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const renderError = (msg, timeout = 5000) => {
    setError(msg);
    setTimeout(() => setError(null), timeout);
  };

  const submit = async () => {
    try {
      if (mode === 'login') {
        await login(email, password);
      } else {
        await register(email, password);
      }
    } catch (error) {
      renderError(error?.message ?? 'An error occurred');
    }
  };

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='hidden md:block md:w-1/2 lg:w-2/3'>
        <img
          src='https://source.unsplash.com/random'
          alt='Login Image'
          className='h-screen w-full object-cover'
        />
      </div>
      <div className='m-10 w-full md:w-1/2 lg:w-1/3'>
        <h1 className={`text-3xl font-bold mb-5`}>
          {mode === 'login'
            ? 'Login with your credentials'
            : 'Register new account'}
        </h1>

        {error ? (
          <div
            className={`
          flex items-center
        bg-red-400 text-white py-3 px-5 my-2
        border border-red-700 rounded-lg
        `}
          >
            {WarningIcon(7)}
            <span className='ml-3 font-semibold'>{error}</span>
          </div>
        ) : null}

        <AuthInput
          label={'Email'}
          value={email}
          type='email'
          valueChanged={setEmail}
          required
        />
        <AuthInput
          label={'Password'}
          value={password}
          type='password'
          valueChanged={setPassword}
          required
        />

        <button
          onClick={submit}
          className={`
      w-full bg-indigo-500 hover:bg-indigo-400
      text-white font-bold py-3 px-4 rounded-lg mt-6
      `}
        >
          {mode === 'login' ? 'Login' : 'Register'}
        </button>

        <hr className='my-6 border-grey-300 w-full' />

        <button
          onClick={loginGoogle}
          className={`
        flex items-center justify-center
        w-full bg-red-500 hover:bg-red-400
      text-white font-bold py-3 px-4 rounded-lg
      `}
        >
          <Image src='/google_icon.svg' width={20} height={20} />
          <span className='mx-3'>Login with Google Account</span>
        </button>

        {mode === 'login' ? (
          <p className='mt-8'>
            New here?
            <a
              onClick={() => setMode('register')}
              className={`
            text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
            `}
            >
              {' '}
              Create Account
            </a>
          </p>
        ) : (
          <p className='mt-8'>
             Already registered?
            <a
              onClick={() => setMode('login')}
              className={`
          text-blue-500 hover:text-blue-700 font-semibold cursor-pointer
          `}
            >
              {' '}
              Login with your credentials{' '}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Authentication;
