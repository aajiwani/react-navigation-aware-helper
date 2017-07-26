import { NavigationActions } from 'react-navigation';

function NavigationHelper(instance)
{
  var provideNavResetAction = (screen, params = {}) => {
    return NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate(
          { routeName: screen, params: params }
        )
      ]
    });
  }

  var provideNavNavigateAction = (screen, params = {}) => {
    return NavigationActions.navigate({
      routeName: screen,
      params: params
    });
  }

  this.navigate = (screen, params = {}, passOldParams = true) => {
    if (typeof instance !== 'undefined' && instance !== null)
    {
      if (passOldParams)
      {
        params = {...instance.props.navigation.state.params, ...params};
      }

      var resetAction = provideNavNavigateAction(screen, params)
      instance.props.navigation.dispatch(resetAction);
    }
  }

  this.reset = (screen, params = {}, passOldParams = true) => {
    if (typeof instance !== 'undefined' && instance !== null)
    {
      if (passOldParams)
      {
        params = {...instance.props.navigation.state.params, ...params};
      }

      var resetAction = provideNavResetAction(screen, params)
      instance.props.navigation.dispatch(resetAction);
    }
  }

  this.goBack = () => {
    if (typeof instance !== 'undefined' && instance !== null)
    {
      instance.props.navigation.goBack();
    }
  }
}

export default NavigationHelper;
