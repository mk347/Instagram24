import { Image, Text, useWindowDimensions, View } from 'react-native';
import React from 'react';
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import { AdvancedImage } from 'cloudinary-react-native';

// Import required actions and qualifiers.
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn';

import { cld } from '../lib/cloudinary';

type Post = {
    post: {
        id: string;
        image: string;
        image_url: string;
        caption: string;
        user: {
            id: string;
            avatar_url: string;
            image_url: string;
            username: string;
        };
    };
};

export default function PostListItem({ post }: Post) {
    const { width } = useWindowDimensions();

    // cld.image returns a CloudinaryImage with the configuration set.
    const image = cld.image(post.image);
    // Crop the image, focusing on the face.
    image.resize(thumbnail().width(width).height(width));

    const avatar = cld.image(post.user.avatar_url);
    avatar.resize(thumbnail().width(48).height(48).gravity(focusOn(FocusOn.face())));

    return (
        <View className='bg-white'>
            <View className='flex-row items-center gap-3 p-3'>
                <AdvancedImage cldImg={avatar} className='w-12 aspect-square rounded-full' />
                <Text className='font-semibold'>{post.user.username}</Text>
            </View>

            <AdvancedImage cldImg={image} className='w-full aspect-square' />

            <View className='flex-row gap-3 p-3'>
                <AntDesign name='hearto' size={20} />
                <Ionicons name='chatbubble-outline' size={20} />
                <Feather name='send' size={20} />

                <Feather name='bookmark' size={20} className='ml-auto' />
            </View>
        </View>
    );
}
