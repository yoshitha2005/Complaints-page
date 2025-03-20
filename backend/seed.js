const fs = require('fs');
const csv = require('csv-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User'); // Adjust path if needed

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedDatabase = async () => {
  try {
    // ✅ Clear existing users (optional)
    await User.deleteMany();

    const users = [];

    // ✅ Correct path to data.csv (one level up)
    fs.createReadStream('../data.csv')
      .pipe(csv())
      .on('data', (data) => {
        if (data.name && data.email && data.password && data.role) {
          users.push({
            name: data.name.trim(),
            email: data.email.trim(),
            password: bcrypt.hashSync(data.password.trim(), 10),
            role: data.role.trim(),
          });
        } else {
          console.error(`❌ Invalid data format: ${JSON.stringify(data)}`);
        }
      })
      .on('end', async () => {
        if (users.length > 0) {
          await User.insertMany(users);
          console.log('✅ Data Imported Successfully!');
        } else {
          console.log('❌ No valid data to import.');
        }
        process.exit();
      });
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

seedDatabase();
