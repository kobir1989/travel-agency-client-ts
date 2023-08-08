'use client';

import { FlightCard } from '@/components/Molicules/Cards';
import { Container } from '@mui/material';
import { useRouter } from 'next/navigation';

const FlightListSection = () => {
  const router = useRouter();
  const handleNavigate = (id: string) => {
    router.push(`/flight-booking?${id}`);
  };
  return (
    <Container maxWidth="lg" sx={{ mt: '3rem' }}>
      <FlightCard onNavigate={handleNavigate} />
    </Container>
  );
};

export default FlightListSection;
