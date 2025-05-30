import React, {useState, useCallback} from "react";
import { ImageBackground, Pressable, Text, StyleSheet, View, Button, FlatList } from "react-native";
import styled from "styled-components/native";
import {useQuery} from "@tanstack/react-query"
const PAGE_LENGTH = 5
const PAGE = 0

const fetchData = async(page: number) => {
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    if(!response.ok){
      throw new Error("Failed to fetch")
    }
    const data = await response.json()
    const posts = data.slice(PAGE_LENGTH * page, PAGE_LENGTH * page + 5 )
    return posts

  }
  catch{
    throw new Error("Error occured")
  }
}

function Shop() {

  const [page, setPage] = useState<number>(PAGE)
  const {data, isLoading, isError} = useQuery({
    queryKey: [`posts-page:${page}`],
    queryFn: async()  => await fetchData(page)
  })



 if(isLoading) return <Text>Loading...</Text>
  const handleNextPage = () => setPage( prev => prev + 1)
  const handlePrevPage = () => setPage( prev => prev - 1)



  return (

      <StyledView>
        <DataContainer>
          {data && <FlatList data={data} renderItem={({item}) => <Text style={{marginVertical: 20}}>{item.body}</Text>} keyExtractor={data => data.id}/>}
        </DataContainer>
        <ButtonComponent>
         <Button title={"Next page"} onPress={handleNextPage} />
         <Button title={"PREV page"} onPress={handlePrevPage} />
        </ButtonComponent>
      </StyledView>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  pressableText: {
    backgroundColor: "lightblue",
    paddingVertical: 20,
    paddingHorizontal: 5,
    borderRadius: 10,
    marginTop: 20
  },
  buttonView: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  }
})

const StyledView = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const DataContainer = styled.View`
    display: flex;
    flex-direction: column;
    margin-top: auto;
    margin-bottom: 20
`
const ButtonComponent = styled.View`
  display: flex;
    position: absolute;
    bottom: 0;
  flex-direction: row;
  margin-top: auto;
  margin-bottom: 20  
`

const StyledText = styled.Text`
  color: white;
  font-size: 25px;
  width: 100%;
  text-align: center;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Shop;


