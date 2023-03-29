import {
  Box,
  Flex,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Icon,
  Image,
} from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';

export default function EventCard() {
  const dummyData = {
    author: {
      nickname: '줍줍이',
      age: 26,
    },
    title: '한강에서 같이 줍깅해요!',
    date: '2023.03.28',
    place: '반포 한강공원',
  };

  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'xl'}
        rounded={'xl'}
        p={6}
        overflow={'hidden'}
      >
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}
        >
          <Image
            src="https://i.insider.com/60e5ba5e85fa170018522781?width=700"
            objectFit={'cover'}
            h={'210px'}
            w={'full'}
          />
        </Box>
        <Stack my={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
          />
          <Flex alignContent={'end'}>
            <Text fontSize={'lg'} fontWeight={600} mr={2}>
              {dummyData.author.nickname}
            </Text>
            <Text>{dummyData.author.age}세</Text>
          </Flex>
        </Stack>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
            mb={2}
          >
            {dummyData.title}
          </Heading>
          <Flex alignContent={'end'} px={2}>
            <CalendarIcon mr={2} />
            <Heading
              fontSize={'md'}
              fontFamily={'body'}
              justifyContent="center"
            >
              {dummyData.date}
            </Heading>
          </Flex>
          <Flex alignContent={'end'} pt={2} px={2} align="e nd">
            <Icon boxSize={6} viewBox="5 0 30 30" fill="none">
              <path
                d="M15 8.125C15.8288 8.125 16.6237 8.45424 17.2097 9.04029C17.7958 9.62634 18.125 10.4212 18.125 11.25C18.125 11.6604 18.0442 12.0667 17.8871 12.4459C17.7301 12.825 17.4999 13.1695 17.2097 13.4597C16.9195 13.7499 16.575 13.9801 16.1959 14.1371C15.8167 14.2942 15.4104 14.375 15 14.375C14.1712 14.375 13.3763 14.0458 12.7903 13.4597C12.2042 12.8737 11.875 12.0788 11.875 11.25C11.875 10.4212 12.2042 9.62634 12.7903 9.04029C13.3763 8.45424 14.1712 8.125 15 8.125ZM15 2.5C17.3206 2.5 19.5462 3.42187 21.1872 5.06282C22.8281 6.70376 23.75 8.92936 23.75 11.25C23.75 17.8125 15 27.5 15 27.5C15 27.5 6.25 17.8125 6.25 11.25C6.25 8.92936 7.17187 6.70376 8.81282 5.06282C10.4538 3.42187 12.6794 2.5 15 2.5ZM15 5C13.3424 5 11.7527 5.65848 10.5806 6.83058C9.40848 8.00269 8.75 9.5924 8.75 11.25C8.75 12.5 8.75 15 15 23.3875C21.25 15 21.25 12.5 21.25 11.25C21.25 9.5924 20.5915 8.00269 19.4194 6.83058C18.2473 5.65848 16.6576 5 15 5Z"
                fill="black"
              />
            </Icon>
            <Box>
              <Heading
                fontSize={'md'}
                fontFamily={'body'}
                justifyContent="center"
              >
                {dummyData.place}
              </Heading>
              <Text>서울 서초구 신반포로11길 40</Text>
            </Box>
          </Flex>
        </Stack>
      </Box>
    </Center>
  );
}
