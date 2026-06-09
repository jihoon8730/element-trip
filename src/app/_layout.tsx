import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="detail"
        options={{ title: "물가 상세", headerBackTitle: "홈" }}
      />
    </Stack>
  );
}
