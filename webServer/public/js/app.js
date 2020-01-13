console.log("client side JS file loaded huzzah");

fetch(`http://localhost:3000/weather?address=austin`).then(response => {
  response.json().then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data);
    }
  });
});
