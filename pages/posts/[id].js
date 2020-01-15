import React from 'react'
import axios from 'axios'
export default function PostPage() {
    return (
        <div>
            posts
        </div>
    )
}
PostPage.getInitialProps = async ({ query: { id } }) => {
    const { data: post } = await axios.get(`/posts/${id}`)

    return { post }
}