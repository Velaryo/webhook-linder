require("dotenv").config();
const express = require("express");
const mercadopago = require("mercadopago");
const axios = require("axios");

mercadopago.configure({
  access_token: process.env.ACCCESS_TOKEN
});

const app = express();
app.use(express.json());

app.post("/mercado-pago", async (request, response) => {
  const { data } = request.body;
  const res = await axios.get(
    `https://api.mercadopago.com/v1/payments/${data.id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      },
    }
  );
  console.log(res.data);
});

const PORT = 9004;

app.listen(PORT, () => console.log(`Server init http://localhost:${PORT}`));