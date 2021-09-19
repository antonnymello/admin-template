import Link from 'next/link';

interface MenuItemProps {
  url?: string;
  text: string;
  icon: any;
  className?: string;
  onClick?: (event: any) => void;
}

const MenuItem = (props: MenuItemProps) => {
  const renderLink = () => {
    return (
      <a
        className={`
    flex flex-col justify-center items-center
    h-20 w-20 text-gray-600
    ${props.className}
    `}
      >
        {props.icon}
        <span className={`text-xs font-light `}>{props.text}</span>
      </a>
    );
  };

  return (
    <li onClick={props.onClick} className={`hover:bg-gray-100 cursor-pointer`}>
      {props.url ? <Link href={props.url}>{renderLink()}</Link> : renderLink()}
    </li>
  );
};

export default MenuItem;
