import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {SearchBar, Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import db from "../config";
import firebase from 'firebase';

export default class ReadStoryScreen extends React.Component {
  constructor () {
    super ();
    this.state = {
      search: '',
      allStories: '',
      dataSource: '',
    }
  }

  /*updateSearch = (search) => {
    this.setState({ search });
  };*/

  retrieveStories = () => {
    var query = db.collection("WrittenStory");
    this.setState({allStories: query});
  }

  searchFilterFunction = () => {
    /*const allStories = this.state.allStories;
    const textData = text.toUpperCase ();
    this.setState({dataSource: allStories});*/
    this.setState({ search });
  }

  render() {
    const { search } = this.state;

    return (
      <SafeAreaProvider>

      <View style = {styles.container}>
        <Header style = {styles.headerText}>Read a Story!</Header>
        <SearchBar
          placeholder="Type Here..."
          onChangeText= {() => this.searchFilterFunction (/*text*/)}
          value={search}
        />
        <FlatList
          renderItem = {({item}) => {}}  
        />
      </View>

      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    headerText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
  });