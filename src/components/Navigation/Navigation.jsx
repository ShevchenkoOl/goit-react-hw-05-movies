import {NavigationContainer,NavigationLink} from './NavigationStyled';

const Navigation = () => {
  return (
    <header>
      <NavigationContainer>
        <NavigationLink exact="true" to="/">
          Home
        </NavigationLink>

        <NavigationLink to="/movies">Movies</NavigationLink>
      </NavigationContainer>
    </header>
  );
};

export default Navigation;
