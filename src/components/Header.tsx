import { ReactElement, ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { Link as ReactLink } from 'react-router-dom';
import jupgingLogo from '/jupging.svg';

const Links = [
  { text: '로그인', path: '/login' },
  { text: '회원가입', path: '/signup' },
];

type LinkType = {
  text: string;
  path: string;
};

const NavLink = ({ text, path }: LinkType) => (
  <Link
    as={ReactLink}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      textColor: useColorModeValue('green.500', 'gray.700'),
    }}
    to={path}
  >
    {text}
  </Link>
);

export default function Header({ isLogined }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue('white.100', 'white.900')}
        px={20}
        pt={18}
        pb={3}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <ReactLink to="/">
              <Image
                boxSize="100px"
                src={jupgingLogo}
                className="logo"
                alt="줍깅 로고"
              />
            </ReactLink>
          </HStack>
          {isLogined ? (
            <Flex alignItems={'center'}>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}
              >
                {Links.map((link: LinkType) => (
                  <NavLink key={link.text} text={link.text} path={link.path} />
                ))}
              </HStack>
            </Flex>
          ) : null}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.text} text={link.text} path={link.path} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
