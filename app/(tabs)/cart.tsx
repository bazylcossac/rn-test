import React from "react"
import {Text, View} from "react-native"
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
    <View>
      <Text>Item id: {id}</Text>
      <Text>Item name: {item}</Text>
    </View>
  );
}



export default Cart
