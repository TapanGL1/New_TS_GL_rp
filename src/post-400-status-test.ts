import { sleep, check } from 'k6';
import { Options } from 'k6/options';
import http from 'k6/http';

export let options:Options = {
  vus: 1,
  duration: '30s'
};

export default () => {
  const res = http.get('https://app.launchdarkly.com/sdk/evalx/5a7c7b5afd95332db01686a0/users/eyJrZXkiOiI3MjViNWE5Mi0zMTBiLTQ4YWUtYmMwNy00YjEyOWFkODhkMGQiLCJjdXN0b20iOnsiY2xhaW1zIjpbXSwiY3VycmVudFBsYW5JZCI6IjE4MDBjb250YWN0cyIsInBsYW5JZHMiOlsiMTgwMGNvbnRhY3RzIl19fQ');
  check(res, {
    'status is 200': () => res.status === 200,
  });
  sleep(1);
};
