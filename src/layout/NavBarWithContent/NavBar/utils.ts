import { greyColors } from 'theme/colors';

export const getBorderBottom = (isRootPath: boolean) => (isRootPath ? 'none' : `1px solid ${greyColors.light}`);
