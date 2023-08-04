import styled from '@emotion/styled';
import { createPolymorphicComponent, Text, TextProps } from '@mantine/core';
const _StyledParagraph = styled(Text)`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.black};
`;
const StyledParagraph = createPolymorphicComponent<'p', TextProps>(
  _StyledParagraph
);
export default StyledParagraph;
