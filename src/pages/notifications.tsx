import Layout from '../components/template/Layout';
import useAppData from '../data/hook/useAppData';

const Notifications = () => {
  const { changeTheme } = useAppData();

  return (
    <Layout title='Notificações' subtitle='Manage your notifications'>
      <button onClick={changeTheme}>Change Theme</button>
    </Layout>
  );
};

export default Notifications;
