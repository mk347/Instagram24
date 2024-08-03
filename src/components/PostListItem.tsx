import { Image, Text, View } from 'react-native';
import React from 'react';
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';

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
    return (
        <View className='bg-white'>
            <View className='flex-row items-center gap-3 p-3'>
                <Image source={{ uri: post?.user.image_url }} className='w-12 aspect-square rounded-full' />
                <Text className='font-semibold'>{post.user.username}</Text>
            </View>
            <Image source={{ uri: post?.image_url }} className='w-full aspect-square' />
            <View className='flex-row gap-3 p-3'>
                <AntDesign name='hearto' size={20} />
                <Ionicons name='chatbubble-outline' size={20} />
                <Feather name='send' size={20} />

                <Feather name='bookmark' size={20} className='ml-auto' />
            </View>
        </View>
    );
}
