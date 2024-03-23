import { Link } from '@mui/material';

interface CustomLinkProps {
  href: string;
  height: string;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, height, children }: CustomLinkProps) => {
  return (
    <Link
      href={href}
      underline='hover'
      color='typography.light'
      sx={{
        display: 'flex',
        alignItems: 'center',
        height,
      }}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
