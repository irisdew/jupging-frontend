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

export default function Content() {
  const [isMobileWeb] = useMediaQuery('(width: 480px)');

  return (
    <Container maxW={'8xl'} p={0}>
      <Banner />
      <Stack px={20} py={10}>
        <Heading fontSize={'2xl'} mb={5}>
          나의 모임 관리
        </Heading>
        <Grid
          templateAreas={`"header header nav"
                  "main footer nav"`}
          gridTemplateRows={'repeat(2, 1fr)'}
          gridTemplateColumns={'2fr 2fr 1fr'}
          h="300px"
          gap={5}
          fontWeight="bold"
        >
          <GridItem
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow="lg"
            rounded="xl"
            px={5}
            area={'header'}
          >
            Heading
          </GridItem>
          <GridItem
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'xl'}
            rounded="xl"
            pl="2"
            area={'nav'}
          >
            Nav
          </GridItem>
          <GridItem
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'xl'}
            rounded="xl"
            pl="2"
            area={'main'}
          >
            Main
          </GridItem>
          <GridItem
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'xl'}
            rounded="xl"
            pl="2"
            area={'footer'}
          >
            Footer
          </GridItem>
        </Grid>
      </Stack>
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
