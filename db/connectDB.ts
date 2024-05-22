import mongoose from 'mongoose'
import { ConnectionOptions } from 'tls'

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectionOptions)

    console.log('MongoDB connected')
  } catch (error: any) {
    console.error(`Error: ${error?.message}`)
    process.exit(1)
  }
}

export default connectDB
