import connectMongo from "../../../utils/connectMongo";
import User from "../../../models/User";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;
    const user = new User({
      name,
      email,
      password,
    });
    user.save();
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ success: false });
  }
}   




    