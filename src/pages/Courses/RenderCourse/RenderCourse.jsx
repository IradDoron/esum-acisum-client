import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import courses from '../../../data/courses/courses';
import { NavLink, Outlet } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

function RenderCourse() {
  const params = useParams();
  const { course, chapter, lesson, topic } = params;
  const [courseData, setCourseData] = useState(null);
  //const { courseTitle, courseDescription, chapters } = courseData;
  console.log(courseData);
  useEffect(() => {
    setCourseData(courses[course]);
  }, [course]);

  return (
    <div>
      <Stack direction="row" sx={{ flexWrap: 'wrap', margin: '50px 0', display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h2">{courseData?.courseTitle}</Typography>
      </Stack>
      <Stack direction="row" sx={{ flexWrap: 'wrap', margin: '50px 0', display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h3">{courseData?.courseDescription}</Typography>
      </Stack>

      <h2>Chapters:</h2>
      <nav>
        <ul>
          {courseData?.chapters?.map((chapter, index) => {
            return (
              <li key={index}>
                <NavLink to={`chapter-${index}/lesson-0`}>{`פרק ${index} - ${chapter.chapterTitle}`}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
export default RenderCourse;
