import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DeviceHelper} from '../utils/helper';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Projects} from '../screens/Dashboard';
import { Colors } from '../constants/colors';
import { Fonts } from '../constants/fonts';

interface CardProps {
  project: Projects;
}

const Card: React.FC<CardProps> = ({project}) => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.root}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg',
        }}
      />
      <View style={styles.cardDetails}>
        <Text style={styles.projectTitle}>{project.title}</Text>
        <View style={styles.cardBottom}>
          <Text style={styles.description}>{project.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: DeviceHelper.calculateWidthRatio(257),
    elevation: 2,
    backgroundColor: Colors.whiteBackGround,
    overflow: 'hidden',
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  image: {
    height: DeviceHelper.calculateWidthRatio(163),
  },
  cardDetails: {
    paddingHorizontal: 15,
  },
  projectTitle: {
    fontSize: 23,
    fontFamily: Fonts.semiBold,
    fontWeight: '700',
    color: Colors.titleColor,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  description: {
    fontSize: 12,
    fontFamily: Fonts.semiBold,
    fontWeight: '400',
    color: Colors.titleColor,
  },
 
});
