import React, {useContext} from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Alert, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
const styles = StyleSheet.create({
    icon: {
        fontSize: 25
    }
})

const TabArea = styled.View`
    height: 60px;
    background-color: #4eadbe;
    flex-direction: row;
    
`;

const TabItem = styled.TouchableOpacity`
    flex:1;
    justify-content: center;
    align-items:center;
`;

const TabItemCenter = styled.TouchableOpacity`
width:70px;
height:70px;
justify-content:center;
align-items:center;
background-color:#fff;
border-radius:35px;
border:3px solid #4eadbe;
margin-top:-20px;
`;

const AvatarIcon = styled.Image`
  width: 24px;
  height: 24px;
  border-radius:12px
`;
export default ({ navigation}) => {
    const email = useSelector(state=>state.user.email)
    const goTo = (screenName, pageAux=null) => {
        navigation.navigate(screenName, pageAux ? {namePage: pageAux} : null)
    }

    return (
      <TabArea>
        <TabItem onPress={() => goTo("Feed")}>
        <Icon name='home' style={styles.icon} color="#000" />
        </TabItem>
        <TabItem onPress={() => goTo("AddPhoto")}>
          <Icon name='camera' style={styles.icon} color="#000" />
          
        </TabItem>
        <TabItem onPress={() => email ?  goTo("Profile") : goTo("MainStack", 'Login')}>
          <Icon name='user' style={styles.icon} color="#000" />
          
        </TabItem>
        </TabArea>
    );
}