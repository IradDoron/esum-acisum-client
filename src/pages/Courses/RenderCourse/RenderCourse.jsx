import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import courses from '../../../data/courses/courses';
import { NavLink, Outlet } from 'react-router-dom';
import { Stack, Typography, Accordion, AccordionDetails, AccordionSummary, Paper, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

import { styled } from '@mui/material/styles';

import CourseChaptersNav from '../CourseChaptersNav/CourseChaptersNav';
import CourseLessonsNav from '../CourseLessonsNav/CourseLessonsNav';
import NavButtons from '../NavButtons/NavButtons';
import CourseNav from '../CourseNav/CourseNav';

const StyledCourseTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.down('lg')]: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '4.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
}));

const StyledCourseDescription = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 'bold',
  marginBottom: '20px',
}));

const StyledChapterTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
}));

const StyledSVGPaper = styled(Paper)(({ theme }) => ({
  height: '400px',
}));

function RenderCourse() {
  const params = useParams();
  const { course, chapter, lesson, topic } = params;
  const [courseData, setCourseData] = useState(null);
  useEffect(() => {
    setCourseData(courses[course]);
  }, [course, chapter, lesson]);

  return (
    <>
      <div style={{ zIndex: '1', width: '100%' }}>
        <Stack direction="column">
          <Paper variant="outlined" sx={{ flexWrap: 'wrap', padding: '100px 30px' }}>
            <StyledCourseTitle variant="h2">{courseData?.courseTitle}</StyledCourseTitle>
            <StyledCourseDescription variant="h4">{courseData?.courseDescription}</StyledCourseDescription>
          </Paper>
          <Paper variant="outlined" sx={{ flexWrap: 'wrap', padding: '100px 30px' }}>
            <StyledChapterTitle variant="h3">{`${'פרק'}${' '}${chapter?.split('-')[1]}`}</StyledChapterTitle>
            <StyledChapterTitle variant="h3">
              {courseData?.chapters[Number(chapter?.split('-')[1])]?.chapterTitle}
            </StyledChapterTitle>
            <StyledCourseDescription sx={{ textAlign: 'center' }} variant="h6">
              {courseData?.chapters[Number(chapter?.split('-')[1])]?.chapterDescription &&
                courseData?.chapters[Number(chapter?.split('-')[1])]?.chapterDescription}
            </StyledCourseDescription>
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
