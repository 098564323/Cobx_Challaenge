import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text
} from 'react-native';

class Header extends Component{


    render(){
      return(
            <View style={{flexDirection: 'column'}}>
                  <View style={{width: undefined,height: 45,elevation: 10,alignItems: 'center',justifyContent: 'center',backgroundColor: 'coral',flexDirection: 'row'}}>
                      <Text style={{color: 'white',fontSize: 16}}>Dashboard</Text>
                  </View>
            </View>

      );
    }

}



export default Header;
