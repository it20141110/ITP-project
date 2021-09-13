//https requests
const express = require('express');
const Posts = require('../models/posts');

const router = express.Router();

//save posts
router.post('/post/save', (req,res) =>{
    let newPost = new Posts(req.body);

    newPost.save((err) =>{ //callback function
        if(err){
            return res.status(400).json({
                 error:err
                });

                   }
                   return res.status(200).json({
                       success:"Posts saved successfully"
                   });
    });
});

//get posts or read post
router.get('/posts',(req,res) =>{
    //to find posts(salary details)
    Posts.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

//get a specific post
router.get("/post/:id",(req,res) =>{
    let postId = req.params.id;
   //to find specific id
    Posts.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
}); 

//update posts
//to update one update thats why used id
router.put('/post/update/:id',(req,res) =>{
    Posts.findByIdAndUpdate(
        req.params.id, //what parameter id to update
        {
            $set:req.body //to update all
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated successfully"
            });
        }
    );
});

//delete posts
router.delete('/post/delete/:id',(req,res) =>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
        if(err) return res.status(400).json({
            message:"Delete unsuccessful", err
        });
        return res.json({
            message:"Delete successful", deletedPost
        });
    });
}); 

module.exports = router;