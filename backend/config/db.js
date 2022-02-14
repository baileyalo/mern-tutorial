const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://baileyalo:A_ravas101@cluster0.1npc3.mongodb.net/MedicalRecord?retryWrites=true&w=majority",{
      //must add in order to not get any error masseges:
      useUnifiedTopology:true,
      useNewUrlParser: true,
     // useCreateIndex: true
  })
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
