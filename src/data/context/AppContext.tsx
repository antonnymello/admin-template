import { createContext, useEffect, useState } from 'react';

interface AppContextProps {
  theme?: string;
  changeTheme?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export const AppProvider = (props) => {
  const [theme, setTheme] = useState('');

  const changeTheme = () => {
    const newTheme = theme === '' ? 'dark' : '';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setTheme(theme);
  }, []);

  return (
    <div>
      <AppContext.Provider
        value={{
          theme,
          changeTheme,
        }}
      >
        {props.children}
      </AppContext.Provider>
    </div>
  );
};

export default AppContext;
