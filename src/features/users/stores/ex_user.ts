// import { defineStore } from 'pinia'
// import { login, getInfo } from '@/api/user'
// import { getToken, setToken, removeToken } from '@/utils/auth'
// import router, { resetRouter } from '@/router'

// export const useUserStore = defineStore('userStore', {
//   state: () => ({
//     token: getToken(),
//     name: '',
//     avatar: '',
//     introduction: '',
//     permission: []
//   }),
//   actions: {
//     setToken(token) {
//       this.token = token
//     },
//     setIntroduction(introduction) {
//       this.introduction = introduction
//     },
//     setName(name) {
//       this.name = name
//     },
//     setAvatar(avatar) {
//       this.avatar = avatar
//     },
//     setPermission(permission) {
//       this.permission = permission
//     },
//     async login(login_form) {
//       console.log('***login_form***:', JSON.stringify(login_form))
//       return new Promise((resolve, reject) => {
//         login(login_form)
//           .then((response) => {
//             const { token } = response
//             console.log('Token=', token)
//             setToken(token)
//             resolve(response)
//           })
//           .then(() => {
//             this.getInfo()
//           })
//           .catch((error) => {
//             reject(error)
//           })
//       })
//     },
//     async getInfo() {
//       return new Promise((resolve, reject) => {
//         getInfo(this.token)
//           .then((response) => {
//             console.log('***getInfo()***\n', JSON.stringify(response))
//             const { data } = response

//             if (!data) {
//               reject('Verification failed, please Login again.')
//             }

//             const { permission, name, avatar, introduction } = data

//             // roles must be a non-empty array
//             if (!permission || permission.length <= 0) {
//               reject('getInfo: roles must be a non-null array!')
//             }

//             this.setPermission(permission)
//             this.setName(name)
//             this.setAvatar(avatar)
//             this.setIntroduction(introduction)

//             resolve(data)
//           })
//           .catch((error) => {
//             console.log('error:', error)
//             reject(error)
//           })
//       })
//     },
//     logout() {
//       this.setToken('')
//       this.setPermission([])
//       removeToken()
//       resetRouter()
//       router.push('/login')
//     },
//     changeRoles: () => {
//       router.resetRouter()
//     }
//   }
// })
