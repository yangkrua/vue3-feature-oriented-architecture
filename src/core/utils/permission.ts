// import { useUserStore } from '@/stores/user-store'

// export const checkPermission = (value: string[]): boolean => {
//   if (value && value instanceof Array && value.length > 0) {
//     const userStore = useUserStore()
//     const roles = userStore.roles
//     const permissionRoles = value
//     const hasPermission = roles.some((role) => {
//       return permissionRoles.includes(role)
//     })
//     return hasPermission
//   } else {
//     console.error("need roles! Like v-permission=\"['admin','editor']\"")
//     return false
//   }
// }
