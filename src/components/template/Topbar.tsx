import useAppData from '../../data/hook/useAppData';
import ThemeButton from './ThemeButton';
import Title from './Title';

interface TopbarProps {
  title: string;
  subtitle: string;
}

const Topbar = (props: TopbarProps) => {
  const { theme, changeTheme } = useAppData();
  return (
    <div className={`flex`}>
      <Title title={props.title} subtitle={props.subtitle} />
      <div className={`flex flex-grow justify-end`}>
        <ThemeButton theme={theme} changeTheme={changeTheme} />
      </div>
    </div>
  );
};

export default Topbar;
