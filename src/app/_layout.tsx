import { StyleSheet } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import '../../global.css';
import AuthProvider from '../providers/AuthProvider';

export default function RootLayout() {
    return (
        <AuthProvider>
            <Stack screenOptions={{ headerShown: false }} />
        </AuthProvider>
    )
}

const styles = StyleSheet.create({});
