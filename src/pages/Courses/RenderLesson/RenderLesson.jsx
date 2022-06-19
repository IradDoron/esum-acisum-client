import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import courses from '../../../data/courses/courses';
import { NavLink, Outlet } from 'react-router-dom';
import { Stack, Typography, Button, Divider, Portal } from '@mui/material';

import renderElements from '../../../helpers/renderElement';

function RenderLesson() {
  const params = useParams();
  const { course, chapter, lesson } = params;
  const [lessonData, setLessonData] = useState(null);
  useEffect(() => {
    setLessonData(courses[course].chapters[Number(chapter?.split('-')[1])].lessons[Number(lesson?.split('-')[1])]);
  }, [lesson, chapter]);

  return (
    <Stack direction="column" sx={{ alignItems: 'center' }}>
      {lessonData?.lessonElements?.map((element, index) => {
        const elementName = Object.keys(element)[0];
        const elementData = element[elementName];
        return renderElements(elementName, elementData, index);
      })}
    </Stack>
  );
}
export default RenderLesson;
