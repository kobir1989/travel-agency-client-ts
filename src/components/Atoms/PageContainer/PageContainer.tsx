import { PageContainerProps } from '@/components/Atoms/PageContainer/types';
import { Container } from '@mui/material';

const PageContainer = ({ children, isFlex }: PageContainerProps) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: '8rem',
        mb: '5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: isFlex ? 3 : 0,
      }}
    >
      {children}
    </Container>
  );
};

export default PageContainer;
