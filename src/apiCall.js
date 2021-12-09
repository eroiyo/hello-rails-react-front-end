import axios from 'axios';

const baseURL = 'http://hello-rails-react-backend.herokuapp.com/api/v1/greetings/random';

const getGreeting = async () => {
  const greeting = await axios.get(baseURL)
    .then((res) => {
      const result = res.data;
      return result;
    });
  return greeting;
};

export default getGreeting;
