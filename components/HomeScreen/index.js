import { StatusBar } from "expo-status-bar";
import React from "react";
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import Search from "../Search";
import PropertyCard from "../PropertyCard";

import {addPropertyToFavList} from '../../redux/action';



class HomeScreen extends React.Component {
  render() {
    const { properties, navigation } = this.props;
    
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View>
          <Search />
        </View>

        <ScrollView style={ { flex: 1, width: '90%'}}>
          {properties && properties.map((property) => {
              const { id } = property;

              return (
                <TouchableOpacity
                  key={id}
                  onPress={() => navigation.navigate("Property View", property)}
                >
                  <PropertyCard property={property} saveProperty={this.props.addPropertyToFavList} />
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
});

const mapStateToProps = state => ({
  properties: state.propertyReducer.properties,
});


const matchDispatchToProps = dispatch => (bindActionCreators({addPropertyToFavList: addPropertyToFavList},dispatch));



export default connect(mapStateToProps, {addPropertyToFavList: addPropertyToFavList})(HomeScreen);
