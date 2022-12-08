 
async function validateForm(e) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "Application/json");
  myHeaders.append("Accept", "Application/json");

  var user = {
    username: "username",
    email: "email@34",
    password: "Pa@123456",
    password_confirmation: "Pa@123456",
  };

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(user),
  };

  const res = await fetch(
    "https://goldblv.com/api/hiring/tasks/register",
    requestOptions
  );

  var repon = await res.json();
  return repon;
};

function controlResponse() { 
  let vars = validateForm("");
  vars.then(function (result) {
    
  });
 
} 
controlResponse();