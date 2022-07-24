## Install and Build
​
- Install node_modules via ```yarn install```
​
-  ### Android TV
        - Create local.properties file and your android SDK path to it
        - Open your Android TV simulator like Android TV (1080p)
        - Build & Run via `npm run android` or `react-native run-android`
​
- ### Apple tvOs
       - Install pods via `cd ios && pod install && cd ..`
       - Build & Run via `npx react-native run-ios  --simulator "Apple TV" --scheme "DummyTVApp-tvOS"`

## Folder Structure
```
├── App.js
├── Gemfile
├── Gemfile.lock
├── README.md
├── __tests__
│   └── App-test.js
├── app.json
├── assets
│   ├── images.js
│   ├── modernfamily.jpg
│   └── strangerthings.jpeg
├── babel.config.js
├── index.js
├── metro.config.js
├── package.json
├── src
│   ├── components
│   │   └── MoviePoster.js
│   ├── constants
│   │   └── TvEvents.js
│   ├── mobx-state
│   │   └── index.js
│   ├── navigators
│   │   └── MainNavigator.js
│   └── screens
│       └── Home.js
└── yarn.lock
```