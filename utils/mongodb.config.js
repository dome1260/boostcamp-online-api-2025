const mongoose = require('mongoose')
// เปลี่ยน database uri เป็นของทุกคนได้เลยนะครับ ตอนเล่น
const uri = process.env.MONGO_DB_URI

mongoose.connect(uri).then(() => {
  console.log('Connect database success')
}).catch((error) => {
  console.error('[ERROR] Connect database failed ', error)
})
