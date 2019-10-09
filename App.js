/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { translate } from 'react-i18next';
import i18n from './src/i18n/index';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/screens/Home';
import Page2 from './src/screens/Page2';

const Nav = createStackNavigator({
  Home: { screen: Home },
  Page2: { screen: Page2 }
});

const Stack = createAppContainer(Nav)

// Wrapping a stack with translation hoc asserts we get new render on language change
// the hoc is set to only trigger rerender on languageChanged
const WrappedStack = ({t}) => {
  return <Stack screenProps={{ t }} />;
};
const ReloadAppOnLanguageChange = translate('common', {
  bindI18n: 'languageChanged',
  bindStore: false,
})(WrappedStack);

// The entry point using a react navigation stack navigation
// gets wrapped by the I18nextProvider enabling using translations
// https://github.com/i18next/react-i18next#i18nextprovider
export default class App extends React.Component {
  render() {
      return (
            <ReloadAppOnLanguageChange />
      );
  }
}