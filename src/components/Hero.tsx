import { Box, Button, Flex } from '@mantine/core';
import imageMobile from '../assets/iphone-mobile.svg';
import imageTab from '../assets/iphone-tablet.svg';
import image from '../assets/iphone.svg';
import Feature from './Feature';
import Heading from './Heading';
import HeartOutline from './icons/HeartOutline';
import StyledContainer from './styled/StyledContainer';
import StyledParagraph from './styled/StyledParagraph';

const features = [
  {
    title: 'The most inspiring feature',
    description:
      'Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.',
  },
  {
    title: 'The most inspiring feature',
    description:
      'Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.',
  },
  {
    title: 'The most inspiring feature',
    description:
      'Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.',
  },
];

function Hero() {
  return (
    <>
      <StyledContainer>
        <Box component="section" py={{ base: '2rem', sm: '3rem', lg: '4rem' }}>
          <Flex
            direction={{ base: 'column', sm: 'row' }}
            gap={{ base: '1.5rem', sm: '2rem' }}
            align="center"
          >
            <Box>
              <Heading order={2}>
                A catchy heading that brings some interest to visitors
              </Heading>
              <StyledParagraph
                mt={{ base: '1rem', sm: '1.5rem' }}
                color="neutral.7"
              >
                Tortor interdum condimentum nunc molestie quam lectus euismod
                pulvinar risus. Cursus in odio aenean.
              </StyledParagraph>
              <Button
                variant="light"
                w={{ base: '100%', sm: 'auto' }}
                mt="2rem"
              >
                Secondary Action
              </Button>
            </Box>
            <picture>
              <source srcSet={imageMobile} media="(max-width: 36em)" />
              <source srcSet={imageTab} media="(max-width: 62em)" />
              <img src={image} alt="hero-image" />
            </picture>
          </Flex>

          <Flex
            mt="2rem"
            direction={{ base: 'column', sm: 'row' }}
            wrap="wrap"
            gap="1.5rem"
            justify="start"
          >
            {features.map((f, i) => (
              <Feature
                key={i}
                title={f.title}
                description={f.description}
                icon={<HeartOutline size="24" />}
              />
            ))}
          </Flex>
        </Box>
      </StyledContainer>
    </>
  );
}

export default Hero;
