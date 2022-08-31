//importar as configs do servido
const {porta, app} = require('./config/servidor')

//ligar o servidor 
app.listen(porta,()=>{
    console.log("http://localost:"+porta)
})

module.exports = {app,porta}
