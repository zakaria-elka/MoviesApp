import React, { useEffect, useState} from 'react'
import { StyleSheet, View,ScrollView, Text,Image,Linking , TouchableHighlight,Button} from 'react-native'
import FilmItem from './FilmItem'
import { getImageFromApi } from '../API/TMDBApi'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native';






const FilmDetails =({route})=> {

  const {film} = route.params;
  
const navigation=useNavigation();
 
  const [liked,setLiked] = useState({

    like:"false",
    filmId:"",
    filmTitle:'',

})

const onclick = async ()=>{

  setLiked(Liked=>{
    return {...Liked, film:film.id, filmTitle:film.title}
  })
  try{
    
await  AsyncStorage.setItem('filmTitle',film.title)
  }catch(err){
    alert(err);
  }
}

useEffect(()=>{
  getData();
},[]);
 

const getData=()=>{

try{

AsyncStorage.getItem('filmTitle').then(
value=>{
  if(value != null){
    setLiked(Liked=>{
      return {...Liked,like:"true",filmTitle:value}
    })
  }
}

)

}catch(err){
alert(err)

}}



    return (
      <View style={styles.container}>
                <Button 
onPress={()=>navigation.navigate("maps")}
       title="maps"
       color="black"
     />
        
          <Image
          style={{width:'80%',height:400}}
  source={{uri: getImageFromApi(film.poster_path)}}
   />
     
      <Text style={styles.title}>{film.title}</Text>
    
      {(liked.like=='true' && liked.filmTitle===film.title)?<Text style={styles.title}>liked</Text>:
       <TouchableHighlight onPress={()=>onclick()}>
      <Image
     source={require('./heart.png')}
     style={{width:40,height:40,marginBottom:20}}
    />
</TouchableHighlight>}

    <ScrollView>  
      <Text style={styles.overview}>Overview: {film.overview}</Text>


     <Text style={styles.listView}>Original Language:  {film.original_language}</Text>
     <Text style={styles.listView}>Popularity:  {film.popularity}</Text>
     
     </ScrollView>
     
   
     
     </View>
  
    )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223343',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:5,
   
  },
  title: {

    color:'#FFF',
    fontSize:32,
    fontWeight:'700',
    textAlign:'center',
    marginBottom:30,
  

    
  },
  overview:{
    fontSize:15,
    color:'#FFF',
    marginBottom:20,
  
  },
  listView:{
    fontSize:20,
    fontWeight:'300',
    color:'#FFF',
    width:500,
    textAlign:'left',
    paddingLeft:0,
    paddingBottom:15,
    
 


  },
 

 


  
});

export default FilmDetails