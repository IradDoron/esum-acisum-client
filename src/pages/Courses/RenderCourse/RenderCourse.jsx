import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import courses from '../../../data/courses/courses';
import { NavLink, Outlet } from 'react-router-dom';
import { Stack, Typography, Button, Divider, Portal } from '@mui/material';
import CourseChaptersNav from '../CourseChaptersNav/CourseChaptersNav';

function RenderCourse() {
  const params = useParams();
  const { course, chapter, lesson, topic } = params;
  const [courseData, setCourseData] = useState(null);
  useEffect(() => {
    setCourseData(courses[course]);
  }, [course]);

  return (
    <div>
      <Stack sx={{ flexWrap: 'wrap' }}>
        <Typography sx={{ textAlign: 'center' }} variant="h2">
          {courseData?.courseTitle}
        </Typography>
      </Stack>
      <Stack sx={{ flexWrap: 'wrap' }}>
        <Typography sx={{ textAlign: 'center' }} variant="h3">
          {courseData?.courseDescription}
        </Typography>
      </Stack>
      <CourseChaptersNav chaptersArray={courseData?.chapters} />
      <Outlet />
    </div>
  );
}
export default RenderCourse;
