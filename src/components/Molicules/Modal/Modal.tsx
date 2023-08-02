'use client';

import { Box } from '@mui/material';

import * as React from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children }: React.PropsWithChildren) {
  const [mounted, setMounted] = React.useState(false);
  const portalDiv = document.getElementById('portal') as HTMLElement;

  React.useEffect(() => setMounted(true), []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return (
    mounted &&
    createPortal(
      <Box
        sx={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100vh',
          zIndex: '60',
        }}
      >
        {children}
      </Box>,
      portalDiv,
    )
  );
}
