import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Icon sf="moon.stars.fill" md="auto_awesome" />
        <NativeTabs.Trigger.Label>나의 사주</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="recommend">
        <NativeTabs.Trigger.Icon sf="wand.and.stars" md="map" />
        <NativeTabs.Trigger.Label>맞춤 추천</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="course">
        <NativeTabs.Trigger.Icon sf="map" md="hiking" />
        <NativeTabs.Trigger.Label>여행길</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="archive">
        <NativeTabs.Trigger.Icon sf="archivebox" md="inventory_2" />
        <NativeTabs.Trigger.Label>나의 기록</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
