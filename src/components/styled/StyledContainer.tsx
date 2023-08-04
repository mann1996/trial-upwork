import { Container } from '@mantine/core';
import styled from '@emotion/styled';
const StyledContainer = styled(Container)`
  max-width: 75rem;
  padding-inline: 1rem;
  @media screen and (width >= ${({ theme }) => theme.breakpoints.xs}) {
    padding-inline: 2rem;
  }
  @media screen and (width > ${({ theme }) => theme.breakpoints.lg}) {
    padding-inline: 0;
  }
`;

export default StyledContainer;
