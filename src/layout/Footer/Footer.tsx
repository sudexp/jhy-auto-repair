import { ReactNode } from 'react';
import { useMatch, Link as RouterLink } from 'react-router-dom';
import { Box, Link, Table, TableBody, TableCell, TableContainer, TableRow, Typography, useTheme } from '@mui/material';

import LayoutContainer from 'components/LayoutContainer';
import Logo from 'layout/NavBarWithContent/NavBar/Logo';

import { getBgColor } from './utils';

interface TableCellProps {
  children: ReactNode;
}

const color = 'typography.light';

const LeftTableCell: React.FC<TableCellProps> = ({ children }: TableCellProps) => (
  <TableCell sx={{ borderBottom: 'none', color, p: 0, opacity: 0.85 }}>
    <Typography variant='p3'>{children}</Typography>
  </TableCell>
);

const RightTableCell: React.FC<TableCellProps> = ({ children }: TableCellProps) => (
  <TableCell sx={{ borderBottom: 'none', color, p: 0, pl: 3 }}>
    <Typography variant='p3'>{children}</Typography>
  </TableCell>
);

const Footer: React.FC = () => {
  const isRootPath = !!useMatch('/');
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', flexShrink: 0 }}>
      <LayoutContainer sx={{ py: { xs: 2, md: 4 }, bgcolor: getBgColor(isRootPath) }}>
        <Box
          display='grid'
          gridTemplateColumns='repeat(2, 1fr)'
          gap={3}
          sx={{
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
              gridTemplateColumns: 'repeat(1,  1fr)',
            },
          }}
        >
          <Box gridColumn='span 1'>
            <Logo />
          </Box>
          <Box gridColumn='span 1'>
            <TableContainer>
              <Table size='small' aria-label='contact-information' sx={{ width: 'auto' }}>
                <TableBody>
                  <TableRow>
                    <LeftTableCell>
                      <Typography variant='p3'>Osoite:</Typography>
                    </LeftTableCell>
                    <RightTableCell>
                      <Typography
                        variant='p3'
                        sx={{
                          '& a': {
                            color,
                            textDecoration: 'none',
                            '&:hover': {
                              textDecoration: 'underline',
                            },
                          },
                        }}
                      >
                        <RouterLink to='/contacts'>Kuormaajantie 6, 40320, Jyväskylä</RouterLink>
                      </Typography>
                    </RightTableCell>
                  </TableRow>
                  <TableRow>
                    <LeftTableCell>
                      <Typography variant='p3'>Puhelinnumero:</Typography>
                    </LeftTableCell>
                    <RightTableCell>
                      <Typography variant='p3'>
                        <Link href='tel:0452393591' underline='hover' color={color}>
                          0452393591
                        </Link>
                      </Typography>
                    </RightTableCell>
                  </TableRow>
                  <TableRow>
                    <LeftTableCell>
                      <Typography variant='p3'>Sähköposti:</Typography>
                    </LeftTableCell>
                    <RightTableCell>
                      <Typography variant='p3'>
                        <Link href='mailto:huoltoykkoset@gmail.com' underline='hover' color={color}>
                          huoltoykkoset@gmail.com
                        </Link>
                      </Typography>
                    </RightTableCell>
                  </TableRow>
                  <TableRow>
                    <LeftTableCell>
                      <Typography variant='p3'>Laskut:</Typography>
                    </LeftTableCell>
                    <RightTableCell>
                      <Typography variant='p3'>
                        <Link href='mailto:huoltoykkoset@gmail.com' underline='hover' color={color}>
                          huoltoykkoset.laskutus@gmail.com
                        </Link>
                      </Typography>
                    </RightTableCell>
                  </TableRow>
                  <TableRow>
                    <LeftTableCell>
                      <Typography variant='p3'>Y-tunnus:</Typography>
                    </LeftTableCell>
                    <RightTableCell>
                      <Typography variant='p3'>3422467-8</Typography>
                    </RightTableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </LayoutContainer>
    </Box>
  );
};

export default Footer;
