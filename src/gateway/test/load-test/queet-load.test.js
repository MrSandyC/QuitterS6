import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<500'], // 95 percent of response times must be below 500ms
  },
  scenarios: {
    different_scaling: {
      exec: 'AllQueetTest',
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '4m', target: 200 },
        { duration: '7m30s', target: 100 },
        { duration: '2m', target: 0 },
      ],
    },
    different_scaling_profile: {
      exec: 'QueetByUserProfile',
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '30s', target: 20 },
        { duration: '1m30s', target: 10 },
        { duration: '20s', target: 0 },
      ],
    },
  },
};

export function AllQueetTest() {
  const res = http.get('http://localhost:3000/queet');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}

export function QueetByUserProfile() {
  const res = http.get('http://localhost:3000/queet/profile/1');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}

export default function () {
  const res = http.get('http://localhost:3000/queet/profile/1');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
