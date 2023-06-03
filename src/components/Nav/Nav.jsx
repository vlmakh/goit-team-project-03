import { MainNavigation, MainNavigationLink } from './Nav.styled';

const Nav = () => {
  return (
    <MainNavigation>      
      <MainNavigationLink to="notices/sell">Notices</MainNavigationLink>
      <MainNavigationLink to="friends">Our friends</MainNavigationLink>
    </MainNavigation>
  );
};

export default Nav;
