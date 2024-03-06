import { Link as RouterLink } from 'react-router-dom';
import { Link, Table, TableBody, TableContainer, TableRow, Typography } from '@mui/material';

import LeftTableCell from './LeftTableCell';
import RightTableCell from './RightTableCell/RightTableCell';

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
                <Link href='tel:0452393591' underline='hover' color='typography.light'>
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
                <Link href='mailto:huoltoykkoset@gmail.com' underline='hover' color='typography.light'>
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
                <Link href='mailto:huoltoykkoset@gmail.com' underline='hover' color='typography.light'>
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
  );
};

export default ContentTable;
