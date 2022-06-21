import { Stack, Typography } from '@mui/material';

function CourseHeader() {
  return (
    <Stack direction="row" sx={{ flexWrap: 'wrap', margin: '50px 0' }}>
      <Typography sx={{ textAlign: 'center', width: '100%' }} variant="h2">
        קורסי מוזיקה
      </Typography>
    </Stack>
  );
}

export default CourseHeader;
