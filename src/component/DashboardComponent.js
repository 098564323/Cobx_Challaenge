import React,{Component} from 'react';
//
import{
  SafeAreaView,
  View,
  ActivityIndicator,
  FlatList,
  Dimensions,
  Text,
  TouchableOpacity
}from 'react-native';
//
import DashboardRow from '../adapter/DashboardRow';
import Header from '../utils/Header.js';
import { CheckBox } from 'react-native-elements'
//
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { callDashboardAPI } from '../actions/DashboardAction';
import { getRemoteRequest } from '../reducers/FetchRemoteData';
//
class DashboardComponent extends Component{

    constructor(props){
      super(props)
      this.props.getRemoteRequest();
      this.state = {
          userTypes: [
            'All',
            'Type 0',
            'Type 1',
            'Type 2',
            'Type 3',
            'Type 4',
          ],
          clickPos:-1
        };
    }

    render(){
        const { response, isFetching } = this.props.apiState
          if (isFetching===false) {
              return(
                <View style={{flexGrow:1}}>
                    <SafeAreaView style={{flexshrink:0,backgroundColor:'coral'}}/>
                    <SafeAreaView style={{flexGrow:1}}>
                          <Header headerTitle="Category" headerNavigation={this.props.navigation}/>
                          <View style={{flexGrow:1,flexBasis: 0,paddingBottom: 15}}>
                              <FlatList
                                  extraData={this.state.isCheckBoxClick}
                                  showsHorizontalScrollIndicator={false}
                                  data={ this.state.userTypes }
                                  keyExtractor={(item, index) => index.toString()}
                                  style={{backgroundColor: 'white', width: Dimensions.get('window').width}}
                                  horizontal={true}
                                  renderItem={ ({item,index}) =>
                                      <this.UserTypeRow userType={item} indexPos={index}/>
                                  }/>
                                <FlatList
                                  data={ response.data.items }
                                  style={{width: Dimensions.get('window').width}}
                                  keyExtractor={(item, index) => index.toString()}
                                  renderItem={ ({item}) =>
                                      <DashboardRow walletModel={item}/>
                                  }/>
                          </View>
                    </SafeAreaView>
                </View>
              )
          } else {
              return(
                  <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
                        <ActivityIndicator/>
                  </View>
              )
          }
    }


     UserTypeRow =({userType,indexPos})=>{

      return(
        <View style={{paddingLeft: 20,paddingRight: 20,justifyContent: 'center',alignItems: 'center'}}>
          {
              (userType==='All')?
                <TouchableOpacity onPress={() => {this.setState({ clickPos: indexPos})}}>
                    <Text style={{color:'dimgray',fontSize: 18}}>
                      {userType}
                    </Text>
                </TouchableOpacity>
              :
                <CheckBox containerStyle={{
                    backgroundColor: "transparent",
                    borderWidth: 0,
                    alignSelf: 'flex-start'}}
                    title={userType}
                    textStyle={{color:'dimgray',fontSize: 16}}
                    uncheckedColor='darkgray'
                    checkedColor='darkgray'
                    onPress={() => {this.setState({ clickPos: indexPos})}}
                    checked={(this.state.clickPos===indexPos)}/>
            }
        </View>
      );
    }
}



function mapStateToProps(state){
    return{
        apiState:state
    }
}

function mapDispatchToProps(dispatch) {
  return {
      ...bindActionCreators({ getRemoteRequest }, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DashboardComponent);
