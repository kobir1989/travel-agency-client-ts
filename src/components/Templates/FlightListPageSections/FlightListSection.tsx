'use client';

import SectionContainer from '@/components/Atoms/SectionContainer';
import { FlightCard } from '@/components/Molicules/Cards';
import { useRouter } from 'next/navigation';

const FlightListSection = () => {
  const router = useRouter();
  const handleNavigate = (id: string) => {
    router.push(`/flight-booking?${id}`);
  };
  return (
    <SectionContainer>
      <FlightCard onNavigate={handleNavigate} />
    </SectionContainer>
  );
};

export default FlightListSection;
