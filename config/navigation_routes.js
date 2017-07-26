import NavigationAwareScreen from '@pages/NavigationAwareScreen';
import Companies from '@pages/Companies';
import Page2 from '@pages/Page2';
import Home from '@pages/Home';

export const SCREEN = {
  COMPANIES : 'Companies',
  PAGE_2 : 'Page2',
  HOME : 'Home'
}

let routes = {};
function addScreenToRoute(name, component, requiredNavParams = [])
{
  routes[name] = { screen: new NavigationAwareScreen(name, requiredNavParams, component) }
}

addScreenToRoute(SCREEN.COMPANIES, Companies, ['companies']);
addScreenToRoute(SCREEN.PAGE_2, Page2, ['companies', 'fake_var']);
addScreenToRoute(SCREEN.HOME, Home);

export { routes };
