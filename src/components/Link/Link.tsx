import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

interface LinkProps extends MuiLinkProps {
  to: string;
}

const Link: React.FC<LinkProps> = ({ to, underline = 'hover', sx, children }: LinkProps) => {
  return (
    <MuiLink component={RouterLink} to={to} underline={underline} sx={{ ...sx }}>
      {children}
    </MuiLink>
  );
};

export default Link;
