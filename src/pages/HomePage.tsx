import {
  Grid,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  useMediaQuery,
} from '@chakra-ui/react';
import Banner from '../components/Banner';
import EventCard from '../components/EventCard';

export default function Content() {
  const [isMobileWeb] = useMediaQuery('(width: 480px)');

  return (
    <Container maxW={'8xl'} p={0}>
      <Banner />
      <Stack px={20} py={10}>
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
