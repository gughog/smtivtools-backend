exports.getAllSpecialFusions = 'SELECT * FROM special_fusions';
exports.getSpecialFusionById = 'SELECT * FROM special_fusions WHERE id = $1';
exports.getRandomSpecialFusions = 'SELECT * FROM special_fusions ORDER BY random() LIMIT $1';
