import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper'

const Homescreen = () => {
    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title='Home'></Appbar.Content>
            </Appbar.Header>
        </View>
    )
}

export default Homescreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})