import RegisteForm from 'components/RegisterForm';
import { useEffect } from 'react';

const RegisterPage = () => {
  useEffect(() => {
    document.title = 'YourPet | Register';
  });

  return <RegisteForm />;
};

export default RegisterPage;
