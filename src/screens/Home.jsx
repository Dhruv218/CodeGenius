import React from 'react';
import {
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function Home(props) {
  return (
    <>
    <Text className='absolute'></Text>
      <ImageBackground
        className="h-full w-full object-cover"
        source={require('../assets/background.gif')}>
        <ScrollView>
          <Text className="text-white font-bold text-[29px] mx-auto my-6">
            Welcome To CodeGenius
          </Text>
          <Text className="text-white text-center text-[18px]">
            Welcome to CodeLand! Your gateway to endless possibilities in the
            world of coding. Explore, learn, and innovate with our curated
            collection of resources, tutorials, and community support. Start
            your coding journey today!"
          </Text>
          <View className="flex flex-col mt-8 mb-4 items-center">
            <Text className="text-[25px] text-center text-purple-500 font-bold ">
              Start Your Free Tutorial Now
            </Text>
            <View className="flex justify-between px-8 flex-row gap-12">
              <TouchableOpacity activeOpacity={0.7}>
                <Text className="text-[20px]   px-6 py-3 rounded-lg bg-green-500 text-white my-4">
                  Get Started
                </Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7}>
                <Text className="text-[20px]   px-6 py-3 rounded-lg bg-red-500 text-white my-4">
                  Docx
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text className="text-[25px] text-center text-white font-bold ">
              Why Join Us ?
            </Text>
            <Text className="text-white pl-8  text-[18px]">
              <Text className="text-[25px] font-bold text-red-500">{'->'} </Text> 
              Large Community Support
            </Text>
            <Text className="text-white  pl-8 text-[18px]">
              <Text className="text-[25px] font-bold text-red-500">{'->'} </Text> 
              Lots of Tutorials
            </Text>
            <Text className="text-white  pl-8 text-[18px]">
              <Text className="text-[25px] font-bold text-red-500">{'->'} </Text> 
              Large Impact on Market
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
}

export default Home;
