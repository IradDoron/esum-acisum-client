import renderElement from '../../../helpers/renderElement';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';

function Topic({ value }) {
  const [expanded, setExpanded] = useState(true);
  const { topicTitle, topicElements } = value;
  function handleChange() {
    setExpanded(!expanded);
  }

  return (
    <>
      <Accordion sx={{ width: '100%', margin: '12px 0', padding: '5px' }} expanded={expanded} onChange={handleChange}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ textAlign: 'center', width: '100%' }} variant="h4">
            {topicTitle}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {topicElements?.map((item, index) => {
            const elementKey = Object.keys(item)[0];
            const elementValue = item[elementKey];
            return renderElement(elementKey, elementValue, index);
          })}
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default Topic;
