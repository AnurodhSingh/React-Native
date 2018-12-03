import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry } from 'react-native';
import Listuser from './src/Components/Listuser'
import ApolloClient  from 'apollo-client';
import { ApolloProvider, createNetworkInterface} from 'react-apollo';

const networkInterface = createNetworkInterface('https://api.graph.cool/simple/v1/swapi');
const client = new ApolloClient({
  networkInterface,
});
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ApolloProvider client={client}>
        <Listuser />
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
