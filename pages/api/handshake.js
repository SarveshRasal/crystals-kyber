// pages/api/kyberhandshake.js
import { Kyber1024Handshake } from "crystals-kyber-ts";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const handshake = new Kyber1024Handshake();
            console.log(handshake)
            // Assuming handshake initialization is successful
            res.status(200).json({ publicKey: handshake.publicKey }); // Send JSON response
        } catch (error) {
            console.error("Error occurred during Kyber handshake:", error);
            res.status(500).json({ error: "Internal Server Error" }); // Send JSON error response
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
