/**
 * A function to write a simple sql query for multiples 'AND' clausules.
 * It has some very basic sql injection preventions, that throws an error
 * if something is caught.
 * 
 * @param{String} table - The table name that query will be made.
 * @param{Array} fields - Array of fields that will be appended.
 */
exports.queryGenerator = (table, fields) => {
  // Regexp to avoid some simple possible sql injections;
  const regexp = /--|;|OR 1=1|admin|ALTER|CREATE|DELETE|DROP|EXEC(UTE){0,1}|INSERT( +INTO){0,1}|MERGE|SELECT|UPDATE|UNION( +ALL){0,1}/gim

  // If something pass the test, throws an error;
  fields = fields.map(item => {
    if (regexp.test(item) || regexp.test(table)) {
      throw Error('No SQL Injection here, punk!')
    } else {
      return item;
    }
  })

  // If no, just return the query;
  return `SELECT * from ${table} WHERE ${fields.map((i, idx) => {
    return `${i} = $${idx + 1}${idx+1 === fields.length ? ';' : ' AND'}`
  }).join(' ')}`;
};