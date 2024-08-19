import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

export default function Home() {
  return (
    <Redirect href="/(auth)" />
  )
}

const styles = StyleSheet.create({})