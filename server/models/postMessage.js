import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    Price: Number,
    creator: String,
    Role:String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
   
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;