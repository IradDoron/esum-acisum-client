import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import courses from '../../../data/courses/courses';
import { NavLink, Outlet } from 'react-router-dom';
import CourseLessonsNav from '../CourseLessonsNav/CourseLessonsNav';

function RenderChapter() {
  const params = useParams();
  const { course, chapter, lesson, topic } = params;
  const [chapterData, setChapterData] = useState(null);
  useEffect(() => {
    setChapterData(courses[course].chapters[Number(chapter?.split('-')[1])]);
  }, [chapter]);

  return (
    <div>
      <CourseLessonsNav lessonsArray={chapterData?.lessons} />
      <Outlet />
    </div>
  );
}
export default RenderChapter;
