import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const ResultsList = ({title,results}) => {
    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text>Results : {results.length}</Text>
            <FlatList
                horizontal={true}
                
            />
        </View>
    )
}

export default ResultsList

const styles = StyleSheet.create({
    titleStyle:{
        fontSize: 18,
        fontWeight: 'bold'
    }
})
