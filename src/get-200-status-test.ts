import { sleep, check } from 'k6';
import { Options } from 'k6/options';
import http from 'k6/http';

export let options:Options = {
  vus: 50,
  duration: '10s'
};

export default () => {
  const res = http.get('https://cdn.segment.com/v1/projects/D85a8FDQrDeMzkihHnm5r2ulc2APP2vt/settings');
  check(res, {
    'status is 200': () => res.status === 200,
  });
  sleep(1);
};
