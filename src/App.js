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
    rgba(101, 40, 142, 0.4) 0%,
    rgba(5, 8, 61, 0.4) 50%,
    rgba(3, 3, 46, 0.4) 100%
  )`,
  bg4: `linear-gradient(
    17deg,
    rgba(15, 4, 76, 0.4) 0%,
    rgba(19, 17, 85, 0.4) 50%,
    rgba(20, 30, 97, 0.4) 100%
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
  light: {
    ...initThemes.light,
    palette: {
      ...initThemes.light.palette,
      bgGradient: bgGradients.bg1,
      background: { ...initThemes.light.palette.background, paper: '#fafaff' },
    },
    typography: {
      ...initThemes.light.typography,
      body1: {
        ...initThemes.light.typography.body1,
        fontSize: '1.2rem',
      },
    },
  },
  dark: {
    ...initThemes.dark,
    palette: {
      ...initThemes.dark.palette,
      bgGradient: bgGradients.bg4,
      background: { ...initThemes.dark.palette.background, paper: '#141421' },
    },
    typography: {
      ...initThemes.dark.typography,
      body1: {
        ...initThemes.dark.typography.body1,
        fontSize: '1.2rem',
      },
    },
  },
};

console.log(customTheme);

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

  console.log(theme);

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              backgroundImage: theme.palette.bgGradient,
              backgroundColor: 'background.default',
              color: 'text.primary',
              height: '100%',
              minHeight: '100vh',
            }}
          >
            <Stack direction="column" sx={{ alignItems: 'center' }}>
              <MainNav />
              <Stack>
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
