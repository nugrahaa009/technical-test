import axios from 'axios'

export const GET = (path, params) => {
  return new Promise((resolve, reject) => {
    axios.get(`${path}`, { params }).then((response) => {
      if (response.status === 200) {
        return resolve(response.data)
      }
      const error = response.message
      return reject(error)
    }).catch((err) => {
      const error = err.response.data.message
      return reject(error)
    })
  })
}