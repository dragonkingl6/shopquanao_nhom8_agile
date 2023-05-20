import React from "react";
import {Text,View,Image,StyleSheet,TouchableWithoutFeedback} 
from "react-native";
export default class ProductSP3 extends React.Component{
     constructor(props)
     {
          super(props);
          this.props={
               dataProd: {},
               handlePress: null,
          };
     }
     fun_handlePress()
     {
          handlePress? handlePress(dataProd):null;
     }
     render()
     {
          return(
               <View style={styles.container}>
                    <TouchableWithoutFeedback>
                         <View>
                              <Image source={{uri:this.props.dataProd.anhSP}}
                              style={styles.image}/>
                              <Text>{this.props.dataProd.idSP}</Text>
                              <Text>{this.props.dataProd.tenSP}</Text>
                              <Text>{this.props.dataProd.giaban}</Text>
                              <Text>{this.props.dataProd.giaNhap}</Text>
                         </View>
                    </TouchableWithoutFeedback>
               </View>
          );
     }
}
const styles=StyleSheet.create({
     container:{
          flex:1,
     },
     image:{
          width:200, height:200, borderWidth:1,
     },
});