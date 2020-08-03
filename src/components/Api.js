class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }


  getUserInfo() {
    return fetch(this._baseUrl + '/users/me', {
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject('Error! ' + res.statusText))
    .catch(err => {
      console.log(err)
    })
  }

  getCardList() {
    return fetch(this._baseUrl + '/cards', {
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject('Error! ' + res.statusText))
    .catch(err => {
      console.log(err)
    })
  }

  getAppInfo() {
    //Liza said this one was not described in the project ~20:45 in live coding
  }

  addCard({ title, url }) {
    console.log(this._baseUrl + '/cards');
    return fetch(this._baseUrl + '/cards', {
      headers: this._headers, 
      method: "POST",
      body: JSON.stringify({
        name: title,
        link: url
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject('Error! ' + res.statusText))
    .catch(err => {
      console.log(err)
    })
  }

  removeCard(cardID) {

  }

  changeLikeCardStatus(cardID, like) {

  }

  setUserInfo({ name, about }) {

  }

  setUserAvatar({ avatar }) {

  }
}

export default Api;