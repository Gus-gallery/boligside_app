import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "../constants/icons";
import images from "../constants/images";

const SignIn = () => {
  const handleLogin = () => {
    // Handle Google login logic here
  };

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

          <Text className="text-lg font-rubik text-center text-black-200 mt-12">
            Login på OmBolig med Google konto
          </Text>

          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-6"
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg ml-2 font-rubik-medium text-black-300">
                Fortsæt med Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
