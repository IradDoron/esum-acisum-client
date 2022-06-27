import abcjs from 'abcjs';
import { useEffect } from 'react';
import styled from 'styled-components';

import { Paper } from '@mui/material';

const visualOptions = { responsive: 'resize' };

function ScoreArea({ tune, id }) {
  useEffect(() => {
    abcjs.renderAbc(id, tune, visualOptions);
  }, [tune]);

  return (
    <>
      <div style={{ maxWidth: '700px', width: '100%', marginBottom: '40px', margin: 'auto' }}>
        <Paper elevation={3} id={id}></Paper>
      </div>
    </>
  );
}

export default ScoreArea;
