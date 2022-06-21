import Routing from './components/Routing/Routing';
import MainNav from './components/MainNav/MainNav';

import { createContext, useContext, useState, useMemo } from 'react';

import { Box, Stack } from '@mui/material';

import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { amber, deepOrange, grey } from '@mui/material/colors';

export const ColorModeContext = createContext();

const bg = {
  bg1: 'linear-gradient(17deg, rgba(131,58,180,0.2) 0%, rgba(49,135,224,0.2) 50%, rgba(130,69,252,0.2) 100%)',
  bg2: `linear-gradient(
    90deg,
    rgba(131, 58, 180, 0.4) 0%,
    rgba(253, 29, 29, 0.4) 50%,
    rgba(252, 176, 69, 0.4) 100%
  )`,
};

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              background: bg.bg2,
              height: '100%',
              minHeight: '100vh',
              paddingBottom: '350px',
            }}
          >
            <Stack direction="column" sx={{ alignItems: 'center' }}>
              <MainNav />
              <Routing />
            </Stack>
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
