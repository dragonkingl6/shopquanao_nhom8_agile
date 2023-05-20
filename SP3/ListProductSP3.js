import React from "react";
import { FlatList } from "react-native";
import ProductSP31 from "./ProductSP31";
export default class ListProductSP3 extends React.Component{
     //1.Khai bao bien//sua mot chut nhe
     constructor(props)
     {
          super(props);
          this.state={
               products: null, //dung de truyen vao props trong Model
          };
          //khoi tao cac ham
          this.getProducts=this.getProducts.bind(this);//lay du lieu
          this.renderItems=this.renderItems.bind(this);//tao cac item
          this.handlePress=this.handlePress.bind(this);//xu ly su kienl
     }
     //2.Goi ham tao du lieu
     componentDidMount()
     {
          this.getProducts();
     }
     //3. DInh nghia cac ham: lay du lieu tu server; tao cac item; xu ly su kien
     async getProducts()//ham lay du lieu tu server
     {
          const url='https://huyfpl.github.io/agile_quanlyquanao_nhom8/data.json';
          let response=await fetch(url,{method:'GET'});//doc du lieu
          let responseJSON=await response.json();//chuyen sang json
          //update du lieu vua doc duoc vao state
          this.setState({
               products: responseJSON.products,
          });
     }
     //ham tao cac item
     renderItems({index,item})
     {
          return(
               <ProductSP31
                    dataProd={item}
                    handlePress={this.handlePress}
               />
          );
     }
     //ham xu ly su kien
     handlePress(dataProd)
     {
          this.props.navigation.navigate('Detail',{data:dataProd});
     }
     //4. Render du lieu
     render()
     {
          return(
               <FlatList
                    data={this.state.products}
                    renderItem={this.renderItems}
                    numColumns={3}
                    removeClippedSubviews
               />
          );
     }
}