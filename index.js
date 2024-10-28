const express = require('express');
const app = express();
const PORT = process.new.PORT || 3000;


app.get ('/', (req, res) => {
	res.send('ola, mundo! Esta é uma aplicação Paas no Heroku');
});
app.listen(PORT, () => {
	console.log('Servidor rodando na porta ${PORT}');
});