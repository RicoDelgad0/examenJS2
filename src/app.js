import User from "./user.js";

async function getUserData() {
  let res;
  try {
    res = await fetch("https://randomuser.me/api/?results=20");
  } catch (e) {
    console.error(e.message);
  }
  const data = await res.json();
  return data;
}

/** 
async function getCleanUserData() {
  const data = await getUserData();

  const cleanUserData = data.results.map((el) => {
    title = el.name.title;
    const first = el.name.first;
    const last = el.name.last;
    const city = el.location.city;
    const country = el.location.country;
    const age = el.dob.age;
    const email = el.email;
    const picture = el.picture.large;
  });

  console.log(cleanUserData);
}*/
new User(getUserData).render();
