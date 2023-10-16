let token = "";
document.getElementById("sign-btn").addEventListener("click",function(){
    let email = document.getElementById("email").value;
    let password=document.getElementById("pass").value;
    axios.post('https://reqres.in/api/login', {
        "email": email,
        "password": password
      })
      .then(function (response) {
        token=response.data.token
        localStorage.setItem("token",response.data.token)
        window.location.assign("./access.html");
      })
      .catch(function (error) {
        alert(error.response.data.error);
      });
      
})
