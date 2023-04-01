import {
  Grid,
  GridItem,
  Heading,
  Stack,
  useColorModeValue,
  Text,
  Flex,
  Icon,
  Box,
  Center,
} from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import { dummyAllEventData } from '../constant/constant';
import { useNavigate } from 'react-router-dom';

export default function MyEventAdmin() {
  const event1 = dummyAllEventData[0];
  const event2 = dummyAllEventData[1];
  const event3 = dummyAllEventData[2];

  const navigate = useNavigate();

  return (
    <Stack px={20} py={10} mb={10}>
      <Heading fontSize={'2xl'} mb={5}>
        나의 모임 관리
      </Heading>
      <Grid
        cursor={'pointer'}
        templateAreas={`"header header nav"
              "main footer nav"`}
        gridTemplateRows={'repeat(2, 1fr)'}
        gridTemplateColumns={'2fr 2fr 1fr'}
        h="200px"
        gap={5}
        fontWeight="bold"
      >
        <GridItem
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow="2xl"
          rounded="xl"
          p={5}
          area={'header'}
          onClick={() => {
            navigate(`/event/${event1.id}`);
          }}
        >
          <Flex>{event1.title}</Flex>
          <Flex alignContent={'end'}>
            <Flex alignContent={'end'} align="end" mr={6} justify="end">
              <CalendarIcon mr={2} />
              <Heading
                fontSize={'sm'}
                fontFamily={'body'}
                justifyContent="center"
              >
                {event1.date}
              </Heading>
            </Flex>
            <Flex alignContent={'end'} pt={2} px={2} align="end">
              <Icon boxSize={5} viewBox="5 0 30 30" fill="none">
                <path
                  d="M15 8.125C15.8288 8.125 16.6237 8.45424 17.2097 9.04029C17.7958 9.62634 18.125 10.4212 18.125 11.25C18.125 11.6604 18.0442 12.0667 17.8871 12.4459C17.7301 12.825 17.4999 13.1695 17.2097 13.4597C16.9195 13.7499 16.575 13.9801 16.1959 14.1371C15.8167 14.2942 15.4104 14.375 15 14.375C14.1712 14.375 13.3763 14.0458 12.7903 13.4597C12.2042 12.8737 11.875 12.0788 11.875 11.25C11.875 10.4212 12.2042 9.62634 12.7903 9.04029C13.3763 8.45424 14.1712 8.125 15 8.125ZM15 2.5C17.3206 2.5 19.5462 3.42187 21.1872 5.06282C22.8281 6.70376 23.75 8.92936 23.75 11.25C23.75 17.8125 15 27.5 15 27.5C15 27.5 6.25 17.8125 6.25 11.25C6.25 8.92936 7.17187 6.70376 8.81282 5.06282C10.4538 3.42187 12.6794 2.5 15 2.5ZM15 5C13.3424 5 11.7527 5.65848 10.5806 6.83058C9.40848 8.00269 8.75 9.5924 8.75 11.25C8.75 12.5 8.75 15 15 23.3875C21.25 15 21.25 12.5 21.25 11.25C21.25 9.5924 20.5915 8.00269 19.4194 6.83058C18.2473 5.65848 16.6576 5 15 5Z"
                  fill="black"
                />
              </Icon>
              <Heading
                fontSize={'sm'}
                fontFamily={'body'}
                justifyContent="center"
              >
                {event1.place}
              </Heading>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded="xl"
          area={'nav'}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          onClick={() => {
            navigate('/create');
          }}
        >
          <Center>
            <Icon
              boxSize={100}
              viewBox="0 0 86 64"
              fill="none"
              alignContent={'center'}
            >
              <path
                d="M60.2 54.9409V63.3933H0V54.9409C0 54.9409 0 38.036 30.1 38.036C60.2 38.036 60.2 54.9409 60.2 54.9409ZM45.15 14.7919C45.15 11.8664 44.2673 9.00658 42.6136 6.5741C40.9599 4.14161 38.6094 2.24572 35.8594 1.12617C33.1094 0.00662526 30.0833 -0.2863 27.1639 0.284441C24.2445 0.855183 21.5628 2.26396 19.458 4.33261C17.3533 6.40127 15.9199 9.0369 15.3392 11.9062C14.7585 14.7755 15.0565 17.7496 16.1956 20.4525C17.3347 23.1553 19.2637 25.4655 21.7387 27.0908C24.2136 28.7161 27.1234 29.5836 30.1 29.5836C34.0915 29.5836 37.9195 28.0252 40.742 25.2512C43.5644 22.4773 45.15 18.7149 45.15 14.7919ZM59.942 38.036C62.5854 40.0466 64.7484 42.6022 66.2788 45.5228C67.8092 48.4434 68.6698 51.6582 68.8 54.9409V63.3933H86V54.9409C86 54.9409 86 39.5997 59.942 38.036ZM55.9 0.00022221C52.9403 -0.0159756 50.0456 0.853728 47.601 2.49368C50.213 6.08061 51.6174 10.381 51.6174 14.7919C51.6174 19.2029 50.213 23.5032 47.601 27.0902C50.0456 28.7301 52.9403 29.5998 55.9 29.5836C59.8915 29.5836 63.7195 28.0252 66.542 25.2512C69.3644 22.4773 70.95 18.7149 70.95 14.7919C70.95 10.8689 69.3644 7.1066 66.542 4.33261C63.7195 1.55863 59.8915 0.00022221 55.9 0.00022221Z"
                fill="#D9D9D9"
              />
            </Icon>
          </Center>
          <Heading fontSize={'md'} fontFamily={'body'} textAlign="center">
            모임 만들기
          </Heading>
        </GridItem>
        <GridItem
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'xl'}
          rounded="xl"
          area={'main'}
          p={5}
          onClick={() => {
            navigate(`/event/${event2.id}`);
          }}
        >
          <Flex mb={3}>{event2.title}</Flex>
          <Flex alignContent={'end'} align="end" mx={1} mb={1}>
            <CalendarIcon mr={2} />
            <Heading
              fontSize={'sm'}
              fontFamily={'body'}
              justifyContent="center"
            >
              {event2.date}
            </Heading>
          </Flex>
          <Flex alignContent={'end'} pt={2} mx={1} align="end">
            <Icon boxSize={5} viewBox="5 0 30 30" fill="none">
              <path
                d="M15 8.125C15.8288 8.125 16.6237 8.45424 17.2097 9.04029C17.7958 9.62634 18.125 10.4212 18.125 11.25C18.125 11.6604 18.0442 12.0667 17.8871 12.4459C17.7301 12.825 17.4999 13.1695 17.2097 13.4597C16.9195 13.7499 16.575 13.9801 16.1959 14.1371C15.8167 14.2942 15.4104 14.375 15 14.375C14.1712 14.375 13.3763 14.0458 12.7903 13.4597C12.2042 12.8737 11.875 12.0788 11.875 11.25C11.875 10.4212 12.2042 9.62634 12.7903 9.04029C13.3763 8.45424 14.1712 8.125 15 8.125ZM15 2.5C17.3206 2.5 19.5462 3.42187 21.1872 5.06282C22.8281 6.70376 23.75 8.92936 23.75 11.25C23.75 17.8125 15 27.5 15 27.5C15 27.5 6.25 17.8125 6.25 11.25C6.25 8.92936 7.17187 6.70376 8.81282 5.06282C10.4538 3.42187 12.6794 2.5 15 2.5ZM15 5C13.3424 5 11.7527 5.65848 10.5806 6.83058C9.40848 8.00269 8.75 9.5924 8.75 11.25C8.75 12.5 8.75 15 15 23.3875C21.25 15 21.25 12.5 21.25 11.25C21.25 9.5924 20.5915 8.00269 19.4194 6.83058C18.2473 5.65848 16.6576 5 15 5Z"
                fill="black"
              />
            </Icon>
            <Heading
              fontSize={'sm'}
              fontFamily={'body'}
              justifyContent="center"
            >
              {event2.place}
            </Heading>
          </Flex>
        </GridItem>
        <GridItem
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'xl'}
          rounded="xl"
          area={'footer'}
          p={5}
          onClick={() => {
            navigate(`/event/${event3.id}`);
          }}
        >
          <Flex mb={3}>{event3.title}</Flex>
          <Flex alignContent={'end'} align="end" mx={1} mb={1}>
            <CalendarIcon mr={2} />
            <Heading
              fontSize={'sm'}
              fontFamily={'body'}
              justifyContent="center"
            >
              {event3.date}
            </Heading>
          </Flex>
          <Flex alignContent={'end'} pt={2} mx={1} align="end">
            <Icon boxSize={5} viewBox="5 0 30 30" fill="none">
              <path
                d="M15 8.125C15.8288 8.125 16.6237 8.45424 17.2097 9.04029C17.7958 9.62634 18.125 10.4212 18.125 11.25C18.125 11.6604 18.0442 12.0667 17.8871 12.4459C17.7301 12.825 17.4999 13.1695 17.2097 13.4597C16.9195 13.7499 16.575 13.9801 16.1959 14.1371C15.8167 14.2942 15.4104 14.375 15 14.375C14.1712 14.375 13.3763 14.0458 12.7903 13.4597C12.2042 12.8737 11.875 12.0788 11.875 11.25C11.875 10.4212 12.2042 9.62634 12.7903 9.04029C13.3763 8.45424 14.1712 8.125 15 8.125ZM15 2.5C17.3206 2.5 19.5462 3.42187 21.1872 5.06282C22.8281 6.70376 23.75 8.92936 23.75 11.25C23.75 17.8125 15 27.5 15 27.5C15 27.5 6.25 17.8125 6.25 11.25C6.25 8.92936 7.17187 6.70376 8.81282 5.06282C10.4538 3.42187 12.6794 2.5 15 2.5ZM15 5C13.3424 5 11.7527 5.65848 10.5806 6.83058C9.40848 8.00269 8.75 9.5924 8.75 11.25C8.75 12.5 8.75 15 15 23.3875C21.25 15 21.25 12.5 21.25 11.25C21.25 9.5924 20.5915 8.00269 19.4194 6.83058C18.2473 5.65848 16.6576 5 15 5Z"
                fill="black"
              />
            </Icon>
            <Heading
              fontSize={'sm'}
              fontFamily={'body'}
              justifyContent="center"
            >
              {event3.place}
            </Heading>
          </Flex>
        </GridItem>
      </Grid>
    </Stack>
  );
}
