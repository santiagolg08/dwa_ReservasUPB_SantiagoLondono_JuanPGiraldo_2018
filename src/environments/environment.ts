// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAki17Jt5KtqZD0qVRTe3E4-SYrq8IUOEA",
    authDomain: "reservasupb.firebaseapp.com",
    databaseURL: "https://reservasupb.firebaseio.com",
    projectId: "reservasupb",
    storageBucket: "reservasupb.appspot.com",
    messagingSenderId: "608631006074"
  }
};
