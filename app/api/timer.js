export default function handler(req, res) {
  // You can set this timestamp to whatever time you want
  const expiryTimestamp = new Date("2024-12-31T23:59:59Z"); // Example expiration date
  res.status(200).json({ expiryTimestamp });
}
