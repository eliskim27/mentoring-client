// parse incoming data
    const parseData = response => response.json()
// error handler
    const catchError = error => console.log(`%c${error}`, 'color: red;')

const mentorsURL = `http://localhost:3000/api/v1/mentors`
// GET to /mentors
    export const getMentors = () => fetch(mentorsURL)
    .then(parseData)
    .catch(catchError)

const menteesURL = `http://localhost:3000/api/v1/mentees`
// GET to /mentees
    export const getMentees = () => fetch(menteesURL)
    .then(parseData)
    .catch(catchError)

const connectionsURL = `http://localhost:3000/api/v1/connections`
// GET to /connections
    export const getConnections = () => fetch(connectionsURL)
    .then(parseData)
    .catch(catchError)
