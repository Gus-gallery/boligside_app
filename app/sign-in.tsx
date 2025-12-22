import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />

        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Velkommen til OmBolig
          </Text>

          <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
            Lad os finde dit nye hjem!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
