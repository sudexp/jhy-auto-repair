import { useMatch } from 'react-router-dom';

import { LogoSvg } from 'assets/svg';
import Link from 'components/Link';
import { bgColors, redColors } from 'theme/colors';

interface LogoProps {
  isOpen?: boolean;
}

const display = 'inline-block';

const Logo: React.FC<LogoProps> = ({ isOpen }: LogoProps) => {
  const isRootPath = !!useMatch('/');

  if (isOpen) {
    return <LogoSvg style={{ display, fill: redColors.dark }} />;
  }

  if (isRootPath) {
    return <LogoSvg style={{ display, fill: bgColors.light }} />;
  }

  return (
    <Link to='/'>
      <LogoSvg style={{ display, fill: redColors.dark }} />
    </Link>
  );
};

export default Logo;
