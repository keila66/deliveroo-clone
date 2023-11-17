import { View, Text, ScrollView } from "react-native"
import React from "react"
import CategoryCard from "./CategoryCard"

const Categories = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl="https://bit.ly/476rr1W" title="testing 1" />
      <CategoryCard imgUrl="https://bit.ly/476rr1W" title="testing 2" />
      <CategoryCard imgUrl="https://bit.ly/476rr1W" title="testing 3" />
      <CategoryCard imgUrl="https://bit.ly/476rr1W" title="testing 4" />
      <CategoryCard imgUrl="https://bit.ly/476rr1W" title="testing 5" />
      <CategoryCard imgUrl="https://bit.ly/476rr1W" title="testing 6" />
      <CategoryCard imgUrl="https://bit.ly/476rr1W" title="testing 7" />
    </ScrollView>
  )
}

export default Categories
