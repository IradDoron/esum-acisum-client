import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import courses from '../../../data/courses/courses';
import { NavLink, Outlet } from 'react-router-dom';
import { Stack, Typography, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CourseChaptersNav from '../CourseChaptersNav/CourseChaptersNav';
import CourseLessonsNav from '../CourseLessonsNav/CourseLessonsNav';

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
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">רשימת פרקים</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CourseChaptersNav chaptersArray={courseData?.chapters} />
        </AccordionDetails>
      </Accordion>
      <Typography variant="h4">{`${'פרק'}${' '}${chapter.split('-')[1]}${' - '}${
        courseData?.chapters[Number(chapter.split('-')[1])]?.chapterTitle
      }`}</Typography>
      <Outlet />
    </div>
  );
}
export default RenderCourse;
