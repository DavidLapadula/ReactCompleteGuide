import { MongClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { title, image, address, description } = req.body;

    const client = await MongClient.connect("//pathtodb");
    const db = client.db();

    const meetupCollection = db.collection("meetups");
    meetupCollection.insertOne({ title, image, address, description });

    client.close();

    res.status(201).json({ message: "Inserted" });
  }
}

export default handler;
