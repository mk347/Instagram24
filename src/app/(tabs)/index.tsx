import { FlatList } from 'react-native';
import React from 'react';
import posts from '~/assets/data/posts.json';
import PostListItem from '../../components/PostListItem';

export default function FeedScreen() {
    return (
        <FlatList
            data={posts}
            renderItem={({item}) => (
              <PostListItem post={item} />
            )}
            contentContainerStyle={{ gap: 10 }}
            showsVerticalScrollIndicator={false}
        />
    );
}