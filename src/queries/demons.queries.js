/** Select all in database */
exports.getAllDemons = 'SELECT * FROM demons';
exports.getDemonById = 'SELECT * FROM demons WHERE id = $1';
exports.getRandomDemon = 'SELECT * FROM demons ORDER BY random() LIMIT $1';
