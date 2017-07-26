import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SCREEN } from '@config/navigation_routes';

export default class Home extends Component
{
  constructor(props)
  {
    super(props);
  }

  onPressBtn()
  {
    this.props.navigationHelper.navigate(
      SCREEN.COMPANIES,
      { companies: [
        'a', 'b', 'c', 'd'
      ]}
    );
  }

  render()
  {
    return (
        <View style={styles.container}>
          <Text>{"Home Page!"}</Text>
          <Text>{"\n\n"}</Text>
          <Button
            onPress={this.onPressBtn.bind(this)}
            title="Move To Companies"
            color="#841584"
          />
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
