import { ReactNode } from 'react';
import { TableCell, Typography } from '@mui/material';

interface RightTableCellProps {
  children: ReactNode;
}

const RightTableCell: React.FC<RightTableCellProps> = ({ children }: RightTableCellProps) => (
  <TableCell sx={{ borderBottom: 'none', color: 'typography.light', p: 0, pl: 3 }}>
    <Typography variant='p3'>{children}</Typography>
  </TableCell>
);

export default RightTableCell;
