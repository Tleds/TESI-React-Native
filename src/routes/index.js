import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from '../pages/Home';
import Notifications from '../pages/Notifications';
import Plans from '../pages/Plans';
import PlansFinal from '../pages/PlansFinal';
import Register from '../pages/Register';
import Access from '../pages/Access';
import Trainings from '../pages/Trainings';
import TrainingsDetails from '../pages/TrainingsDetails';


const Routes = createAppContainer(createSwitchNavigator({
  Access:{
    screen: Access,
    navigationOptions:{
      title: 'Entrar'
    }
  },
  Register:{
    screen: Register,
    navigationOptions:{
      title: 'Registrar'
    }
  },
  TrainingsDetails:{
    screen: TrainingsDetails,
    navigationOptions:{
      title: 'Detalhes do treino'
    }
  },
  Trainings:{
    screen: Trainings,
    navigationOptions:{
      title: 'Treinamentos'
    }
  },
  PlansFinal:{
    screen: PlansFinal,
    navigationOptions:{
      title: 'Obrigado'
    }
  },
  Plans:{
    screen: Plans,
    navigationOptions:{
      title: 'Planos'
    }
  },
  Notifications:{
    screen: Notifications,
    navigationOptions:{
      title: 'Notificações'
    }
  },
  Home:{
    screen: Home,
    navigationOptions:{
      title: 'Página inicial'
    }
  },
  
},{
  defaultNavigationOptions:{
    headerTintColor:'#FFF',
    headerBackTitleVisible: false,
    headerStyle:{
      backgroundColor:'#7D40E7'
    }
  }
}));

export default Routes;