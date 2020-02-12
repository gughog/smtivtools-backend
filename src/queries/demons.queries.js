exports.get_all_demons = "SELECT * FROM demons";
exports.get_demon_by_name = "SELECT * FROM demons WHERE name ILIKE '%' || $1 || '%'";
exports.get_demon_by_lvl = "SELECT * FROM demons WHERE name ILIKE '%' || $1 || '%'";