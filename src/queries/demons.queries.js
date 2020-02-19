/** Select all in database */
exports.getAllDemons = 'SELECT * FROM demons';

/**
 * Select all where query passed from user (like 'name') is something like a query
 * passed from user ('like odin')
 * */
exports.getDemonByQuery = "SELECT * FROM demons WHERE $1 ILIKE '%' || $2 || '%'";

exports.getDemonById = 'SELECT * FROM demons WHERE id = $1';
