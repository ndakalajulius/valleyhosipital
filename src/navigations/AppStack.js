import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppointmentsScreen from "../screens/app/AppointmentsScreen";
import DashboardScreen from "../screens/app/DashboardScreen";
import DoctorsScreen from "../screens/app/DoctorsScreen";
import ProfileScreen from "../screens/app/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function AppStack() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Doctors" component={DoctorsScreen} />
      <Tab.Screen name="Appointments" component={AppointmentsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
