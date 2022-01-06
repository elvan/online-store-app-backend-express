import mongoose from 'mongoose';

const connectToMongoDB = async () => {
  try {
    const mongodbUri = `${process.env.MONGODB_SERVER}/online-store-app-backend`;

    const mongooseConnection = await mongoose.connect(mongodbUri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log(`MongoDB connected: ${mongooseConnection.connection.host}`);
  } catch (error) {
    console.log(`MongoDB error: ${error.message}`);
    process.exit(1);
  }
};

export default connectToMongoDB;
