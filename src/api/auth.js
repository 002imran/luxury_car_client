export const setAuthToken = (user) =>{
       const currentUser = {
         email: user.email,
       };

       console.log(currentUser);

       //get jwt token

       fetch("http://localhost:5000/jwt", {
         method: "POST",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(currentUser),
       })
         .then((res) => res.json())
         .then((data) => {
           console.log(data);
           //local storage is not the best palce to store token, its easiet but not best
           localStorage.setItem("luxury-token", data.token);
     
         });

}