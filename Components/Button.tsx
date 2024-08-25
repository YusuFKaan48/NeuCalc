import React from "react";
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle, Image, View } from "react-native";

interface ButtonProps {
    onPress: () => void;
    title?: string; 
    iconSource?: any; 
    iconColor?: string;
    style?: StyleProp<ViewStyle>;
}

export default function Button({ title, iconSource, onPress, style }: ButtonProps) {
    return (
        <View style={[styles.shadow]}>
        <TouchableOpacity 
            style={[styles.buttonContainer, style]}
            onPress={onPress}
        >
            {iconSource ? (
                <Image source={iconSource} style={styles.icon} />
            ) : (
                <Text style={styles.buttonText}>{title}</Text>
            )}
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 64,
        width: 64,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 12,
        backgroundColor: '#F5F6F9', 
        shadowColor: '#24415D',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    shadow: {
        shadowColor: '#FFFFFF',
        shadowOffset: { width: -4, height: -4 },
        shadowOpacity: 1,
        shadowRadius: 3,
    },
    buttonText: {
        color: '#000000',
        fontSize: 36,
        fontWeight: '500', 
    },
    icon: {
        width: 36,
        height: 36,
    }
});
