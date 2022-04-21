import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View,Button ,TouchableHighlight,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './Components/Search';
import FilmDetails from './Components/FilmDetails';
import Maps from './Components/maps';
import { getFilmsFromApiWithSearchedText } from './API/TMDBApi';




export default function App() {
  const Stack = createStackNavigator();
  



  return (
    <NavigationContainer>
     <Stack.Navigator>
      
       <Stack.Screen name="Search" component={Search} options={{title:"Welcome",headerTitleAlign:"center"}}/>
       <Stack.Screen name="Details" component={FilmDetails} options={{title:"Details",headerTitleAlign:"center"}}/>
       <Stack.Screen name="maps" component={Maps} options={{title:"Maps",headerTitleAlign:"center"}}/>
     </Stack.Navigator>

      
    </NavigationContainer>
     
  );
}

