import useAppData from '../../data/hook/useAppData';
import ForceAuthentication from '../auth/ForceAuthentication';
import Content from './Content';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: any;
}

const Layout = (props: LayoutProps) => {
  const { theme } = useAppData();

  return (
    <ForceAuthentication>
      <div className={`${theme} flex h-screen w-screen`}>
        <Sidebar />
        <div
          className={`
      flex flex-col
      w-full p-7 
      bg-gray-300 dark:bg-gray-800
      `}
        >
          <Topbar title={props.title} subtitle={props.subtitle} />
          <Content>{props.children}</Content>
        </div>
      </div>
    </ForceAuthentication>
  );
};

export default Layout;
