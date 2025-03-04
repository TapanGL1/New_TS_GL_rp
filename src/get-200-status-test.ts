import { sleep, check } from 'k6';
import { Options } from 'k6/options';
import http from 'k6/http';

export let options:Options = {
  vus: 1,
  duration: '30s'
};
const session = new Httpx();
export default () => {
  const res = http.get('https://cdn.segment.com/v1/projects/D85a8FDQrDeMzkihHnm5r2ulc2APP2vt/settings');
  session.addHeaders({
  'accept': '*/*',
  'accept-encoding': 'gzip, deflate, br, zstd',
  'Content-Type': 'application/json',
  'referer': 'https://app-stage.pluralsight.com/library/',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36',
});
  check(res, {
    'status is 200': () => res.status === 200,
  });
  sleep(1);
};
