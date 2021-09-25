import Link from 'next/link';
import useAuth from '../../data/hook/useAuth';

interface UserAvatarProps {
  className?: string;
}

const UserAvatar = (props: UserAvatarProps) => {
  const { user } = useAuth();

  return (
    <Link href='/perfil'>
      <img
        src={user?.imageUrl ?? '/images/avatar.svg'}
        alt='User Avatar'
        className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`}
      ></img>
    </Link>
  );
};

export default UserAvatar;
