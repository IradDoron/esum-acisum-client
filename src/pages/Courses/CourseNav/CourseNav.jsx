import { useParams, NavLink } from 'react-router-dom';
import courses from '../../../data/courses/courses';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

// imports from materail ui
import {
  Stack,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Divider,
  IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function CourseNav({ isOpen, handleToggleMenu }) {
  const params = useParams();
  const { course, chapter, lesson } = params;
  const [expanded, setExpanded] = useState(null);

  function handleChangeExpanded(e, index) {
    expanded === index ? setExpanded(null) : setExpanded(index);
  }

  console.log(isOpen);

  return (
    <>
      {isOpen ? (
        <Paper>
          <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography variant="h2">תוכן הקורס</Typography>
            <IconButton
              sx={(theme) => ({
                [theme.breakpoints.down('lg')]: {
                  position: 'static',
                },
                [theme.breakpoints.up('lg')]: {
                  position: 'absolute',
                  right: '426px',
                  top: '22px',
                },
              })}
              onClick={handleToggleMenu}
            >
              <CloseIcon />
            </IconButton>
          </Stack>

          {courses[course]?.chapters.map((chapter, indexChapter) => (
            <Accordion
              key={indexChapter}
              expanded={expanded === indexChapter}
              onChange={(e) => handleChangeExpanded(e, indexChapter)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Stack direction="column">
                  <Stack direction="row">
                    <Typography variant="h6">{`${'פרק'} ${indexChapter + 1}`}</Typography>
                    <Divider orientation="vertical" flexItem sx={{ margin: '0 10px' }} />
                    <Typography variant="h6">{courses[course]?.chapters[indexChapter]?.chapterTitle}</Typography>
                  </Stack>
                  <Stack direction="row">
                    <Typography variant="h6">{courses[course]?.chapters[indexChapter]?.chapterDescription}</Typography>
                  </Stack>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Paper variant="outlined">
                  <Stack spacing={2}>
                    {chapter.lessons.map((lesson, lessonIndex) => {
                      return (
                        <NavLink
                          style={{ textDecoration: 'none', color: 'inherit' }}
                          to={`/courses/${course}/chapter-${indexChapter}/lesson-${lessonIndex}`}
                        >
                          <Stack direction="column">
                            <Stack direction="row">
                              <Typography variant="h6">{`${'שיעור'} ${lessonIndex + 1}`}</Typography>
                              <Divider orientation="vertical" flexItem sx={{ margin: '0 10px' }} />
                              <Typography variant="h6">{lesson.lessonTitle}</Typography>
                            </Stack>
                            <Stack direction="row">
                              <Typography variant="h6">{lesson.lessonDescription}</Typography>
                            </Stack>
                          </Stack>
                        </NavLink>
                      );
                    })}
                  </Stack>
                </Paper>
              </AccordionDetails>
            </Accordion>
          ))}
        </Paper>
      ) : (
        <Paper sx={{ width: '200px', height: '200px' }}>
          <Typography variant="h2">תוכן הקורס</Typography>
        </Paper>
      )}
    </>
  );
}

export default CourseNav;
