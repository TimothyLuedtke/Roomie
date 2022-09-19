import crypto from 'crypto'
import { nanoid } from 'nanoid'

/**
 * User methods. The example doesn't contain a DB, but for real applications you must use a
 * db here, such as MongoDB, Fauna, SQL, etc.
 */

const users = []

export async function createUser(req, { email, password }) {
  // Here you should create the user and save the salt and hashed password (some dbs may have
  // authentication methods that will do it for you so you don't have to worry about it):
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex')
  const user = {
    id: nanoid(),
    createdAt: Date.now(),
    email,
    hash,
    salt,
  }

  // Save the user in the DB:
  req.session.users.push(user)
}

// Look up user by email:
export async function findUserByEmail(req, email) {
  return req.session.users.find((user) => user.email === email)
}

// Update user by id:
export async function updateUserById(req, id, data) {
  const user = req.session.users.find((user) => user.id === id)
  Object.assign(user, data)
  return user
}

// Delete user by id:
export async function deleteUserById(req, id) {
  const user = req.session.users.find((user) => user.id === id)
  req.session.users = req.session.users.filter((user) => user.id !== id)
  return user
}

// Compare the password of an already fetched user (using `findUserByEmail`) with the
// password the user sent:
export async function validatePassword(user, password) {
  const hash = crypto
    .pbkdf2Sync(password, user.salt, 1000, 64, 'sha512')
    .toString('hex')
  const isValid = user.hash === hash
  return isValid
}