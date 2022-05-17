import posts from "../../../data/posts.json";

export default async (req, res) => {
    const post = posts.find(({ id }) => id === req.query.postId);
    console.log(req.query);

    if (post) {
        res.status(200).json({ message: "success", post });
    } else {
        res.status(400).json({ message: "post not found" });
    }
}