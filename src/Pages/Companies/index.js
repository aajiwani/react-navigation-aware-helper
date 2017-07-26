import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SCREEN } from '@config/navigation_routes';

export default class Companies extends Component
{
  constructor(props)
  {
    super(props);
  }

  onPressBtn()
  {
    this.props.navigationHelper.navigate(
      SCREEN.PAGE_2,
      {
        fake_var: {'name' : 'Amir'}
      }
    );
  }

  componentDidMount()
  {
    console.dir(this.props.companies);
  }

  onPressGoBack()
  {
    this.props.navigationHelper.goBack();
  }

  render()
  {
    return (
        <View style={styles.container}>
          <Button
            onPress={this.onPressGoBack.bind(this)}
            title="Go Back"
            color="#841584"
          />
          <Text>{"\n\n"}</Text>
          <Text>{"Companies sent are "}</Text>
          <Text>{JSON.stringify(this.props.companies)}</Text>
          <Text>{"\n\n"}</Text>
          <Button
            onPress={this.onPressBtn.bind(this)}
            title="Move To Page2"
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
