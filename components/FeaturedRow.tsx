import { View, Text, ScrollView } from "react-native"
import React from "react"
import { ArrowRightIcon } from "react-native-heroicons/outline"
import RestaurantCard from "./RestaurantCard"

type FeaturedRowProps = {
  id: string
  title: string
  description: string
  featuredCategory: string
}

const FeaturedRow = ({ id, description, title }: FeaturedRowProps) => {
  return (
    <View className="">
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>
      <Text className="text-gray-500 text-xm px-4">{description}</Text>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        className="pt-4"
      >
        <RestaurantCard
          id={1}
          title={"Podrão"}
          imgUrl={"https://bit.ly/476rr1W"}
          rating={4.5}
          genre={"Lanche"}
          address={"Rua diferentona, 123"}
          short_description={""}
          dishes={[]}
          long={0}
          lat={0}
        />
        <RestaurantCard
          id={1}
          title={"Podrão"}
          imgUrl={"https://bit.ly/476rr1W"}
          rating={4.5}
          genre={"Lanche"}
          address={"Rua diferentona, 123"}
          short_description={""}
          dishes={[]}
          long={0}
          lat={0}
        />
        <RestaurantCard
          id={1}
          title={"Podrão"}
          imgUrl={"https://bit.ly/476rr1W"}
          rating={4.5}
          genre={"Lanche"}
          address={"Rua diferentona, 123"}
          short_description={""}
          dishes={[]}
          long={0}
          lat={0}
        />
        <RestaurantCard
          id={1}
          title={"Podrão"}
          imgUrl={"https://bit.ly/476rr1W"}
          rating={4.5}
          genre={"Lanche"}
          address={"Rua diferentona, 123"}
          short_description={""}
          dishes={[]}
          long={0}
          lat={0}
        />
        <RestaurantCard
          id={1}
          title={"Podrão"}
          imgUrl={"https://bit.ly/476rr1W"}
          rating={4.5}
          genre={"Lanche"}
          address={"Rua diferentona, 123"}
          short_description={""}
          dishes={[]}
          long={0}
          lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow
