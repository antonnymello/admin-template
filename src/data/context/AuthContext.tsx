import router from 'next/router';
import { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import User from '../../model/User';
import firebase from '../../firebase/config';

interface AuthContextProps {
  user?: User;
  loading?: boolean;
  loginGoogle?: () => Promise<void>;
  logout?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

const normalizeUser = async (firebaseUser: firebase.User): Promise<User> => {
  const token = await firebaseUser.getIdToken();
  return {
    uid: firebaseUser.uid,
    name: firebaseUser.displayName,
    email: firebaseUser.email,
    token,
    provider: firebaseUser.providerData[0].providerId,
    imageUrl: firebaseUser.photoURL,
  };
};

const cookieHandler = (logged: boolean) => {
  if (logged) {
    Cookies.set('admin-template-auth', logged, { expires: 7 });
  } else {
    Cookies.remove('admin-template-auth');
  }
};

export const AuthProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>(null);

  const configSession = async (firebaseUser: firebase.User) => {
    if (firebaseUser?.email) {
      const user = await normalizeUser(firebaseUser);
      setUser(user);
      cookieHandler(true);
      setLoading(false);
      return user.email;
    } else {
      setUser(null);
      cookieHandler(false);
      setLoading(false);
      return false;
    }
  };

  const loginGoogle = async () => {
    try {
      setLoading(true);
      const response = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());
      configSession(response.user);
      await router.push('/');
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await firebase.auth().signOut();
      await configSession(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (Cookies.get('admin-template-auth')) {
      const cancel = firebase.auth().onIdTokenChanged(configSession);
      return () => cancel();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        loginGoogle,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
