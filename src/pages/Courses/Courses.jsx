import { useState } from 'react';

import { NavLink, Outlet } from 'react-router-dom';

// import data
import courses from '../../data/courses/courses';

function Courses() {
  const [coursesList, setCoursesList] = useState(Object.keys(courses));
  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {coursesList.map((course) => {
          return (
            <li key={course}>
              <NavLink to={`/courses/${course}`}>{course}</NavLink>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}

export default Courses;
