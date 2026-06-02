# Elementrip

(2026 관광 데이터 활용 공모전)

사주 기반 맞춤 웰니스 여행 큐레이션 앱.

> "내 안의 사주와 지역의 기운이 만나는 순간, 데이터로 설계하는 가장 나다운 여행"

## 시작하기

1. 의존성 설치

   ```bash
   npm install
   ```

2. 앱 실행

   ```bash
   npx expo start
   ```

실행 후 아래 방법으로 앱을 열 수 있습니다.

- iOS 시뮬레이터: `i` 키
- Android 에뮬레이터: `a` 키
- 실기기: Expo Go 앱으로 QR코드 스캔

## 기술 스택

- [Expo SDK 56](https://docs.expo.dev/versions/v56.0.0/)
- [Expo Router](https://docs.expo.dev/router/introduction/) — 파일 기반 라우팅
- [NativeTabs](https://docs.expo.dev/) — iOS 리퀴드 글래스 탭바

## 환경 변수

`.env` 파일을 루트에 생성하고 아래 키를 입력하세요.

```
EXPO_PUBLIC_KTO_API_KEY=   # 한국관광공사 OpenAPI
EXPO_PUBLIC_KMA_API_KEY=   # 기상청 API
```

## 주요 화면

| 탭        | 설명                                |
| --------- | ----------------------------------- |
| 나의 사주 | 생년월일시 입력, 5대 기운 분포 차트 |
| 맞춤 추천 | 궁합 점수 기반 관광지 추천          |
| 여행길    | 맞춤 코스 및 동선 추천              |
| 나의 기록 | 방문 인증 스탬프첩                  |
