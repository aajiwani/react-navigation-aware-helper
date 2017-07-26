import React, { Component  } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import hoistNonReactStatic from 'hoist-non-react-statics';
import * as CustomError from '@library/CustomError';
import autobind from 'autobind-decorator';
import NavigationHelper from './helper';

function getCurrentRoute(navigationState)
{
  if (!navigationState)
  {
    return null;
  }

  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes)
  {
    return getCurrentRoute(route);
  }

  return route;
}

function NavigationAwareScreenWrapped(ScreenName, ParamsList, Wrapped)
{
  class NavigationAwareScreen extends Component
  {
    constructor(props)
    {
      super(props);
      this.navParms = {};
      this.screenInstance = null;
      this.navHelper = new NavigationHelper(this);
    }

    componentWillReceiveProps(nextProps)
    {
      var respNavParms = this.getNavigationParams(nextProps.navState);
      this.navParms = (respNavParms == null) ? this.navParms : respNavParms;
    }

    componentWillMount()
    {
      var respNavParms = this.getNavigationParams(this.props.navState);
      this.navParms = (respNavParms == null) ? this.navParms : respNavParms;
    }

    @autobind
    _arrayContainsArray (superset, subset)
    {
      return subset.every(function (value) {
        return (superset.indexOf(value) >= 0);
      });
    }

    @autobind
    _checkScreenRequirements(currentRoute)
    {
      if (ParamsList.length > 0)
      {
        if (_.has(currentRoute, 'params'))
        {
          if (!this._arrayContainsArray(Object.keys(currentRoute.params), ParamsList))
          {
            throw CustomError.CreateCustomError(ScreenName + ' requires more params than provided, please recheck the definition', {
              requiredParams: ParamsList,
              provided: Object.keys(currentRoute.params),
              missing: _.difference(ParamsList, Object.keys(currentRoute.params)),
              filename: 'containers/NavigationAwareScreen/index.js'
            });
          }
        }
        else
        {
          throw CustomError.CreateCustomError(ScreenName + ' requires params to function with, but supplied with none', {
            requiredParams: ParamsList,
            filename: 'containers/NavigationAwareScreen/index.js'
          });
        }
      }
    }

    @autobind
    _mapNavigationParams(navParams)
    {
      const filtered = Object.keys(navParams)
        .filter(key => ParamsList.includes(key))
        .reduce((obj, key) => {
          obj[key] = navParams[key];
          return obj;
        }, {});

      var diffKeys = _.difference(Object.keys(navParams), Object.keys(filtered));

      if (!this._arrayContainsArray(Object.keys(navParams), ParamsList))
      {
        throw CustomError.CreateCustomError(ScreenName + ' requires more params than provided', {
          requiredParams: ParamsList,
          provided: Object.keys(navParams),
          missing: diffKeys,
          filename: 'containers/NavigationAwareScreen/index.js'
        });
      }

      return filtered;
    }

    @autobind
    getNavigationParams(navigationState)
    {
      var currRoute = getCurrentRoute(navigationState);

      if (ScreenName.localeCompare(currRoute.routeName) === 0)
      {
        this._checkScreenRequirements(currRoute);
        if (ParamsList.length > 0)
        {
          return this._mapNavigationParams(currRoute.params);
        }
      }

      return null;
    }

    render()
    {
      var modifiedProps = _.omit(this.props, 'navState');
      return (
        <Wrapped {...modifiedProps} {...this.navParms} navigationHelper={this.navHelper} />
      );
    }
  }

  function mapStateToProps(store)
  {
	   return {
       navState: store.navigation
     };
  }

  hoistNonReactStatic(NavigationAwareScreen, Wrapped);
  return connect(mapStateToProps)(NavigationAwareScreen);
}

export default NavigationAwareScreenWrapped;
