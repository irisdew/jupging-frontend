import { useState, useRef } from 'react';
import {
  Flex,
  Box,
  FormControl,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  FormLabel,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';

export default function SignupCard() {
  const [inputs, setInputs] = useState<any>();

  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const passwordConfirmInput = useRef<HTMLInputElement>(null);
  const nickNameInput = useRef<HTMLInputElement>(null);
  const ageInput = useRef<HTMLInputElement>(null);
  const kakaoIdInput = useRef<HTMLInputElement>(null);

  const onClickLoginButton = () => {
    setInputs({
      email: emailInput.current?.value,
      password: passwordInput.current?.value,
    });
  };

  return (
    <Flex minH={'70vh'} align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} w={400} maxW={'lg'} py={12}>
        <Stack align={'center'}>
          <Heading fontSize={'3xl'}>회원가입</Heading>
          {/* <Text fontSize={'md'} color={'gray.600'}>
            가입하신 이메일 주소로 로그인하세요.
          </Text> */}
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>아이디</FormLabel>
              <Input
                type="text"
                placeholder="이메일을 입력해주세요"
                borderRadius={13}
                focusBorderColor={'#8CC63F'}
                ref={emailInput}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>비밀번호</FormLabel>
              <Input
                type="password"
                borderRadius={13}
                focusBorderColor={'#8CC63F'}
                ref={passwordInput}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>비밀번호 재확인</FormLabel>
              <Input
                type="password"
                borderRadius={13}
                focusBorderColor={'#8CC63F'}
                ref={passwordConfirmInput}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>닉네임</FormLabel>
              <Input
                type="text"
                borderRadius={13}
                focusBorderColor={'#8CC63F'}
                placeholder="활동 닉네임을 입력하세요"
                ref={nickNameInput}
              />
            </FormControl>
            <FormControl id="gender">
              <FormLabel>성별</FormLabel>
              <RadioGroup defaultValue="2">
                <Stack spacing={5} direction="row">
                  <Radio colorScheme="green" value="1">
                    남자
                  </Radio>
                  <Radio colorScheme="green" value="2">
                    여자
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            <FormControl id="age">
              <FormLabel>나이</FormLabel>
              <Input
                type="number"
                borderRadius={13}
                focusBorderColor={'#8CC63F'}
                placeholder="만 나이로 기입해주세요"
                ref={ageInput}
              />
            </FormControl>
            <FormControl id="nickname">
              <FormLabel>카카오톡 아이디</FormLabel>
              <Input
                type="text"
                borderRadius={13}
                focusBorderColor={'#8CC63F'}
                placeholder="카카오톡 아이디를 입력하세요"
                ref={kakaoIdInput}
              />
            </FormControl>
            {/* <FormControl id="phoneNumber">
              <FormLabel>휴대전화</FormLabel>
              <Input
                type="number"
                borderRadius={13}
                focusBorderColor={'#8CC63F'}
                placeholder="전화번호를 입력하세요"
                ref={phoneNumberInput}
              />
            </FormControl> */}
            {/* <FormControl id="phoneNumber">
              <FormLabel>휴대전화</FormLabel>
              <Input
                type="number"
                borderRadius={13}
                focusBorderColor={'#8CC63F'}
                placeholder="전화번호를 입력하세요"
                ref={phoneNumberInput}
              />
            </FormControl> */}
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
