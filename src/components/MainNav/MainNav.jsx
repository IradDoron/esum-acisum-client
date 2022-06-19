import { NavLink } from 'react-router-dom';

// import from mui
import { Button, Stack } from '@mui/material';

const links = [
  { Home: 'בית' },
  { Composition: 'הלחנה' },
  { Courses: 'קורסים' },
  { Forum: 'פורום' },
  { Games: 'משחקים' },
  { Improvisation: 'אלתור' },
  { Library: 'ספרייה' },
  { Personal: 'אישי' },
  { Theory: 'תיאור' },
  { Tools: 'כלים' },
];

function MainNav() {
  return (
    <nav>
      <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
        {links.map((link) => (
          <NavLink
            key={Object.keys(link)[0]}
            style={{ textDecoration: 'none', color: 'inherit' }}
            to={`/${Object.keys(link)[0].toLowerCase()}`}
          >
            <Button variant="outlined">{Object.values(link)[0]}</Button>
          </NavLink>
        ))}
      </Stack>
    </nav>
  );
}

export default MainNav;
