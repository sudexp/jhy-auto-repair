import { useMatch } from 'react-router-dom';

import { LogoSvg } from 'assets/svg';
import Link from 'components/Link';

const Logo: React.FC = () => {
  const isRootPath = !!useMatch('/');

  if (isRootPath) {
    return <LogoSvg style={{ display: 'inline-block' }} />;
  }

  return (
    <Link to='/'>
      <LogoSvg style={{ display: 'inline-block' }} />
    </Link>
  );
};

export default Logo;
