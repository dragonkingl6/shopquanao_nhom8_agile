import React from "react";
import {Text,View,Image,StyleSheet,TouchableWithoutFeedback} 
from "react-native";
const ProductSP31 = (props) =>{
     //dinh nghia props
     const {dataProd,handlePress}=props;
     //khai bao su kien
     const fun_handlePress=()=>
     {
          handlePress? handlePress(dataProd):null;
     }
     //view du lieu
     return(
          <View style={styles.container}>
                    <TouchableWithoutFeedback onPress={fun_handlePress}>
                         <View>
                              <Image source={{uri:dataProd.anhSP}}
                              style={styles.image}/>
                              <Text>{dataProd.idSP}</Text>
                              <Text>{dataProd.tenSP}</Text>
                              <Text>{dataProd.giaBan}</Text>
                              <Text>{dataProd.giaNhap}</Text>
                         </View>
                    </TouchableWithoutFeedback>
          </View>
     );
     
}
export default ProductSP31;
const styles=StyleSheet.create({
     container:{
          flex:1,
     },
     image:{
          width:200, height:200, borderWidth:1,
     },
});