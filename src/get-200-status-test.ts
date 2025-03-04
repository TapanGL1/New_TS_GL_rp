import { sleep, check } from 'k6';
import { Options } from 'k6/options';
import http from 'k6/http';

export let options:Options = {
  vus: 1,
  duration: '30s'
};
const session = new Httpx();
export default () => {
  const res = http.get('https://c.us.heap-api.com/api/capture/v2/track');
  check(res, {
    'status is 200': () => res.status === 200,
  });
  sleep(1);
};
