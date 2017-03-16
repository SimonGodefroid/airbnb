import Store from 'react-native-simple-store';


class Api {
  constructor() {
    // La classe Api.js conservera un objet `user`, qui contiendra des valeurs null par défaut
    this.user = Object.assign({}, this.defaultUser); // Création d'un clone de l'objet this.defaultUser
    // Note: Object.assign() n'est pas disponible en ES5
  }

  defaultUser = {
    _id: null,
    token: null,
    account: {
      username: null,
      description: null,
      rooms: [],
      favorites: [],
      photos: []
    }
  };

  setUser(user) {
    this.user = user; // défini l'utilisateur courant comme étant l'utilisateur loggé, dans le cas où l'user est déjà loggé
  }

  getUser() {
    return this.user;
  }

  isAuthenticated() {
    if (this.user._id) {
      return true;
    }
    return false;
  }

  authenticate(user) {
    Store.save('user', {
      email: user.email,
      password: user.password
    })
  .then(() => {
    console.log('Utilisateur loggé : Store Saved');
  });
    this.setUser(user);    
  }


  logIn(user = {}, callback) {
    console.log('Api#logIn',user)
    fetch(`http://localhost:3001/api/user/log_in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(json => {
        if (!json.error) {
          this.authenticate(json);
        }
        callback(json);
      });
  }

  logOut(callback) {
    Store.delete('user')
    .then(() => {
      console.log('Deleted');
    });
    this.setUser(Object.assign({}, this.defaultUser));
    callback();
  }

  // L'authentification est obligatoire pour getProfile
  getProfile(profile = {}, callback) {
    if (this.isAuthenticated()) {
      fetch(`http://localhost:3001/api/user/${profile.id}`, {
        headers: {
          Authorization: `Bearer ${this.user.token}`
        }
      })
        .then(res => res.json())
        .then(json => {
          callback(json);
        });
    } else {
      callback({
        error: "You must be authenticated"
      });
    }
  }
}

export default new Api();