let alasql = require('alasql');

export function people_bd() {
  alasql("CREATE TABLE peoples (name string, age number)");
  alasql("INSERT INTO peoples VALUE \
    ('Ivan', 32), ('Sasha', 28), ('Andrey', 34), ('Alan', 25), ('Margo', 38)\
  ");

  return alasql;
}
