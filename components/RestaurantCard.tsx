import { View, Text, TouchableOpacity, Image } from "react-native"
import React from "react"
import { StarIcon } from "react-native-heroicons/solid"
import { MapPinIcon } from "react-native-heroicons/outline"

type RestaurantCardProps = {
  id: number
  title: string
  imgUrl: string
  rating: number
  genre: string
  address: string
  short_description: string
  dishes: string[]
  long: number
  lat: number
}

const RestaurantCard = ({
  address,
  dishes,
  genre,
  id,
  imgUrl,
  lat,
  long,
  rating,
  short_description,
  title,
}: RestaurantCardProps) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow-sm">
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-sm" />
      <View className="px-3 pb-4 space-y-1">
        <Text className="font-bold text-lg pt-2">{title}</Text>

        <View className="flex-row items-center space-x-1">
          <StarIcon color="#00ccbb" size={20} />
          <Text className="text-xm text-gray-500">
            <Text className="font-bold text-deliveroo-green">{rating}</Text> •{" "}
            {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color={"gray"} size={20} opacity={0.4} />
          <Text className="text-xm text-gray-500">Nearby • {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard
