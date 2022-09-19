import passport from 'passport'
import nextConnect from 'next-connect'
import auth from '../../middleware/auth'

const handler = nextConnect()

handler.use(auth).post(passport.authenticate('local'), (req, res) => {
  res.json({ user: req.user })
})

export default handler