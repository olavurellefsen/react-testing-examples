import { ServerCounter } from './components';

let count = 5;

let mockGet = {
  url: '/count',
  method: 'GET',
  response: (req, res) => res.status(200).body(count)
};

let mockPost = {
  url: '/count',
  method: 'POST',
  response: (req, res) => res.status(200).body(++count)
};

export default {
  component: ServerCounter,
  xhr: [mockGet, mockPost]
};