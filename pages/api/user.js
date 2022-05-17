export default async function user(req, res) {
    console.log(req.body);
    console.log(req.query);
    console.log(req.method);
    console.log(req.headers.host);
    console.log(req.url);

    res.status(200).json({ message: "success" });
}