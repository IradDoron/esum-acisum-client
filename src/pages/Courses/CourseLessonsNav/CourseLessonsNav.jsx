import { useRef } from 'react';
import { Stack, Typography, Button, Divider, Portal } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CourseLessonsNav({ lessonsArray }) {
  const params = useParams();
  const { course, chapter, lesson, topic } = params;
  const [isShowChapters, setIsShowChapters] = useState(false);
  function handleClick() {
    setIsShowChapters(!isShowChapters);
  }

  useEffect(() => {
    setIsShowChapters(false);
  }, [lesson]);
  return (
    <>
      <Button variant="outlined" color="secondary" onClick={handleClick}>
        {isShowChapters ? (
          <Typography variant="h5">הסתר שיעורים</Typography>
        ) : (
          <Typography variant="h5">הצג שיעורים</Typography>
        )}
      </Button>
      {isShowChapters ? (
        <Stack component="nav" sx={{ maxHeight: '200px', overflow: 'scroll' }}>
          {lessonsArray?.map((lesson, index) => {
            return (
              <NavLink key={index} to={`lesson-${index}`} style={{ textDecoration: 'none' }}>
                <Button color="secondary">
                  <Typography>{`שיעור ${index}`}</Typography>
                  <Divider orientation="vertical" flexItem sx={{ margin: '0 10px', backgroundColor: 'inherit' }} />
                  <Typography>{`${lesson.lessonTitle}`}</Typography>
                </Button>
              </NavLink>
            );
          })}
        </Stack>
      ) : null}
    </>
  );
}

export default CourseLessonsNav;
