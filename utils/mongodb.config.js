const mongoose = require('mongoose')
const uri = 'mongodb+srv://root:1234@cluster0.hdvzhim.mongodb.net/dev?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(uri).then(() => {
  console.log('Connect database success')
}).catch((error) => {
  console.error('[ERROR] Connect database failed ', error)
})
