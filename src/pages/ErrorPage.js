import { useEffect } from 'react';
import { PageTitle } from 'components/PageTitle/PageTitle.styled';
import ErrorImg from 'components/ErrorImg';
import { ButtonFilled } from 'common/Button.styled';
import { Box } from '@mui/system';

const ErrorPage = () => {
  useEffect(() => {
    document.title = 'YourPet | Error';
  });

  return (
    <>
      <PageTitle>Ooops! This page not found :(</PageTitle>
      <ErrorImg />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '40px',
        }}
      >
        <ButtonFilled>To main page</ButtonFilled>
      </Box>
    </>
  );
};

export default ErrorPage;
