const mongoose = require('mongoose');

const connectDB = async (url, dbName) => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: dbName,
        });
        console.log(`${dbName} database is connected`);
    } catch (error) {
        console.log(`Error connecting to ${dbName} database:`, error);
    }
};

const connectAllDBs = async () => {
    await connectDB(process.env.DB_URL, 'Main');
    await connectDB(process.env.ADMIN_DB_URL, 'Admin');
    await connectDB(process.env.PACKAGE_DB_URL, 'Package');
    await connectDB(process.env.USER_DB_URL, 'User');
};

module.exports = connectAllDBs;
