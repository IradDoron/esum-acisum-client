import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

function Para({ children, isItem }) {
  // maybe delete this
  const [marginAmount, setMarginAmount] = useState(3);
  useEffect(() => {
    if (isItem) {
      setMarginAmount(marginAmount + 3);
    }
  }, []);

  return (
    <Typography
      sx={{
        textAlign: 'start',
        width: '100%',
        margin: '24px 0',
      }}
    >
      {children}
    </Typography>
  );
}

export default Para;
