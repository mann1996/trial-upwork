import { Box, ThemeIcon } from '@mantine/core';
import React from 'react';
import Heading from './Heading';
import StyledParagraph from './styled/StyledParagraph';

interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function Feature({ title, icon, description }: Props) {
  return (
    <Box
      sx={{
        maxWidth: '20rem',

        '@media screen and (width >= 75em )': {
          maxWidth: '24rem',
        },
      }}
    >
      <ThemeIcon variant="light" p="0.75rem" radius="50%" w="auto" h="auto">
        {icon}
      </ThemeIcon>
      <Heading order={6} mt={{ base: '1rem', sm: '1.25rem' }} mb="1.25rem">
        {title}
      </Heading>
      <StyledParagraph color="neutral.5">{description}</StyledParagraph>
    </Box>
  );
}

export default Feature;
