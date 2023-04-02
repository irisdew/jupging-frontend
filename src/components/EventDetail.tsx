import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputLeftElement,
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
  Icon,
  Avatar,
} from '@chakra-ui/react';
import { useState, useRef } from 'react';
import { CalendarIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { dummyAllEventData } from '../constant/constant';
import { useNavigate, useParams } from 'react-router-dom';

export default function EventDetail() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [inputs, setInputs] = useState<any>();

  const titleInput = useRef<HTMLInputElement>(null);
  const dateInput = useRef<HTMLInputElement>(null);
  const placeInput = useRef<HTMLSelectElement>(null);
  const peopleInput = useRef<HTMLInputElement>(null);
  const detailInput = useRef<HTMLTextAreaElement>(null);

  const navigate = useNavigate();
  const { eventId } = useParams();

  const eventData = dummyAllEventData[Number(eventId) - 1];

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
        <Stack mx={'auto'} minW={'2xl'} maxW={'4xl'} py={8} px={6}>
          <Stack my={3} direction={'row'} spacing={4} align={'center'}>
            <Avatar
              size={'sm'}
              src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            />
            <Text fontSize={'lg'} fontWeight={600} mr={5}>
              {eventData.author.nickname}
            </Text>
            <Text fontSize={'md'} color={'gray.500'}>
              {eventData.author.age}세
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            pb={8}
          >
            <Stack spacing={4}>
              <Input
                borderRadius={13}
                type="text"
                readOnly
                value={eventData.title}
                borderColor={'#9E9E9E'}
                focusBorderColor={'#9E9E9E'}
              />
              <HStack>
                <Box>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CalendarIcon color="#000000" />}
                    />
                    <Input
                      borderRadius={13}
                      borderColor={'#9E9E9E'}
                      focusBorderColor={'#9E9E9E'}
                      type="text"
                      readOnly
                      value={eventData.date}
                    />
                  </InputGroup>
                </Box>
                <Box w={'full'}>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={
                        <Icon boxSize={6} viewBox="0 0 30 30" fill="none">
                          <path
                            d="M15 8.125C15.8288 8.125 16.6237 8.45424 17.2097 9.04029C17.7958 9.62634 18.125 10.4212 18.125 11.25C18.125 11.6604 18.0442 12.0667 17.8871 12.4459C17.7301 12.825 17.4999 13.1695 17.2097 13.4597C16.9195 13.7499 16.575 13.9801 16.1959 14.1371C15.8167 14.2942 15.4104 14.375 15 14.375C14.1712 14.375 13.3763 14.0458 12.7903 13.4597C12.2042 12.8737 11.875 12.0788 11.875 11.25C11.875 10.4212 12.2042 9.62634 12.7903 9.04029C13.3763 8.45424 14.1712 8.125 15 8.125ZM15 2.5C17.3206 2.5 19.5462 3.42187 21.1872 5.06282C22.8281 6.70376 23.75 8.92936 23.75 11.25C23.75 17.8125 15 27.5 15 27.5C15 27.5 6.25 17.8125 6.25 11.25C6.25 8.92936 7.17187 6.70376 8.81282 5.06282C10.4538 3.42187 12.6794 2.5 15 2.5ZM15 5C13.3424 5 11.7527 5.65848 10.5806 6.83058C9.40848 8.00269 8.75 9.5924 8.75 11.25C8.75 12.5 8.75 15 15 23.3875C21.25 15 21.25 12.5 21.25 11.25C21.25 9.5924 20.5915 8.00269 19.4194 6.83058C18.2473 5.65848 16.6576 5 15 5Z"
                            fill="black"
                          />
                        </Icon>
                      }
                    />
                    <Input
                      borderRadius={13}
                      borderColor={'#9E9E9E'}
                      focusBorderColor={'#9E9E9E'}
                      type="text"
                      readOnly
                      value={eventData.place}
                    />
                  </InputGroup>
                </Box>
              </HStack>
              <FormControl id="detail" isRequired>
                <Textarea
                  readOnly
                  minH={150}
                  borderRadius={13}
                  borderColor={'#9E9E9E'}
                  focusBorderColor={'#9E9E9E'}
                  fontSize="md"
                  value={eventData.detail}
                />
              </FormControl>
              <Flex gap={3} justify={'center'}>
                <Button
                  px={10}
                  py={6}
                  bg={'#8CC63F'}
                  color={'white'}
                  _hover={{
                    bg: '#BAEB7A',
                  }}
                  borderRadius={13}
                  onClick={onClickSubmitButton}
                >
                  신청하기 ( 1 / 5 )
                </Button>
              </Flex>
              {/* <Flex gap={3} justify={'flex-end'}>
                <Button
                  bg={'red.400'}
                  color={'white'}
                  _hover={{
                    bg: 'red.200',
                  }}
                  borderRadius={13}
                  onClick={onClickCancelButton}
                >
                  삭제
                </Button>
              </Flex> */}
            </Stack>
          </Box>
        </Stack>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody>
            노쇼 시 서비스 사용에 제한이 생길 수 있습니다. <br />꼭 신중히
            신청해 주세요!
          </ModalBody>
          <ModalFooter>
            <Button
              bg={'#8CC63F'}
              color={'white'}
              _hover={{
                bg: '#BAEB7A',
              }}
              mr={3}
              borderRadius={13}
              onClick={() => {
                onClose();
                navigate('/');
              }}
            >
              네, 참석하겠습니다.
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
