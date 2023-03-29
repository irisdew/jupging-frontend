import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select,
  Textarea,
} from '@chakra-ui/react';
import { useState, useRef } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function CreateEventForm() {
  const [showPassword, setShowPassword] = useState(false);
  const titleInput = useRef<HTMLInputElement>(null);

  return (
    <Flex minH={'70vh'} align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'4xl'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'3xl'} textAlign={'center'}>
            모임 만들기
          </Heading>
          {/* <Text fontSize={'lg'} color={'gray.600'}>
          to enjoy all of our cool features ✌️
        </Text> */}
        </Stack>
        <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} p={8}>
          <Stack spacing={4}>
            <FormControl id="title">
              <Input
                borderRadius={13}
                focusBorderColor={'#8CC63F'}
                type="text"
                placeholder="제목을 입력하세요"
                ref={titleInput}
              />
            </FormControl>
            <HStack>
              <Box>
                <FormControl id="date" isRequired>
                  <Input
                    borderRadius={13}
                    type="date"
                    focusBorderColor={'#8CC63F'}
                    placeholder="날짜"
                    ref={titleInput}
                  />
                </FormControl>
              </Box>
              <Box>
                <Select
                  borderRadius={13}
                  focusBorderColor={'#8CC63F'}
                  placeholder="장소 선택"
                  minW={400}
                >
                  <option value="option1">반포한강공원</option>
                  <option value="option2">망원한강공원</option>
                  <option value="option3">이촌한강공원</option>
                </Select>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <Input
                    borderRadius={13}
                    type="number"
                    placeholder="참여인원"
                    ref={titleInput}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <Textarea
                minH={150}
                borderRadius={13}
                fontSize="md"
                focusBorderColor={'#8CC63F'}
                placeholder="정확한 출발지와 출발시간을 꼭 기입해주세요!"
              />
            </FormControl>
            <Flex gap={3} justify={'flex-end'}>
              <Button
                bg={'gray.500'}
                color={'white'}
                _hover={{
                  bg: 'gray.300',
                }}
                borderRadius={13}
              >
                취소
              </Button>
              <Button
                bg={'#8CC63F'}
                color={'white'}
                _hover={{
                  bg: '#BAEB7A',
                }}
                borderRadius={13}
              >
                등록
              </Button>
            </Flex>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
