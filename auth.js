import bcrypt from 'bcrypt';
import express from 'express';
import session from 'express-session';

const app = express();

// Configurer la session
app.use(session({
  secret: 'votre-cle-secrete',
  resave: false,
  saveUninitialized: true
}));

// Fonction d'authentification
async function authenticateUser(username, password) {
  // Logique d'authentification ici, par exemple:
  if (username === 'utilisateur' && await bcrypt.compare(password, '$2b$10$...')) {
    return { userId: 1, username: 'utilisateur' };
  }
  return null;
}

export { app, authenticateUser };