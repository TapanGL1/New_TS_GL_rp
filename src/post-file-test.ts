import { sleep, check } from 'k6';
import { Options } from 'k6/options';
import http, { StructuredRequestBody } from 'k6/http';

const binFile = open('test.png', 'b');
const url = `https://cdn.segment.com/v1/projects/D85a8FDQrDeMzkihHnm5r2ulc2APP2vt/settings`;

export let options:Options = {
  vus: 5,
  duration: '10s'
};

export default (): void => {
  const postData: StructuredRequestBody = { file: http.file(binFile) };
  const response = http.post(url, postData);

  check(response, {
    'status is 200': r => r.status === 200,
  });

  sleep(1);
};
