import { Alert, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import posts from '~/assets/data/posts.json';
import PostListItem from '~/src/components/PostListItem';
import { supabase } from '~/src/lib/supabase';

export default function FeedScreen() {
    // Store posts in a state variable
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      fetchPosts();
    }, [])

    const fetchPosts = async () => {
        let { data, error } = await supabase.from('posts').select('*, user:profiles(*)');

        if (error) {
            Alert.alert('Something went wrong');
        }

        setPosts(data);
    }
    



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