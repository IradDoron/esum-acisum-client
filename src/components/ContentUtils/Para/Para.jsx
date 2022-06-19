import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

function Para({ children, isItem }) {
  const [marginAmount, setMarginAmount] = useState(3);
  useEffect(() => {
    if (isItem) {
      setMarginAmount(marginAmount + 3);
    }
  }, []);

  return (
    <Typography
      m={1}
      mr={marginAmount}
      sx={{
        fontSize: 20,
        position: 'relative',
        textAlign: 'start',
        width: '100%',
        maxWidth: '700px',
        margin: '12px 0',
      }}
    >
      {children}
    </Typography>
  );
}

export default Para;
