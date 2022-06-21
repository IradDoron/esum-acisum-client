import { useState } from 'react';

import { NavLink, Outlet } from 'react-router-dom';

import CourseEntering from './CourseEntering/CourseEntering';
import CourseHeader from './CourseHeader/CourseHeader';

import { Stack, Grid, Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import data
import courses from '../../data/courses/courses';

function Courses() {
  const [coursesList, setCoursesList] = useState(Object.keys(courses));
  return (
    <div>
      <CourseHeader />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">קורסים</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            {coursesList.map((course) => {
              return <CourseEntering key={course} course={course} />;
            })}
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Outlet />
    </div>
  );
}

export default Courses;
