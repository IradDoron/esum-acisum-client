import { useRef } from 'react';
import { Stack, Typography, Button, Divider, Portal } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CourseChaptersNav({ chaptersArray }) {
  const [isShowChapters, setIsShowChapters] = useState(false);
  function handleClick() {
    setIsShowChapters(!isShowChapters);
  }

  return (
    <>
      <Typography variant="h5">פרקים</Typography>
      <Button onClick={handleClick}>{isShowChapters ? 'הסתר' : 'הצג'}</Button>
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
    </>
  );
}

export default CourseChaptersNav;
