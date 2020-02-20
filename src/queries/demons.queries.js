/** Select all in database */
exports.getAllDemons = 'SELECT * FROM demons';
exports.getDemonById = 'SELECT * FROM demons WHERE id = $1';
exports.getRandomDemon = 'SELECT * FROM demons ORDER BY random() LIMIT $1';

// "ORDER BY random() LIMIT $1" may have some performance penalties on larger
// tables, but all tables from this db isn't, so It may be ok.
