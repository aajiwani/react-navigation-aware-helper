import { AppNavigator } from '@components/AppNavigator';
import { SCREEN } from '@config/navigation_routes';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams(SCREEN.HOME)
);

export default function reducer(state = initialState, action)
{
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
