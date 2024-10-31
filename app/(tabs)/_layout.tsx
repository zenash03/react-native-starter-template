import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import DynamicIcon from '@/components/DynamicIcon'
import * as Icon from 'phosphor-react-native';

interface TabIconProps {
    icon: keyof typeof Icon;
    color: string;
    name: string;
    focused: boolean;
  }
  

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
    return (
      <View className="flex items-center justify-center gap-2">
        <DynamicIcon icon={icon} color={color} weight={focused ? "fill" : "regular"} />
        <Text
          className={`${focused ? "font-semibold" : "font-regular"} text-sm`}
          style={{ color: color }}
        >
          {name}
        </Text>
      </View>
    );
  };

const TabLayout = () => {
  return (
    <>
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#38bdf8",
                tabBarInactiveTintColor: "#CDCDE0",
                tabBarStyle: {
                    backgroundColor: "#ffffff",
                    borderTopWidth: 1,
                    borderTopColor: "#ffffff",
                    height: 84,
                },
            }}
        >
            <Tabs.Screen 
                name="home"
                options={{
                    title: "",
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                            focused={focused}
                            icon="House"
                            color={color}
                            name="Home"
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="schedule"
                options={{
                    title: "",
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                            focused={focused}
                            icon="CalendarBlank"
                            color={color}
                            name="Schedule"
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="profile"
                options={{
                    title: "",
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                            focused={focused}
                            icon="User"
                            color={color}
                            name="Profile"
                        />
                    )
                }}
            />


        </Tabs>
    </>
  )
}

export default TabLayout