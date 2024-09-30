import React from 'react';
import {
    Button as MuiButton,
    ButtonProps as MuiButtonProps,
} from '@mui/material';

export interface ButtonProps extends MuiButtonProps {
    label: string;
    disableRipple?: boolean;
    borderRadius?: number | string;
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
    backgroundColor?: string;
  }
  
  export const Button = ({ label, disableRipple, borderRadius, textTransform, backgroundColor, ...rest }: ButtonProps) => (
    <MuiButton
      disableRipple={disableRipple}
      sx={{ borderRadius, textTransform, backgroundColor }}
      {...rest}
    >
      {label}
    </MuiButton>
  );

// import React from 'react';
// import Button from '@mui/material/Button';

// interface ButtonProps {
//   /**
//    * What background color to use
//    */
//   backgroundColor?: string;
//   /**
//      * Text color to use
//      */
//   textColor?: string;
//   /**
//    * Button contents
//    */
//   label: string;
//   /**
//    * Optional border radius
//    */
//   borderRadius: number;
//   /**
//    * Optional border color
//    */
//   borderColor: string;
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary?: boolean;
//   /**
//    * How large should the button be?
//    */
//   size?: 'small' | 'medium' | 'large';
//   /**
//    * Optional click handler
//    */
//   onClick?: () => void;
//   /**
//    * Should the button have ripple?
//    */
//   disableRipple?: boolean;
//   /**
//    * Optional text transform
//    */
//   textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
// }

// /**
//  * Primary UI component for user interaction
//  */
// export const MUIButton = ({
//   primary = false,
//   size = 'medium',
//   backgroundColor,
//   label ='Button',
//   onClick,
//   textColor,
//   borderColor,
//   borderRadius=8,
//   disableRipple=true,
//   textTransform = 'none',
// }: ButtonProps) => {
//   const variant = primary ? 'contained' : 'outlined';

//   return (
//     <Button
//       variant={variant}
//       size={size}
//       onClick={onClick}
//       style={{
//         backgroundColor: primary ? backgroundColor : undefined,
//         color: textColor,
//         borderColor: borderColor,
//         borderRadius: borderRadius,
//         textTransform,
//       }}
//       disableRipple={disableRipple}
//     >
//       {label}
//     </Button>
//   );
// };