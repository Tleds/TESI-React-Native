import React, { useState } from 'react';

import {AssyncStorageStatic, Modal, TouchableOpacity} from 'react-native';

import { Container, LeftIcon, RightIcon, PageTitle, Link } from './styles';

function Header({navigation, route, ...props}) {

  const [open, setOpen] = useState(false);

  const handleLogout = async ()=>{
    await AssyncStorageStatic.setItem('token',undefined);
    navigation.navigate('Access');
    return
  }
  return (
      <>
        {/* <Modal 
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={() => {
          setModalVisible(!open);
        }}
        >
          <PageTitle>{AssyncStorageStatic.getItem('name') || 'Tiago'}</PageTitle>
          <Button
            onPress={handleLogout}
          >Sair
          </Button>
        </Modal> */}
        <Container>
          {props.back ? (
            <>
            <TouchableOpacity 
              onPress={()=>  navigation.navigate('Home')}
            >
              <LeftIcon 
                source={require('../../assets/images/back_arrow.png')} 
                resizeMode={'contain'}
              />
            </TouchableOpacity>
            </>
          ) : (
            <>
            <TouchableOpacity
              onPress={()=> setOpen(!open)}
            >
              <LeftIcon 
                source={require('../../assets/images/burger_menu_button.png')} 
                resizeMode={'contain'}
              />
            </TouchableOpacity>
            </>
            )}
          <PageTitle>{props.pageTitle}</PageTitle>
          <TouchableOpacity
            onPress={()=>  navigation.navigate('Notifications')}
          >
            <RightIcon 
              source={require('../../assets/images/notifications.png')} 
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </Container>  
      </>
  );
}

export default Header;