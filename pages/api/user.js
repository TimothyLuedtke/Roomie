import nextConnect from 'next-connect'
import auth from '../../middleware/auth'
import { deleteUserById, createUser, updateUserById } from '../../lib/db'

const handler = nextConnect()

handler
.use(auth)
.get(async (req, res) => {
  res.status(200)
  .json({user: req.user})
})
.post(async (req, res) => {
  const { email, password } = req.body
  createUser(req, { email, password })
  res.status(200)
  .json({ success: true, message: 'User created' })
})
.use((req, res, next) => {
  if (!req.user) {
    res.status(401)
    .send('Unauthorized')
  } else {
    next()
  }
})
.put(async (req, res) => {
  const { email, password } = req.body
  const user = await updateUserById(req, req.user.id, { email, password })
  res.status(200)
  .json(user, { success: true, message: 'User updated' })
})
.delete(async (req, res) => {
  await deleteUserById(req, req.user.id)
  res.status(200)
  .json({ success: true, message: 'User deleted' })
})

export default handler