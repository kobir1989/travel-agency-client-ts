'use client';

import { ChildrenType } from '@/types/common-type';
import { Box } from '@mui/material';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

export default function Modal({ children }: ChildrenType) {
  const [mounted, setMounted] = useState<boolean>(false);
  const portalDiv = document.getElementById('portal') as HTMLElement;

  useEffect(() => setMounted(true), []);
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
