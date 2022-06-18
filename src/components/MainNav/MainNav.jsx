import { NavLink } from 'react-router-dom';

// import from mui
import { Button, Stack } from '@mui/material';

const links = [
  { Home: 'בית' },
  { Composition: 'הלחנה' },
  { Courses: 'קורסים' },
  { Forum: 'פורום' },
  { Games: 'משחקים' },
  { Improvisation: 'הפעלה' },
  { Library: 'ספרייה' },
  { Personal: 'אישי' },
  { Theory: 'תיאור' },
  { Tools: 'כלים' },
];

function MainNav() {
  return (
    <nav>
      <Stack direction="row">
        {links.map((link) => (
          <Button key={Object.keys(link)[0]} variant="outlined">
            <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to={`/${Object.keys(link)[0].toLowerCase()}`}>
              {Object.values(link)[0]}
            </NavLink>
          </Button>
        ))}
      </Stack>
    </nav>
  );
}

export default MainNav;
