import { createContext, useState } from 'react';

type Theme = 'dark' | '';

interface AppContextProps {
  theme?: Theme;
  changeTheme?: () => void;
}

const AppContext = createContext<AppContextProps>({});

export const AppProvider = (props) => {
  const [theme, setTheme] = useState<Theme>('');

  const changeTheme = () => {
    setTheme(theme === '' ? 'dark' : '');
  };

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
