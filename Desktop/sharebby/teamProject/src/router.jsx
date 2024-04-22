import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import SearchId from "./pages/SearchUserInfo/SearchId";
import SearchPassword from "./pages/SearchUserInfo/SearchPassword";

const Stack = createNativeStackNavigator();



const LoginTab = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
      <Stack.Screen name="SearchId" component={SearchId}/>
      <Stack.Screen name="SearchPassword" component={SearchPassword}/>
    </Stack.Navigator>

  )
}

  
  const Router = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
       
        <Stack.Screen name="Login" component={LoginTab} />
        
        <Stack.Screen name="Main" component={Main} />
        
      </Stack.Navigator>
    );
  };
  export default Router;
