import React, { Component } from 'react';
// import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, ListItem, List, View } from 'native-base';
import firebase from 'react-native-firebase';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      // firebase things?
      isAuthenticated: false
    };
  }

  componentDidMount() {
    // firebase things?
    firebase.auth().onAuthStateChanged(function(user){
      if (user){
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        //this.setState({
          //isAuthenticated: true
        //})
        console.log('authenticated');
        //this.render();
      }
      else{
        /*this.setState({
          isAuthenticated: false
        });*/
      }
    });
    firebase.auth().signInAnonymously()
      .then(()=>{
        this.setState({
          isAuthenticated: true
        });
      })
      .catch(function(error){
        var err = error.code;
        console.log(error);
      });
      ;

  }

  render() {
    /*if (!this.state.isAuthenticated){
      return (
        <Container>
          <Header><Text>NOT LOGGED IN VIEW</Text></Header>
        </Container>
      );

    }*/

    return (
      
      <Container>
        
        <Header>{this.state.isAuthenticated ? <Text>The following Firebase modules are enabled:</Text> : <Text>Logging in...</Text>}</Header>
        <Content>
          <View>
            <List>
              <ListItem>
                {firebase.admob.nativeModuleExists && <Text>Admob</Text>}
              </ListItem>
              <ListItem>
                {firebase.analytics.nativeModuleExists && <Text  >Analytics</Text>}
              </ListItem>
              <ListItem>
                {firebase.auth.nativeModuleExists && <Text  >Authentication</Text>}
              </ListItem>
              <ListItem>
                {firebase.crashlytics.nativeModuleExists && <Text  >Crashlytics</Text>}
              </ListItem>
              <ListItem>
                {firebase.firestore.nativeModuleExists && <Text  >Cloud Firestore</Text>}
              </ListItem>
              <ListItem>
                {firebase.messaging.nativeModuleExists && <Text  >Cloud Messaging</Text>}
              </ListItem>
              <ListItem>
                {firebase.links.nativeModuleExists && <Text  >Dynamic Links</Text>}
              </ListItem>
              <ListItem>
                {firebase.iid.nativeModuleExists && <Text  >Instance ID</Text>}
              </ListItem>
              <ListItem>
                {firebase.notifications.nativeModuleExists && <Text  >Notifications</Text>}
              </ListItem>
              <ListItem>
                {firebase.perf.nativeModuleExists && <Text  >Performance Monitoring</Text>}
              </ListItem>
              <ListItem>
                {firebase.database.nativeModuleExists && <Text  >Realtime Database</Text>}
              </ListItem>
              <ListItem>
                {firebase.config.nativeModuleExists && <Text  >Remote Config</Text>}
              </ListItem>
              <ListItem>
                {firebase.storage.nativeModuleExists && <Text  >Storage</Text>}
              </ListItem>
            </List>
          </View>
        </Content>
      </Container>
    );
  }
}