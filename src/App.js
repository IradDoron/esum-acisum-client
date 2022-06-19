import Routing from './components/Routing/Routing';
import MainNav from './components/MainNav/MainNav';

import { Box } from '@mui/material';

function App() {
  return (
    <>
      <Box
        sx={{
          background:
            'linear-gradient(17deg, rgba(131,58,180,0.2) 0%, rgba(49,135,224,0.2) 50%, rgba(130,69,252,0.2) 100%)',
        }}
      >
        <MainNav />
        <Routing />
      </Box>
    </>
  );
}

export default App;
