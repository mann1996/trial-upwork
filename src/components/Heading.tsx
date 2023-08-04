import { Title, TitleProps } from '@mantine/core';

function Heading({ children, order, ...props }: TitleProps) {
  switch (order) {
    case 2:
      return (
        <Title
          order={order}
          sx={(theme) => ({
            [theme.fn.smallerThan('sm')]: {
              fontSize: '2rem',
            },
          })}
          {...props}
        >
          {children}
        </Title>
      );
    case 6:
      return (
        <Title
          order={order}
          sx={(theme) => ({
            [theme.fn.smallerThan('sm')]: {
              fontSize: '1.125rem',
            },
          })}
          {...props}
        >
          {children}
        </Title>
      );
    default:
      return (
        <Title order={order} {...props}>
          {children}
        </Title>
      );
  }
}

export default Heading;
