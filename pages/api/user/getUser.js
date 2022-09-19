import connectMongo from "../../../utils/connectMongo"; 
import User from "../../../models/User";

export default async function handler(req, res) {
    if (req.method === "GET") {
        await connectMongo();
        const user = await User.find({});
        res.status(200).json({ success: true, data: user });
    } else {
        res.status(400).json({ success: false });
    }
    }
