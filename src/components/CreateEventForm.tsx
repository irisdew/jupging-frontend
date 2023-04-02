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
  useDisclosure,
  Link,
  Select,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { useState, useRef } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { placeData } from '../constant/constant';

export default function CreateEventForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [inputs, setInputs] = useState<any>();

  const titleInput = useRef<HTMLInputElement>(null);
  const dateInput = useRef<HTMLInputElement>(null);
  const placeInput = useRef<HTMLSelectElement>(null);
  const peopleInput = useRef<HTMLInputElement>(null);
  const detailInput = useRef<HTMLTextAreaElement>(null);

  const onClickSubmitButton = () => {
    setInputs({
      title: titleInput.current?.value,
      date: dateInput.current?.value,
      place: placeInput.current?.value,
      people: peopleInput.current?.value,
      detail: detailInput.current?.value,
    });
    // post api
    // alert
    onOpen();
  };
  const onClickCancelButton = () => {};

  return (
    <>
      <Flex minH={'70vh'} align={'center'} justify={'center'}>
        <Stack spacing={8} mx={'auto'} maxW={'4xl'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'3xl'} textAlign={'center'}>
              모임 만들기
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            pb={8}
          >
            <Stack spacing={4}>
              <FormControl id="title" isRequired>
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
                      ref={dateInput}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <Select
                    borderRadius={13}
                    focusBorderColor={'#8CC63F'}
                    placeholder="장소 선택"
                    minW={400}
                    ref={placeInput}
                  >
                    {placeData.map((place) => (
                      <option value={place.name}>{place.name}</option>
                    ))}
                  </Select>
                </Box>
                <Box>
                  <FormControl id="people">
                    <Input
                      borderRadius={13}
                      type="number"
                      placeholder="참여인원"
                      ref={peopleInput}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="detail" isRequired>
                <Textarea
                  minH={150}
                  borderRadius={13}
                  fontSize="md"
                  focusBorderColor={'#8CC63F'}
                  placeholder="정확한 출발지와 출발시간을 꼭 기입해주세요!"
                  ref={detailInput}
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
                  onClick={onClickCancelButton}
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
                  onClick={onClickSubmitButton}
                >
                  등록
                </Button>
              </Flex>
            </Stack>
          </Box>
        </Stack>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody>모임이 등록되었습니다</ModalBody>
          <ModalFooter>
            <Button
              bg={'#8CC63F'}
              color={'white'}
              _hover={{
                bg: '#BAEB7A',
              }}
              mr={3}
              borderRadius={13}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
