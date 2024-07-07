import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function CreatePost() {
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
      if(!image) {
        pickImage();
      }
    }, [image])
    

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View className='p-3 items-center flex-1'>
            {/* Image Picker */}
            <Image
                source={{
                    uri: image,
                }}
                className='w-52 aspect-[4/3] rounded-lg'
            />
            <Text onPress={pickImage} className='text-blue-500 font-semibold m-5'>
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
