import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import CommonCard from '../common/CommonCard';

const CustomDrawer = ({navigation}) => {
  const [name, setname] = useState('Dhruv Aggarwal');
  const [activity, setactivity] = useState(1);
  const [order, setorder] = useState(2);
  const [visible, setvisible] = useState([0, 0, 0]);

  const toggleValueAtIndex = (index) => {
     const updatedVisible = [...visible];
     updatedVisible[index] = visible[index] ? 0 : 1;
     setvisible(updatedVisible);
  };
   return (
    <>
      <ImageBackground
        className="h-[220px]  flex items-center rounded-full object-contain"
        source={require('../assets/drawerbackground.gif')}>
        <Image
          className="h-[100px]  mt-4 mb-2 w-[100px] rounded-full object-contain"
          source={require('../assets/profile.png')}></Image>
        <Text className="text-white text-left   font-semibold text-[18px]">
          {' '}
          {name}
        </Text>
        <Text className="text-white text-left   font-semibold text-[18px]">
          {' '}
          Activities : {activity}
        </Text>
        <Text className="text-white text-left   font-semibold text-[18px]">
          {' '}
          Orders: {order}
        </Text>
      </ImageBackground>
      <View className="flex flex-col px-2">
        <TouchableOpacity className="py-4 mt-1 flex flex-row justify-start   items-center px-4 rounded-sm" onPress={()=>toggleValueAtIndex(0)}>
          <Image
            className="w-[30px] h-[30px]"
            source={require('../assets/profileicon.png')}></Image>
          <Text className="ml-12 text-[18px] text-gray-500 font-extrabold text-center">
            Profile
          </Text>
        </TouchableOpacity>
        {visible[0] ?
        <>
        <Text className="mb-1">Edit Your Name :</Text>
        <TextInput
          className="text-[15px] px-4 border-[1px] border-black rounded-md"
          value={name}
          onChangeText={(text) =>( setname(text))}
          placeholder="Name"></TextInput>
        </>
        :null}
        <TouchableOpacity className="py-4 mt-1 flex flex-row justify-start   items-center px-4 rounded-sm"  onPress={()=>toggleValueAtIndex(1)}>
          <Image
            className="w-[30px] h-[30px]"
            source={require('../assets/activity.webp')}></Image>
          <Text className="ml-12 text-[18px] text-gray-500 font-extrabold text-center">
            Activity
          </Text>
        </TouchableOpacity>
        {visible[1] ?
        <>
        <Text className="mb-1">Edit Your Activity Nos :</Text>
        <TextInput
          className="text-[15px] px-4 border-[1px] border-black rounded-md"
          value={activity}
          keyboardType="numeric"
          onChangeText={(text) =>( setactivity(text))}
          placeholder="Activity"></TextInput>
        </>
        :null}
        <TouchableOpacity className="py-4 mt-1 flex flex-row justify-start   items-center px-4 rounded-sm"  onPress={()=>toggleValueAtIndex(2)}>
          <Image
            className="w-[30px] h-[30px]"
            source={require('../assets/order.png')}></Image>
          <Text className="ml-12 text-[18px] text-gray-500 font-extrabold text-center">
            Order
          </Text>
        </TouchableOpacity>
        {visible[2] ?
        <>
        <Text className="mb-1">Edit Your Order Nos :</Text>
        <TextInput
          className="text-[15px] px-4 border-[1px] border-black rounded-md"
          value={order}
          keyboardType="numeric"
          onChangeText={(text) =>( setorder(text))}
          placeholder="Orders"></TextInput>
        </>
        :null}
      </View>
    </>
  );
};

export default CustomDrawer;
