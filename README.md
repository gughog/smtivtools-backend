# SMTIV Tools API

Working in Progress.

## Routes:

* /api/v1/demons
* /api/v1/demons/:id
* /api/v1/randomdemon
* /api/v1/skills
* /api/v1/skills/:id
* /api/v1/randomskills
* /api/v1/apps
* /api/v1/apps/:id
* /api/v1/randomapps
* /api/v1/specialfusions
* /api/v1/specialfusions/:id
* /api/v1/randomspecialfusion


Route                       | Req. Queries                                                                                   | Req. Params | Data returned
----------------------------|------------------------------------------------------------------------------------------------|-------------|----------------------
/api/v1/demons              | name, lvl, race                                                                                |      -      | `Array` of `Objects`
/api/v1/demons/:id          |                     -                                                                          | id          | `Array` of `Objects`
/api/v1/randomdemon         | amount                                                                                         |      -      | `Array` of `Objects`
/api/v1/skills              | name, mp, type, effect                                                                         |      -      | `Array` of `Objects`
/api/v1/skills/:id          |                     -                                                                          |      -      | `Array` of `Objects`
/api/v1/randomskills        | amount                                                                                         |      -      | `Array` of `Objects`
/api/v1/apps                | name, points, requirements, description                                                        |      -      | `Array` of `Objects`
/api/v1/apps/:id            |                     -                                                                          | id          | `Array` of `Objects`
/api/v1/randomapps          | amount                                                                                         |      -      | `Array` of `Objects`
/api/v1/specialfusions      | name, lvl, ingredient01, ingredient02, ingredient03, ingredient04, unlock_requirements |      -      | `Array` of `Objects`
/api/v1/specialfusions/:id  |                     -                                                                          | id          | `Array` of `Objects`
/api/v1/randomspecialfusion | amount                                                                                         |      -      | `Array` of `Objects`
