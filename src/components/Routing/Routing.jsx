import { Routes, Route } from 'react-router-dom';

// import pages
import Home from '../../pages/Home/Home';
import Composition from '../../pages/Composition/Composition';
import Courses from '../../pages/Courses/Courses';
import RenderCourse from '../../pages/Courses/RenderCourse/RenderCourse';
import RenderChapter from '../../pages/Courses/RenderChapter/RenderChapter';
import RenderLesson from '../../pages/Courses/RenderLesson/RenderLesson';
import Forum from '../../pages/Forum/Forum';
import Games from '../../pages/Games/Games';
import Improvisation from '../../pages/Improvisation/Improvisation';
import Library from '../../pages/Library/Library';
import Personal from '../../pages/Personal/Personal';
import Theory from '../../pages/Theory/Theory';
import Tools from '../../pages/Tools/Tools';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/composition" element={<Composition />} />
      <Route path="/courses" element={<Courses />}>
        <Route path="/courses/:course" element={<RenderCourse />}>
          <Route path="/courses/:course/:chapter" element={<RenderChapter />}>
            <Route path="/courses/:course/:chapter/:lesson" element={<RenderLesson />} />
          </Route>
        </Route>
      </Route>
      <Route path="/forum" element={<Forum />} />
      <Route path="/games" element={<Games />} />
      <Route path="/improvisation" element={<Improvisation />} />
      <Route path="/library" element={<Library />} />
      <Route path="/personal" element={<Personal />} />
      <Route path="/theory" element={<Theory />} />
      <Route path="/tools" element={<Tools />} />
    </Routes>
  );
}

export default Routing;
