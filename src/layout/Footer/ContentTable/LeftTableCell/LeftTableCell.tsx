import { ReactNode } from 'react';
import { TableCell, Typography } from '@mui/material';

interface LeftTableCellProps {
  children: ReactNode;
}

const LeftTableCell: React.FC<LeftTableCellProps> = ({ children }: LeftTableCellProps) => (
  <TableCell sx={{ borderBottom: 'none', color: 'typography.light', p: 0, opacity: 0.85 }}>
    <Typography variant='p3'>{children}</Typography>
  </TableCell>
);

export default LeftTableCell;
