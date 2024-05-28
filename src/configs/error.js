import { message } from 'antd'

const errorHandler = (status) => async () => {
  message.error(status)
  if (status) {
    console.log(status);
  } else {
    console.log('Error');
  }
}

export default errorHandler