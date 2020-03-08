import axios from 'axios'

// check if token passed in
const setAuthToken = token => {
  // set in global header
  if(token) {
    axios.defaults.headers.common['x-auth-token'] = token
  } else {
    // if not delete it
    delete axios.defaults.headers.common['x-auth-token']
  }
}

export default setAuthToken
