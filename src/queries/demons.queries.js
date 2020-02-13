/** Select all in database*/
exports.get_all_demons = "SELECT * FROM demons";
/** Select all where query passed from user (like 'name') is something like a query passed from user ('like odin') */
exports.get_demon_by_query = "SELECT * FROM demons WHERE $1 ILIKE '%' || $2 || '%'";
