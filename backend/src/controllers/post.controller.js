

import { post } from "../models/post.model.js";

const createPost = async (req, res) => {
    try {
        const { name, description, age } = req.body;

        if (!name || !description || age === undefined || age === null) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const newPost = await post.create({
            name,
            description,
            age
        });

        res.status(201).json({
            message: "Post created successfully",
            post: newPost
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

const getPosts = async (req, res) => {
    try {
        const posts = await post.find();

        res.status(200).json(posts);

    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};



const updatePost = async (req, res) => {

    try {

       if(Object.keys(req.body).length === 0) {
return res.status(400).json({
    message: "Request body is empty"
});

       }

       const updatedPost = await post.findByIdAndUpdate(req.params.id, req.body, { new: true});

         if (!updatedPost) return res.status(404).json({
    message: "Post not found"

         });

         res.status(200).json({

            message: "Post updated successfully", post
            });

    } catch (error) {
res.status(500).json({
            message: "Internal server error",
            error

    })
}
}

const deletePost = async (req, res) => {
    try {
        const deletedPost = await post.findByIdAndDelete(req.params.id);
if (!deletedPost) return res.status(404).json({
    message: "Post not found"
});

return res.status(200).json({
    message: "Post deleted successfully"
});
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error
        });
    }
}
        export {
    createPost,
    getPosts,
    updatePost,
    deletePost

};
