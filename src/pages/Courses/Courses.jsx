import { useState } from 'react';

import { NavLink, Outlet } from 'react-router-dom';

import CourseEntering from './CourseEntering/CourseEntering';
import CourseHeader from './CourseHeader/CourseHeader';

import { Stack } from '@mui/material';

// import data
import courses from '../../data/courses/courses';

function Courses() {
  const [coursesList, setCoursesList] = useState(Object.keys(courses));
  return (
    <div>
      <CourseHeader />
      <Stack direction="flex">
        {coursesList.map((course) => {
          return <CourseEntering key={course} course={course} />;
        })}
      </Stack>
      <Outlet />
    </div>
  );
}

export default Courses;
