import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { useAuthStore } from "../store/auth";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

export default function RootNavigation() {
  const { token, loadToken } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      await loadToken();
      setLoading(false);
    };
    init();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {token ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
