exports.getAllSkills = 'SELECT * FROM skills ORDER BY name';
exports.getSkillById = 'SELECT * FROM skills WHERE id = $1';
exports.getRandomSkills = 'SELECT * FROM skills ORDER BY random() LIMIT $1';
