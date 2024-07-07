import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

export default function CreatePost() {
    const [caption, setCaption] = useState('');

    return (
        <View className='p-3 items-center flex-1'>
            {/* Image Picker */}
            <Image
                source={{
                    uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
                }}
                className='w-52 aspect-[4/3] rounded-lg'
            />
            <Text onPress={() => console.log('Pressed')} className='text-blue-500 font-semibold m-5'>
                Change
            </Text>

            {/* TextInput for caption */}
            <TextInput
                value={caption}
                onChangeText={(newValue) => setCaption(newValue)}
                placeholder='Description'
                className='bg-white w-full p-3 rounded-lg'
            />

            {/* Button */}
            <View className='mt-auto'>
                <Pressable className='bg-blue-500 w-full p-3 items-center rounded-md' onPress={() => {}}>
                    <Text className='text-white font-semibold'>Share</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
