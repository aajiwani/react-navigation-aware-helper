import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { routes } from '@config/navigation_routes';

export const AppNavigator = StackNavigator(routes, {
  headerMode: Platform.select({
    ios: () => 'float',
    android: () => 'screen',
  })()
});
