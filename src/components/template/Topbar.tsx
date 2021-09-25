import useAppData from '../../data/hook/useAppData';
import ThemeButton from './ThemeButton';
import Title from './Title';
import UserAvatar from './UserAvatar';

interface TopbarProps {
  title: string;
  subtitle: string;
}

const Topbar = (props: TopbarProps) => {
  const { theme, changeTheme } = useAppData();
  return (
    <div className={`flex`}>
      <Title title={props.title} subtitle={props.subtitle} />
      <div className={`flex flex-grow justify-end items-center`}>
        <ThemeButton theme={theme} changeTheme={changeTheme} />
        <UserAvatar className='ml-3' />
      </div>
    </div>
  );
};

export default Topbar;
