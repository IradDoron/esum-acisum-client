import { useRef } from 'react';
import { Stack, Typography, Button, Divider, Box } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CourseChaptersNav({ chaptersArray }) {
  const params = useParams();
  const { course, chapter, lesson, topic } = params;
  const [isShowChapters, setIsShowChapters] = useState(false);
  function handleClick() {
    setIsShowChapters(!isShowChapters);
  }

  useEffect(() => {
    setIsShowChapters(false);
  }, [chapter]);

  return (
    <>
      <Box sx={{ margin: '40px 0' }}>
        <Typography>{chaptersArray?.[Number(chapter?.split('-')[1])]?.chapterTitle}</Typography>

        <Button variant="outlined" onClick={handleClick}>
          {isShowChapters ? (
            <Typography variant="h5">הסתר פרקים</Typography>
          ) : (
            <Typography variant="h5">הצג פרקים</Typography>
          )}
        </Button>
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
      </Box>
    </>
  );
}

export default CourseChaptersNav;
