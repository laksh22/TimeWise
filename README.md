# TimeWise

Code for CZ3002 - Advanced Software Engineering

> TimeWise will allow a user to login using their university credentials and then their timetable will be scraped from the university website and added to our database. They will then be given a 7 day list of lessons that they have enrolled in and will be able to add personal tasks to this list.

## Installation

The published application can be found at [this link](https://expo.io/@/timewise)

If you would like to run the code locally, these are the steps you need to take:

> Note: Your machine must have Node 12 LTS or later installed. For more information, visit this [site](https://reactnative.dev/docs/environment-setup). For instructions on setting up Node and NPM, visit this [link](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

1. Install Expo onto your machine using `npm install -g expo-cli`
2. Install the Expo mobile app - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_SG), [Apple](https://apps.apple.com/us/app/expo-client/id982107779)
3. Install the dependencies using `npm install` inside the `client/TimeWise` folder
4. Start Expo by running `expo start` inside `client/TimeWise` and scan the QR on your phone to open the app. Alternatively, connect your phone to your laptop via USB and click on `Run on Androice device/emulator` in the Expo dashboard.

## Brief overview of the code

The code for the backend can be found in `nodebe` and the code for the frontend can be found in `client/TimeWise`:

### Client Code

There are 2 main files of importance and 2 folders of importance:

1. `App.js` - Entry point to the app and contains all information for routing between pages
2. `styles.js` - Contains all UI styling information for components used for TimeWise
3. `/assets` - Contains all images and icons used by TimeWise
4. `/context` - Contains files related to the Redux architecture implemented using React Context API
5. `/components` - Contains most of the code for the different UI components used in the app
