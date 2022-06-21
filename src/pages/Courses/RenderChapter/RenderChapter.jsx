import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import courses from '../../../data/courses/courses';
import { NavLink, Outlet } from 'react-router-dom';
import CourseLessonsNav from '../CourseLessonsNav/CourseLessonsNav';
import { Typography, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function RenderChapter() {
  const params = useParams();
  const { course, chapter, lesson, topic } = params;
  const [chapterData, setChapterData] = useState(null);
  useEffect(() => {
    setChapterData(courses[course].chapters[Number(chapter?.split('-')[1])]);
  }, [chapter, course]);

  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">רשימת שיעורים</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CourseLessonsNav lessonsArray={chapterData?.lessons} />
        </AccordionDetails>
      </Accordion>
      <Typography variant="h4">{`${'שיעור'}${' '}${lesson.split('-')[1]}${' - '}${
        chapterData?.lessons[Number(lesson.split('-')[1])]?.lessonTitle
      }`}</Typography>
      <Outlet />
    </div>
  );
}
export default RenderChapter;
