import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SCREEN } from '@config/navigation_routes';

export default class Page2 extends Component
{
  constructor(props)
  {
    super(props);
  }

  onPressGoHome()
  {
    // Go to home without any parameters, and remove any previous passed parameters from navigation
    this.props.navigationHelper.reset(SCREEN.HOME, {}, false);
  }

  render()
  {
    return (
        <View style={styles.container}>
          <Button
            onPress={this.onPressGoHome.bind(this)}
            title="Go Home"
            color="#841584"
          />
          <Text>{"\n\n"}</Text>
          <Text>{"Page2"}</Text>
          <Text>{"\n\n"}</Text>
          <Text>{"Old Companies Are:"}</Text>
          <Text>{JSON.stringify(this.props.companies)}</Text>
          <Text>{"\n\n"}</Text>
          <Text>{"New Fake Variable"}</Text>
          <Text>{JSON.stringify(this.props.fake_var)}</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'column'
  }
});
