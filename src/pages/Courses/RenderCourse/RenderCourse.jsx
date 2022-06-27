import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import courses from '../../../data/courses/courses';
import { NavLink, Outlet } from 'react-router-dom';
import { Stack, Typography, Accordion, AccordionDetails, AccordionSummary, Paper, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

import CourseChaptersNav from '../CourseChaptersNav/CourseChaptersNav';
import CourseLessonsNav from '../CourseLessonsNav/CourseLessonsNav';
import NavButtons from '../NavButtons/NavButtons';
import CourseNav from '../CourseNav/CourseNav';

function RenderCourse() {
  const params = useParams();
  const { course, chapter, lesson, topic } = params;
  const [courseData, setCourseData] = useState(null);
  useEffect(() => {
    setCourseData(courses[course]);
  }, [course, chapter, lesson]);

  return (
    <>
      <div style={{ zIndex: '1' }}>
        <Stack direction="column">
          <Paper variant="outlined" sx={{ flexWrap: 'wrap', margin: '20px 0 50px 0', padding: '30px' }}>
            <Typography sx={{ textAlign: 'center' }} variant="h2">
              {courseData?.courseTitle}
            </Typography>
            <Typography sx={{ textAlign: 'center' }} variant="h6">
              {courseData?.courseDescription}
            </Typography>
          </Paper>
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
        </Stack>
        <Stack direction="row" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            sx={(theme) => ({
              [theme.breakpoints.down('lg')]: {
                width: '100%',
              },
              [theme.breakpoints.up('lg')]: {
                width: '70%',
                margin: 'auto',
              },
            })}
          >
            <Paper variant="outlined" sx={{ flexWrap: 'wrap', margin: '0 0 50px 0', padding: '30px' }}>
              <Typography sx={{ textAlign: 'center' }} variant="h3">
                {`${'שיעור'}${' '}${lesson?.split('-')[1]}`}
              </Typography>

              <Typography sx={{ textAlign: 'center' }} variant="h3">
                {`${
                  courseData?.chapters[Number(chapter?.split('-')[1])]?.lessons[Number(lesson?.split('-')[1])]
                    ?.lessonTitle
                }`}
              </Typography>
              <Typography sx={{ textAlign: 'center' }} variant="h6">
                {courseData?.chapters[Number(chapter?.split('-')[1])]?.lessons[Number(lesson?.split('-')[1])]
                  ?.lessonDescription &&
                  courseData?.chapters[Number(chapter?.split('-')[1])]?.lessons[Number(lesson?.split('-')[1])]
                    ?.lessonDescription}
              </Typography>
            </Paper>
            <NavButtons />
            <Outlet />
            <NavButtons />
          </Box>
        </Stack>
      </div>
    </>
  );
}
export default RenderCourse;
