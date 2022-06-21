import { useParams, useNavigate } from 'react-router-dom';

import { Button, ButtonGroup, Container } from '@mui/material';

import sepIdx from '../../../helpers/seperateIndexToNumber';

import courses from '../../../data/courses/courses';

function getChaptersAmount(course) {
  return courses[course]?.chapters.length;
}

function getLessonsAmount(course, chapterIndex) {
  return courses[course]?.chapters[chapterIndex]?.lessons.length;
}

function NavButtons() {
  const params = useParams();
  const { course, chapter, lesson, topic } = params;

  const navigate = useNavigate();

  function handleClick(chapterIndex, chapterJump, lessonIndex, lessonJump) {
    const newChapter = `${'chapter'}${'-'}${chapterIndex + chapterJump}`;
    const newLesson = `${'lesson'}${'-'}${lessonIndex + lessonJump}`;

    if (lessonJump) {
      navigate(`${newChapter}/${newLesson}`);
    } else {
      navigate(`${newChapter}/${'lesson-0'}`);
    }
  }

  return (
    <>
      <Container sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <ButtonGroup>
          <Button
            disabled={getLessonsAmount(course, sepIdx(chapter, '-')) === sepIdx(lesson, '-') + 1 && true}
            onClick={() => handleClick(sepIdx(chapter, '-'), 0, sepIdx(lesson, '-'), 1)}
          >
            שיעור הבא
          </Button>
          <Button
            disabled={sepIdx(lesson, '-') === 0 && true}
            onClick={() => handleClick(sepIdx(chapter, '-'), 0, sepIdx(lesson, '-'), -1)}
          >
            שיעור קודם
          </Button>
          <Button
            disabled={getChaptersAmount(course) === sepIdx(chapter, '-') + 1 && true}
            onClick={() => handleClick(sepIdx(chapter, '-'), 1, sepIdx(lesson, '-'), 0)}
          >
            פרק הבא
          </Button>
          <Button
            disabled={sepIdx(chapter, '-') === 0 && true}
            onClick={() => handleClick(sepIdx(chapter, '-'), -1, sepIdx(lesson, '-'), 0)}
          >
            פרק קודם
          </Button>
        </ButtonGroup>
      </Container>
    </>
  );
}

export default NavButtons;
