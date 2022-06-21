import { useState } from 'react';

import { NavLink, Outlet } from 'react-router-dom';

import CourseEntering from './CourseEntering/CourseEntering';
import CourseHeader from './CourseHeader/CourseHeader';

import { Stack, Grid } from '@mui/material';

// import data
import courses from '../../data/courses/courses';

function Courses() {
  const [coursesList, setCoursesList] = useState(Object.keys(courses));
  return (
    <div>
      <CourseHeader />
      <Grid container spacing={2}>
        {coursesList.map((course) => {
          return <CourseEntering key={course} course={course} />;
        })}
      </Grid>
      <Outlet />
    </div>
  );
}

export default Courses;
