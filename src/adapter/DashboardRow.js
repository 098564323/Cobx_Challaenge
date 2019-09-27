import React from 'react';
import {
View,
Text,
StyleSheet
}from 'react-native';
import {TYPE_COLORS}  from '../utils/Constant';

const DashboardRow =({walletModel})=>{
  return(
      <View style={styles.containerBG}>
          <View style={{backgroundColor:TYPE_COLORS[walletModel.type],padding: 5}} />
          <View style={{flexGrow: 1,padding: 10,flexDirection: 'column'}}>
                <Text style={{fontSize: 16,marginLeft: 25}}>{walletModel.fullName}</Text>
                <Text style={{fontSize: 14,marginLeft: 25}}>{walletModel.email}</Text>
                <View  style={{flexDirection: 'row',flexGrow: 1,marginTop: 10}}>
                      <View style={styles.budgetViewBG}>
                          <View style={styles.circleBG}>
                                <Text>{walletModel.wallet1}</Text>
                          </View>
                          <Text style={styles.fontStyle}>budget</Text>
                      </View>
                      <View style={styles.budgetViewBG}>
                          <View style={styles.circleBG}>
                                <Text>{walletModel.wallet2}</Text>
                          </View>
                          <Text style={styles.fontStyle}>budget</Text>
                      </View>
                      <View style={styles.budgetViewBG}>
                          <View style={styles.circleBG}>
                                <Text>{walletModel.wallet3}</Text>
                          </View>
                          <Text style={styles.fontStyle}>budget</Text>
                      </View>
                </View>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
    circleBG:{
      width: 60,
      height:60,
      borderRadius: 60/2,
      backgroundColor: 'darkgray',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center'
    },
    fontStyle:{
      fontSize: 14,
      marginTop: 10
    },
    budgetViewBG:{
      flexGrow: 1,
      flexBasis: 1,
      alignItems: 'center'
    },
    containerBG:{
      margin: 15,
      marginBottom: 0,
      flexDirection: 'row',
      padding: 10,
      backgroundColor: 'azure',
      elevation: 5
    }
});

export default DashboardRow;
