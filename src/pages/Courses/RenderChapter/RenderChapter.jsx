import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import courses from '../../../data/courses/courses';
import { NavLink, Outlet } from 'react-router-dom';

function RenderChapter() {
  const params = useParams();
  const { course, chapter, lesson, topic } = params;
  const [chapterData, setChapterData] = useState(null);
  useEffect(() => {
    setChapterData(courses[course].chapters[Number(chapter?.split('-')[1])]);
  }, [chapter]);

  return (
    <div>
      <h2>chapter title: {chapterData?.title}</h2>
      <h2>chapter description: {chapterData?.description}</h2>
      <h2>Lessons:</h2>
      <nav>
        <ul>
          {chapterData?.lessons?.map((lesson, index) => {
            return (
              <li key={index}>
                <NavLink to={`lesson-${index}`}>{`שיעור מספר ${index} - ${lesson.lessonTitle}`}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
export default RenderChapter;
