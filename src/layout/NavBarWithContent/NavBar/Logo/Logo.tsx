import { useMatch } from 'react-router-dom';

import { LogoSvg } from 'assets/svg';
import Link from 'components/Link';
import { greyColors, redColors } from 'theme/colors';

const Logo: React.FC = () => {
  const isRootPath = !!useMatch('/');

  if (isRootPath) {
    return <LogoSvg style={{ display: 'inline-block', fill: greyColors.light }} />;
  }

  return (
    <Link to='/'>
      <LogoSvg style={{ display: 'inline-block', fill: redColors.dark }} />
    </Link>
  );
};

export default Logo;
