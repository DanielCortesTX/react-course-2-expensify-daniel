import * as firebase from 'firebase'

const config = {
    // apiKey: "AIzaSyCSIJILp03NGIeCreYPCv4qbATW9okQNvc",
    // authDomain: "expensify-32983.firebaseapp.com",
    // databaseURL: "https://expensify-32983.firebaseio.com",
    // projectId: "expensify-32983",
    // storageBucket: "expensify-32983.appspot.com",
    // messagingSenderId: "9620457935"
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
    
  }

  firebase.initializeApp(config)

  const database = firebase.database()

  export { firebase, database as default }

//   database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
//   })

//   database.ref('expenses').on('child_changed', (snapshot) => {
//       console.log(snapshot.key, snapshot.val())
//   })

//   database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
//   })

//   database.ref('expenses').on('value', (snapshot) => {
//       const expenses = []

//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
//   })

//   database.ref('expenses').push({
//       description: 'water bill',
//       amount: 2000,
//       note: 'do it or lose it',
//       createdAt: 10000
//   })

 




//   database.ref('notes').push({
//       title: 'course topics',
//       body: 'React native, angular, python'
//   })


//   database.ref('notes').set(notes)
//   database.ref('notes/12')

//   const onValueChange = database.ref().on('value', (snapshot) => {

//     const dataName = snapshot.val().name
//     const dataPosition  = snapshot.val().job.company
//     const dataJob = snapshot.val().job.title
//     console.log(`${dataName} is a ${dataJob} at ${dataPosition}`)
//   })

//   setTimeout(() => {
//     database.ref('name').set('Jean Luc')
//   }, 6000)

//   const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
//   }, (e) => {
//       console.log('error with data fetching', e)
//   })

//   setTimeout(() => {
//     database.ref('age').set(29)
//   }, 5000)

//   setTimeout(() => {
//     database.ref().off()
//   }, 7000)

//   setTimeout(() => {
//     database.ref('age').set(35)
//   }, 10000)

//   database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     })

//   database.ref().set({
//       name: 'Daniel Cortes',
//       age: 29,
//       job: {
//           title: 'actor',
//           company: 'freelance'
//       },
//       stressLevel: 6,
//       location: {
//           city: 'San Antonio',
//           country: 'United States'
//       }
//   }).then(() => {
//       console.log('Data is saved')
//   }).catch((error) => {
//     console.log('This failed', error)
//   })

//   database.ref().update({
//       stressLevel: 9,
//       'job/company': 'CAA',
//       'location/city': 'Los Angeles'
//   }).then(() => {
//       console.log('update was successful')
//   }).catch((e) => {
//         console.log('there was a problem', e)
//   })