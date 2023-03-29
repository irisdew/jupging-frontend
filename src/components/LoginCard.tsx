import { useState, useRef } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function LoginCard() {
  const [inputs, setInputs] = useState<any>();

  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const onClickLoginButton = () => {
    setInputs({
      email: emailInput.current?.value,
      password: passwordInput.current?.value,
    });
  };

  return (
    <Flex minH={'70vh'} align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} w={400} maxW={'lg'} py={12}>
        <Stack align={'left'}>
          <Heading fontSize={'3xl'}>이메일 로그인</Heading>
          <Text fontSize={'md'} color={'gray.600'}>
            가입하신 이메일 주소로 로그인하세요.
          </Text>
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')}>
          <Stack spacing={4}>
            <FormControl id="userId">
              <Input
                type="userId"
                placeholder="이메일"
                borderRadius={13}
                focusBorderColor={'#8CC63F'}
                ref={emailInput}
              />
            </FormControl>
            <FormControl id="password">
              <Input
                type="password"
                placeholder="비밀번호"
                borderRadius={13}
                focusBorderColor={'#8CC63F'}
                ref={passwordInput}
              />
            </FormControl>
            <Stack spacing={5}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                {/* <Checkbox>Remember me</Checkbox> */}
              </Stack>
              <Button
                bg={'#8CC63F'}
                color={'white'}
                _hover={{
                  bg: '#BAEB7A',
                }}
                borderRadius={13}
                onClick={onClickLoginButton}
              >
                로그인
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
