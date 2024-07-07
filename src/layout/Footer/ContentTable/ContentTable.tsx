import { Link as RouterLink } from 'react-router-dom';
import { Table, TableBody, TableContainer, TableRow, Typography } from '@mui/material';

import LeftTableCell from './LeftTableCell';
import RightTableCell from './RightTableCell/RightTableCell';
import CustomLink from './CustomLink';

const height = '24px';

const ContentTable: React.FC = () => {
  return (
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
                    display: 'flex',
                    alignItems: 'center',
                    height,
                    color: 'typography.light',
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
                <CustomLink href='tel:0452393591' height={height}>
                  0452393591
                </CustomLink>
              </Typography>
            </RightTableCell>
          </TableRow>
          <TableRow>
            <LeftTableCell>
              <Typography variant='p3'>Sähköposti:</Typography>
            </LeftTableCell>
            <RightTableCell>
              <Typography variant='p3'>
                <CustomLink href='mailto:huoltoykkoset@gmail.com' height={height}>
                  huoltoykkoset@gmail.com
                </CustomLink>
              </Typography>
            </RightTableCell>
          </TableRow>
          <TableRow>
            <LeftTableCell>
              <Typography variant='p3'>Laskut:</Typography>
            </LeftTableCell>
            <RightTableCell>
              <Typography variant='p3'>
                <CustomLink href='mailto:huoltoykkoset.laskutus@gmail.com' height={height}>
                  huoltoykkoset.laskutus@gmail.com
                </CustomLink>
              </Typography>
            </RightTableCell>
          </TableRow>
          <TableRow>
            <LeftTableCell>
              <Typography variant='p3'>Y-tunnus:</Typography>
            </LeftTableCell>
            <RightTableCell>
              <Typography variant='p3' sx={{ display: 'flex', alignItems: 'center', height }}>
                3422467-8
              </Typography>
            </RightTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContentTable;
