const sampleDBRecords = [
  {
    username: "zain@gmail.com",
    password: "zain",
  },
];
function checkInDB(username, password) {
  const isDataAvail = sampleDBRecords.find(
    (x) => x.username === username && x.password === password
  );
  if (isDataAvail) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  checkInDB,
};
