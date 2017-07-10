/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-10T13:59:41-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: users.data.js
 * @Last modified by:   Christian Schmitt
 * @Last modified time: 2017-07-10T14:28:47-05:00
 */

const user = (name, id, username) => ({
  name,
  id,
  username
})

const users = (...us) => {
  let umap = new Map()
  us.forEach(u => umap.set(u.id, u))

  return {
    getAllUsers: function () {
      return us
    },
    getUser: function (id) {
      return umap.get(id)
    },
    getUserByUName: function (uname) {
      return us.find(u => u.username === uname)
    }
  }
}

export default users(
  user('Scooby', 1, 'scoobyDoo2'),
  user('Shaggy', 2, 'shagginwaggon'),
  user('Velma', 3, 'msdinkley'),
  user('Fred', 4, 'readyfreddie'),
  user('Daphne', 5, 'daphyduckface')
)
