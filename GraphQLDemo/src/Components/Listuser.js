import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  ActivityIndicator
} from 'react-native';
import gql from 'graphql-tag';
class Listuser extends Component {
  renderLoading(){
    return(  <View style={styles.container}>
        <ActivityIndicator styleAttr='Large'/>
      </View>)
  }
  renderError(){
    return(  <View style={styles.container}>
                <Text style={styles.welcome}>
                  An error occured
                </Text>
      </View>)
  }
  renderList(dataArray){

    return(  <View style={styles.container}>
        {
              dataArray.map(row => (
                <Text key={row.id} style={styles.instructions}>{ row.firstName} {row.lastName}</Text>
              ))
        }
      </View>)
  }

  render() {
    <View/>
  //   if(this.props.allUsersQuery && this.props.allUsersQuery.loading) {
  //     return this.renderLoading()
  //   }else if(this.props.allUsersQuery && this.props.allUsersQuery.error) {
  //     return this.renderError()
  //   }else{
  //   const userList = this.props.allUsersQuery.allUsers
  //   return this.renderList(userList)
  //  }
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


const ALL_USERS_QUERY = gql`
  query AllUsersQuery {
    allUsers {
      id
      createdAt
      firstName
      lastName
    }
  }
`
export default (Listuser)