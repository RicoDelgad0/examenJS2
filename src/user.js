class User {
  constructor(data) {
    /*
      this.presence = false;
  
      this.title = data.results[0].name.title;
      this.first = data.results[0].name.first;
      this.last = data.results[0].name.last;
      this.city = data.results[0].location.city;
      this.country = data.results[0].location.country;
      this.age = data.results[0].dob.age;
      this.email = data.results[0].email;
      this.picture = data.results[0].picture.large;
  */
    //this.codeHtml = render();
  }

  render() {
    const containerElement = document.createElement("div");
    containerElement.classList.add("user");

    const childHTML = `
          <div class="user" data-present="${this.presence}">
              <img src="https://randomuser.me/api/portraits/women/37.jpg">
              <div class="user--info">
                      <h1>${this.title} ${this.first} ${this.last}</h1>
                      <p>${this.age} years old</p>
                      <p>${this.city}, ${this.country}</p>
              </div>
              <a href="mailto:${this.email}">
                      <span class="mail">✉️</span>
              </a>
          </div>
          `;

    containerElement.insertAdjacentHTML("afterbegin", childHTML);
    console.log(childHTML);
    return this;
  }

  display() {
    main.insertAdjacentHTML("afterbegin", this.codeHtml);
    return this;
  }
}

export default User;
