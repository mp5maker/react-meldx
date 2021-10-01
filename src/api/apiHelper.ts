import axios from './axios'

interface IUserPostBodyProps {
  email: string
  password: string
}

interface INotifyPostBodyProps {
  name: string
  email: string
  repoUrl: string
  message: string
}

const apiHelper = {
  info: {
    get: () => axios.get('/')
  },
  user: {
    login: ({ body }: { body: IUserPostBodyProps }) =>
      axios.post('/login', body)
  },
  devicies: {
    getAll: () => axios.get('/devices')
  },
  notify: {
    post: ({ body }: { body: INotifyPostBodyProps }) =>
      axios.post('/notify', body)
  }
}

export default apiHelper
