import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function CreateEvent() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'3xl'}>줍깅 이벤트를 만들어보세요</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            우리강산 푸르게 <Link color={'green.400'}>푸르게</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="title">
              <FormLabel>이벤트명</FormLabel>
              <Input type="text" placeholder="이벤트명을 입력하세요" />
            </FormControl>
            <FormControl id="place">
              <FormLabel>장소</FormLabel>
              <Select placeholder="장소 선택" size="md">
                <option value="option1">뚝섬한강공원</option>
                <option value="option2">반포한강공원</option>
                <option value="option3">망원한강공원</option>
              </Select>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
