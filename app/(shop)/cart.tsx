import React from "react"
import {Text, View, StyleSheet} from "react-native"
import {useRoute, RouteProp} from "@react-navigation/native"

type CartItemsType = {
  Cart: {
  id: number;
  item: string

  }
}

export function Cart() {
  const route =  useRoute<RouteProp<CartItemsType, "Cart">>()
  const {id, item} = route.params

  return (
    <View style={styles.view}>
      <Text>Item id: {id}</Text>
      <Text>Item name: {item}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    color: "black",
    flex: 1
    // width: "100%",
    // height: "100%"
  }
})





export default Cart
