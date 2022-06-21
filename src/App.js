import Routing from './components/Routing/Routing';
import MainNav from './components/MainNav/MainNav';

import { createContext, useContext, useState, useMemo } from 'react';

import { Box, Stack } from '@mui/material';

import { useTheme, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import { amber, deepOrange, grey, teal } from '@mui/material/colors';

export const ColorModeContext = createContext();

const bgGradients = {
  bg1: 'linear-gradient(17deg, rgba(131,58,180,0.2) 0%, rgba(49,135,224,0.2) 50%, rgba(130,69,252,0.2) 100%)',
  bg2: `linear-gradient(
    90deg,
    rgba(131, 58, 180, 0.4) 0%,
    rgba(253, 29, 29, 0.4) 50%,
    rgba(252, 176, 69, 0.4) 100%
  )`,
  bg3: `linear-gradient(
    17deg,
    rgba(101, 40, 142, 0.7651435574229692) 0%,
    rgba(5, 8, 61, 0.9472163865546218) 50%,
    rgba(3, 3, 46, 0.8645833333333334) 100%
  )`,
};

const initThemes = {
  light: { ...createTheme() },
  dark: {
    ...createTheme({
      palette: {
        mode: 'dark',
      },
    }),
  },
};

const customTheme = {
  light: { ...initThemes.light, palette: { ...initThemes.light.palette, bgGradient: bgGradients.bg1 } },
  dark: { ...initThemes.dark, palette: { ...initThemes.dark.palette, bgGradient: bgGradients.bg3 } },
};

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

  const theme = responsiveFontSizes(customTheme[mode]);

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              backgroundImage: theme.palette.bgGradient,
              color: 'text.primary',
              height: '100%',
              minHeight: '100vh',
              paddingBottom: '350px',
            }}
          >
            <Stack direction="column" sx={{ alignItems: 'center' }}>
              <MainNav />
              <Stack sx={{ maxWidth: '1200px', width: '80%' }}>
                <Routing />
              </Stack>
            </Stack>
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
