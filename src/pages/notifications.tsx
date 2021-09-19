import Layout from '../components/template/Layout';
import useAppData from '../data/hook/useAppData';

const Notifications = () => {
  const { changeTheme } = useAppData();

  return (
    <Layout title='Notificações' subtitle='Manage your notifications'>
      <h1>Content</h1>
    </Layout>
  );
};

export default Notifications;
