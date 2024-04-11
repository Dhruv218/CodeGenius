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
export const Community = () => {
  return (
    <><Text className='absolute'></Text>
      <ScrollView className="bg-white">
        <Image
          className="h-[300px] w-full object-contain"
          source={require('../assets/communityheader.gif')}></Image>
        <Text className="text-[25px] text-start pl-8 mt-4 text-red-500 font-bold ">
          What Are Community Offers ?
        </Text><Text className="text-[16px] text-start pl-8 mt-2 text-black font-bold ">
        {`\u2022`} Collaborations with{' '}
          <Text className="text-[16px] text-start pl-8 mt-2 text-red-500 font-bold ">
            trusted brands and industry experts{' '}
          </Text>{' '}
          to establish credibility.
        </Text>
        <Text className="text-[16px] text-start pl-8 mt-2 text-black font-bold ">
        {`\u2022`} Commitment to high standards for{' '}
          <Text className="text-[16px] text-start pl-8 mt-2 text-green-500 font-bold ">
            content and interactions, reassuring visitors.{' '}
          </Text>{' '}
        </Text>
        <Text className="text-[16px] text-start pl-8 mt-2 text-black font-bold ">
        {`\u2022`}  Active participation from{' '}
          <Text className="text-[16px] text-start pl-8 mt-2 text-orange-500 font-bold ">
            members, highlighted prominently to encourage interaction.{' '}
          </Text>{' '}
        </Text>
        <Text className="text-[16px] text-start pl-8 mt-2 text-black font-bold ">
        {`\u2022`}  Inclusion of{' '}
          <Text className="text-[16px] text-start pl-8 mt-2 text-purple-500 font-bold ">
            developers, educators, and professionals
          </Text>{' '}
          showcasing diversity.{' '}
        </Text>
        <Text className="text-[16px] text-start pl-8 mt-2 text-black font-bold ">
        {`\u2022`}  Dedicated assistance{' '}
          <Text className="text-[16px] text-start pl-8 mt-2 text-yellow-200 font-bold ">
            available, prominently displayed for easy access.
          </Text>
        </Text>
      </ScrollView>
    </>
  );
};
