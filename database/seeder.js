import dotenv from 'dotenv';
import Order from '../models/orderModel.js';
import Product from '../models/productModel.js';
import User from '../models/userModel.js';
import products from '../seeds/products.js';
import users from '../seeds/users.js';
import connectToMongoDB from './mongoose.js';

dotenv.config();

const importData = async () => {
  try {
    await Order.deleteMany({});
    await Product.deleteMany({});
    await User.deleteMany({});

    const createdUsers = await User.insertMany(users);
    const adminId = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return {
        ...product,
        adminId: adminId,
      };
    });

    await Product.insertMany(sampleProducts);

    console.log('Data successfully imported!');
    process.exit(1);
  } catch (error) {
    console.log(`Error seeder import: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany({});
    await Product.deleteMany({});
    await User.deleteMany({});

    console.log('Data successfully destroyed!');
    process.exit(1);
  } catch (error) {
    console.log(`Error seeder destroy: ${error.message}`);
    process.exit(1);
  }
};

connectToMongoDB()
  .then(() => {
    if (process.argv[2] === '-d') {
      destroyData();
    } else {
      importData();
    }
  })
  .catch((error) => {
    console.log(`Error seeder: ${error.message}`);
    process.exit(1);
  });
