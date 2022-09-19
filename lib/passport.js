import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { findUserByEmail, validatePassword } from './db';

passport.serializeUser(function (user, done) {
    done(null, user.email);
});

passport.deserializeUser(function (req, id, done) {
    const user = findUserByEmail(req, id);
    done(null, user);
});

passport.use(new LocalStrategy(
    { passReqToCallback: true },
    async (req, email, password, done) => {
        const user = await findUserByEmail(req, email);
        if (!user) {
            return done(null, false, { message: 'Invalid email or password.' });
        }
        if (!await validatePassword(user, password)) {
            return done(null, false, { message: 'Invalid email or password.' });
        }
        return done(null, user);
    }
));

export default passport;