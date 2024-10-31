import { StatusBar } from "expo-status-bar";
import { Link, Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Welcome = () => {

  return (
    <SafeAreaView className="bg-white text-black h-full">

      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">

          <View className="relative mt-5">
          </View>
          <Link href="/home" className="color-blue-600 text-4xl mt-6">Go To Home</Link>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;