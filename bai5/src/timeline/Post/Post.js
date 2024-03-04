import React from 'react'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import { Avatar } from "@mui/material"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import TelegramIcon from "@mui/icons-material/Telegram"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"
import './Post.css'

export default function Post({ user, timestamp, postImage, likes }) {
    return (
        <div className='post'>
            <div className='post__header'>
                <div className='post__headerAuthor'>
                    <Avatar style={{ marginRight: "10px" }}>
                        {user && user ? user.charAt(0).toUpperCase() : ""}
                    </Avatar>{" "}
                    {user} • <span>{timestamp}</span>
                </div>
                <MoreHorizIcon />
            </div>
            <div className='post__image'>
                <img src={postImage} alt='Post' />
            </div>
            <div className='post__footer'>
                <div className='post__footerIcons'>
                    <div className='post__iconsMain'>
                        <FavoriteBorderIcon className='postIcon' />
                        <ChatBubbleOutlineIcon className='postIcon' />
                        <TelegramIcon className='postIcon' />
                    </div>
                    <div className='post__iconSave'>
                        <BookmarkBorderIcon className='postIcon' />
                    </div>
                </div>
                Liked by {likes} people.
            </div>
        </div>
    )
}
