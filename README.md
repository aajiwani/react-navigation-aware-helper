# React Navigation Helper

While I was working with react-navigation (which is quite a handy package), I felt a need to pass different navigation params to different screens and on that screen I need to access those at different parts of the screen.

I came up with an idea on how about injecting those params to props of the individual Components. With this in place, I can access this.props.param_name straight from the Component.

I have created a boiler plate that should work for most of the cases. If it allows you to please use the code and report any problems in it. I would be thankful.

### Things to keep in mind
1. config/navigation_routes.js
```
addScreenToRoute(ScreenName, ScreenComponent, RequiredNavigationParameters);
addScreenToRoute(SCREEN.COMPANIES, Companies, ['companies']);
```

2. Within component or page
  - Use these methods to move in navigation stack

  ```
  // reset requires: ScreenName, Parameters, true|false => shall pass the currentScreenParams
  this.props.navigationHelper.reset(SCREEN.HOME, {}, false);

  // navigate requires: ScreenName, Parameters, true|false => shall pass the currentScreenParams
  this.props.navigationHelper.navigate(SCREEN.HOME, {}, false);

  // We all are familiar with goBack
  this.props.navigationHelper.goBack();
  ```

3. Use passed params to the screen with props
```
this.props.passed_param
```


### Notes
- I have mainly tested this to work with StackNavigator
