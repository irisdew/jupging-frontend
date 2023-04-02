import {
  Grid,
  GridItem,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  useMediaQuery,
  useColorModeValue,
} from '@chakra-ui/react';
import Banner from '../components/Banner';
import EventCard from '../components/EventCard';
import MyEventAdmin from '../components/MyEventAdmin';
import { dummyAllEventData } from '../constant/constant';

export default function Content() {
  const [isMobileWeb] = useMediaQuery('(width: 480px)');

  return (
    <Container maxW={'8xl'} p={0}>
      <Banner />
      <MyEventAdmin />
      <Stack px={20} py={5}>
        <Heading fontSize={'2xl'}>모임 둘러보기</Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={10}>
          {dummyAllEventData
            .reverse()
            .slice(7)
            .map((eventData) => (
              <EventCard eventData={eventData} />
            ))}
        </Grid>
        {/* {!isMobileWeb ? (
          <Grid templateColumns="repeat(3, 1fr)" gap={10}>
            {dummyAllEventData
              .reverse()
              .slice(2)
              .map((eventData) => (
                <EventCard eventData={eventData} />
              ))}
          </Grid>
        ) : null} */}
      </Stack>
    </Container>
  );
}
