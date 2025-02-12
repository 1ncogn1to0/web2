require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ MongoDB Connected');

    const Attendance = mongoose.model('Attendance', new mongoose.Schema({
      userId: String,
      date: Date,
      status: String
    }));

    const newRecord = new Attendance({
      userId: '65c9195a3c1b8e00123abcde',
      date: new Date(),
      status: 'Present'
    });

    await newRecord.save();
    console.log('✅ Успешно добавлена запись в attendance');

    mongoose.connection.close();
  } catch (error) {
    console.error('❌ Ошибка подключения к MongoDB:', error);
  }
};

connectDB();
