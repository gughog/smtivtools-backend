exports.getAllApps = 'SELECT * FROM apps';
exports.getAppsById = 'SELECT * FROM apps WHERE id = $1';
exports.getRandomApps = 'SELECT * FROM apps ORDER BY random() LIMIT $1';
