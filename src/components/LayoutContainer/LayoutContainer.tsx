import { Container, ContainerProps } from '@mui/material';

const LayoutContainer: React.FC<ContainerProps> = ({ sx, children }: ContainerProps) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        ...sx,
        px: { xs: 1.5, md: 4.5, lg: 19.5, xl: 25.5 },
      }}
    >
      {children}
    </Container>
  );
};

export default LayoutContainer;
