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

export default function Content() {
  const [isMobileWeb] = useMediaQuery('(width: 480px)');

  return (
    <Container maxW={'8xl'} p={0}>
      <Banner />
      <MyEventAdmin />
      <Stack px={20} py={5}>
        <Heading fontSize={'2xl'}>모임 둘러보기</Heading>
        {!isMobileWeb ? (
          <Grid templateColumns="repeat(3, 1fr)" gap={10}>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </Grid>
        ) : null}
      </Stack>
    </Container>
  );
}
