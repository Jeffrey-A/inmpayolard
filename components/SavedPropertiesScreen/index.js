import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import {connect } from 'react-redux';
import Constants from 'expo-constants';

import PropertyCard from '../PropertyCard';


class SavedPropertiesScreen extends React.Component {

  render(){
    const {savedProperties} = this.props;


    return (
      <View style={styles.container}>
        <StatusBar style="auto"/>
        <View style={styles.cmpTopMargin}>
          <Text>{`Saved Properties ${savedProperties.length}`}</Text>
          <ScrollView style={ { flex: 1, width: '90%'}}>
            {
              savedProperties.map(property => {
                return (
                  <TouchableOpacity key={property.id}>
                    <PropertyCard property={property} />
                  </TouchableOpacity>
                )
              })
            }
          </ScrollView>
        </View>
      </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  cmpTopMargin: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
  image: {
    height: 400,
    width: '100%',
  }
});


const mapStateToProps = state => ({
  savedProperties: state.propertyReducer.savedProperties,
})


export default connect(mapStateToProps)(SavedPropertiesScreen);



