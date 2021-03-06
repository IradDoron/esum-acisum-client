import { useRef } from 'react';
import { Stack, Typography, Button, Divider, Box, Paper } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CourseChaptersNav({ chaptersArray }) {
  const params = useParams();
  const { course, chapter, lesson, topic } = params;
  const [isShowChapters, setIsShowChapters] = useState(true);
  function handleClick() {
    setIsShowChapters(!isShowChapters);
  }

  return (
    <>
      <Paper variant="outlined">
        {isShowChapters ? (
          <Stack component="nav" sx={{ maxHeight: '200px', overflow: 'scroll' }}>
            {chaptersArray?.map((chapter, index) => {
              return (
                <NavLink key={index} to={`chapter-${index}/lesson-0`} style={{ textDecoration: 'none' }}>
                  <Button>
                    <Typography>{`פרק ${index}`}</Typography>
                    <Divider orientation="vertical" flexItem sx={{ margin: '0 10px', backgroundColor: 'inherit' }} />
                    <Typography>{`${chapter.chapterTitle}`}</Typography>
                  </Button>
                </NavLink>
              );
            })}
          </Stack>
        ) : null}
      </Paper>
    </>
  );
}

export default CourseChaptersNav;
