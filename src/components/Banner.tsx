import React from 'react';
import { Stack, Flex } from '@chakra-ui/react';

type Props = {};

const Banner = (props: Props) => {
  return (
    <Stack textAlign={'center'}>
      <Flex w={'full'} p={0}>
        <img src="./jupgingBanner.png" />
      </Flex>
    </Stack>
  );
};

export default Banner;
