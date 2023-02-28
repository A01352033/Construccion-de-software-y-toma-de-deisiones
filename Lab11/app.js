const express = required("express");
const app = express();

app.use((request, response, next) => {
    console.log("Middleware!");

    next();
});

app.use((request, response, next) => {
    console.log("Otro middleware!");

    response.send("Hola mundo!");
});

app.lisen(3000);