import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Button from '../../components/Button';

export default function CreatePost() {
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        if (!image) {
            pickImage();
        }
    }, [image]);

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
            {image ? (
                <Image
                    source={{
                        uri: image,
                    }}
                    className='w-52 aspect-[4/3] rounded-lg'
                />
            ) : (
                <View className='w-52 aspect-[4/3] rounded-lg bg-slate-300' />
            )}
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
              <Button title="Share" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
