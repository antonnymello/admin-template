import Title from './Title';

interface TopbarProps {
  title: string;
  subtitle: string;
}

const Topbar = (props: TopbarProps) => {
  return (
    <div>
      <Title title={props.title} subtitle={props.subtitle} />
    </div>
  );
};

export default Topbar;
