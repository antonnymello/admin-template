import Head from 'next/head';
import Image from 'next/image';
import router from 'next/router';
import loadingGif from '../../../public/images/loading.gif';
import useAuth from '../../data/hook/useAuth';

const ForceAuthentication = (props) => {
  const { user, loading } = useAuth();

  const renderContent = () => {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            if(!document.cookie?.includes('admin-template-auth')){
                window.location.href = '/authentication';
            }
            `,
            }}
          />
        </Head>
        {props.children}
      </>
    );
  };

  const renderLoading = () => {
    return (
      <div className={`flex justify-center items-center h-screen`}>
        <Image src={loadingGif} />
      </div>
    );
  };

  if (!loading && user?.email) {
    return renderContent();
  } else if (loading) {
    return renderLoading();
  } else {
    router.push('/authentication');
    return null;
  }
};

export default ForceAuthentication;
