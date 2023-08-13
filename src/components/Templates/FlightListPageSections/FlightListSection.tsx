'use client';

import { Stack } from '@mui/material';
import { FlightCard } from '@/components/Molicules/Cards';
import { useGetFlightsQuery } from '@/redux/features/flight/flightApi';
import { useRouter } from 'next/navigation';
import SectionContainer from '@/components/Atoms/SectionContainer';

const FlightListSection = () => {
  const { data: flights, isError, isLoading } = useGetFlightsQuery();
  const router = useRouter();
  const handleNavigate = (id: string) => {
    router.push(`/flight-booking?${id}`);
  };
  return (
    <Stack gap={3}>
      {!isError &&
        !isLoading &&
        flights?.flight_list.map((flight) => (
          // eslint-disable-next-line no-underscore-dangle
          <SectionContainer key={flight?._id}>
            <FlightCard
              onNavigate={handleNavigate}
              airlinesName={flight?.airlinesName}
              arrivalAirportCode={flight?.arrivalAirportCode}
              departureAirportCode={flight?.departureAirportCode}
              arrivalDate={flight?.arrivalDate}
              departureDate={flight?.departureDate}
              flightNumber={flight?.flightNumber}
              duration={flight?.duration}
              price={flight?.price}
              flightClass={flight?.flightClass}
              airlinesLogo={flight?.airlinesLogo}
              // eslint-disable-next-line no-underscore-dangle
              id={flight?._id}
            />
          </SectionContainer>
        ))}
    </Stack>
  );
};

export default FlightListSection;
