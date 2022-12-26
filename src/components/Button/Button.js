import React from 'react'
import { Linking, Text, TouchableOpacity, View} from 'react-native'
import styles from './Button.styles'

function Button(params) {
    return(
        <TouchableOpacity onPress={() => Linking.openURL(params.url)}>
            <View style={styles.container}>
                <Text style={styles.butText}>{params.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button;