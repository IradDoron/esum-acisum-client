import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import courses from '../../../data/courses/courses';
import { NavLink, Outlet } from 'react-router-dom';

function RenderCourse() {
  const params = useParams();
  const { course, chapter, lesson, topic } = params;
  const [courseData, setCourseData] = useState(null);
  useEffect(() => {
    if (courseData === null) {
      setCourseData(courses[course]);
    }
  }, [courseData]);

  return (
    <div>
      <h2>course title: {courseData?.courseTitle}</h2>
      <h2>course description: {courseData?.description}</h2>
      <h2>Chapters:</h2>
      <nav>
        <ul>
          {courseData?.chapters?.map((chapter, index) => {
            return (
              <li key={index}>
                <NavLink to={`chapter-${index}/lesson-0`}>{`פרק ${index} - ${chapter.chapterTitle}`}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
export default RenderCourse;
