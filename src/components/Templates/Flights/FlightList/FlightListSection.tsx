'use client';

import { Skeleton, Stack } from '@mui/material';
import { FlightCard } from '@/components/Molicules/Cards';
import { useGetFlightsQuery } from '@/redux/features/flight/flightApi';
import { useRouter } from 'next/navigation';
import SectionContainer from '@/components/Atoms/SectionContainer';
import { v4 as uuidv4 } from 'uuid';
import PaginationButtons from '@/components/Molicules/PaginationButtons';

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
              id={flight?._id}
            />
          </SectionContainer>
        ))}
      {/* Pagination Buttons */}
      {!isLoading && !isError && <PaginationButtons count={10} />}
      {/* Loading State */}
      {!isError && isLoading && (
        <Stack gap={2}>
          {Array.from({ length: 3 })
            .fill(0)
            .map(() => (
              <Skeleton
                key={uuidv4()}
                width="100%"
                height={230}
                animation="wave"
                variant="rounded"
              />
            ))}
        </Stack>
      )}
    </Stack>
  );
};

export default FlightListSection;
