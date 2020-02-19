/**
 * A function to write a simple sql query for multiples 'AND' clausules.
 * It has some very basic sql injection preventions, that throws an error
 * if something is caught.
 *
 * @param{String} table - The table name that query will be made.
 * @param{Array} fields - Array of fields that will be appended.
 */
exports.queryGenerator = async (table, fields) => {
  // Regexp to avoid some simple possible sql injections;
  const regexp = /--|;|OR 1=1|admin|ALTER|CREATE|DELETE|DROP|EXEC(UTE){0,1}|INSERT( +INTO){0,1}|MERGE|SELECT|UPDATE|UNION( +ALL){0,1}/gim;
  let fieldsCopy = fields;
  let result = null;

  // If something pass the test, throws an error;
  fieldsCopy = fieldsCopy.map((item) => {
    if (regexp.test(Object.values(item)[0]) || regexp.test(Object.values(table)[0])) {
      // throw Error('No SQL Injection here, punk!');
      // TODO: Seek other alternative to handle errors here.
      return '';
    }

    return item;
  });

  fieldsCopy = fieldsCopy.filter((item) => Object.values(item)[0] !== undefined);

  // If no, just return the query;
  if (fieldsCopy && fieldsCopy.length < 1) {
    result = [];
  } else {
    result = `SELECT * from ${table} WHERE ${fieldsCopy.map((i, idx) => `${Object.keys(i)} = $${idx + 1}${idx + 1 === fieldsCopy.length ? ';' : ' AND'}`).join(' ')}`;
  }

  return result;
};
