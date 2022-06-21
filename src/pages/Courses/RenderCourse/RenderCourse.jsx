import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import courses from '../../../data/courses/courses';
import { NavLink, Outlet } from 'react-router-dom';
import { Stack, Typography, Accordion, AccordionDetails, AccordionSummary, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CourseChaptersNav from '../CourseChaptersNav/CourseChaptersNav';
import CourseLessonsNav from '../CourseLessonsNav/CourseLessonsNav';

function RenderCourse() {
  const params = useParams();
  const { course, chapter, lesson, topic } = params;
  const [courseData, setCourseData] = useState(null);
  useEffect(() => {
    setCourseData(courses[course]);
  }, [course, chapter, lesson]);

  return (
    <div>
      <Paper variant="outlined" sx={{ flexWrap: 'wrap', margin: '20px 0 50px 0', padding: '30px' }}>
        <Typography sx={{ textAlign: 'center' }} variant="h2">
          {courseData?.courseTitle}
        </Typography>
        <Typography sx={{ textAlign: 'center' }} variant="h6">
          {courseData?.courseDescription}
        </Typography>
      </Paper>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">תוכן עניינים</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CourseChaptersNav chaptersArray={courseData?.chapters} />
          <CourseLessonsNav lessonsArray={courseData?.chapters[Number(chapter?.split('-')[1])].lessons} />
        </AccordionDetails>
      </Accordion>
      <Paper variant="outlined" sx={{ flexWrap: 'wrap', margin: '20px 0 50px 0', padding: '30px' }}>
        <Typography sx={{ textAlign: 'center' }} variant="h3">
          {`${'פרק'}${' '}${chapter?.split('-')[1]}`}
        </Typography>
        <Typography sx={{ textAlign: 'center' }} variant="h3">
          {courseData?.chapters[Number(chapter?.split('-')[1])]?.chapterTitle}
        </Typography>
        <Typography sx={{ textAlign: 'center' }} variant="h6">
          {courseData?.chapters[Number(chapter?.split('-')[1])]?.chapterDescription &&
            courseData?.chapters[Number(chapter?.split('-')[1])]?.chapterDescription}
        </Typography>
      </Paper>
      <Paper variant="outlined" sx={{ flexWrap: 'wrap', margin: '20px 0 50px 0', padding: '30px' }}>
        <Typography sx={{ textAlign: 'center' }} variant="h3">
          {`${'שיעור'}${' '}${lesson?.split('-')[1]}`}
        </Typography>

        <Typography sx={{ textAlign: 'center' }} variant="h3">
          {`${
            courseData?.chapters[Number(chapter?.split('-')[1])]?.lessons[Number(lesson?.split('-')[1])]?.lessonTitle
          }`}
        </Typography>
        <Typography sx={{ textAlign: 'center' }} variant="h6">
          {courseData?.chapters[Number(chapter?.split('-')[1])]?.lessons[Number(lesson?.split('-')[1])]
            ?.lessonDescription &&
            courseData?.chapters[Number(chapter?.split('-')[1])]?.lessons[Number(lesson?.split('-')[1])]
              ?.lessonDescription}
        </Typography>
      </Paper>

      <Outlet />
    </div>
  );
}
export default RenderCourse;
