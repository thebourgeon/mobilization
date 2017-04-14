import * as AlaSQL from './models.js';

export function people() {
  return AlaSQL.people_bd().promise("SELECT * FROM peoples WHERE age > 30 ORDER BY name");
}

export function test() {
  return 'test function';
}