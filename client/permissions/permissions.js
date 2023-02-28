import { actions, roles } from './constants.js'

const mappings = new Map()

mappings.set(actions.MODIFY_PRODUCT, [roles.admin])
mappings.set(actions.CREATE_PRODUCT, [roles.admin])
// mappings.set(actions.DELETE_PRODUCT, [roles.admin])

function hasPermission(role, action) {
  if (!role) {
    return false
  }

  if (mappings.has(action)) {
    return mappings.get(action).includes(role)
  }

  return false
}

export default hasPermission
