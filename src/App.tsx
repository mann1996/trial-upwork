import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <MantineProvider theme={theme} withGlobalStyles>
        <Hero />
      </MantineProvider>
    </>
  );
}

export default App;
