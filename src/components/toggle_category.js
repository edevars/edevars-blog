import React from "react"
import RecentPosts from "./recent_posts"
import PostsByCategory from "./gridByCategory"

export default props => {
    return (
        <>
            {props.category != null ? (
                <PostsByCategory category={props.category} />
            ) : (
                <RecentPosts />
            )}
        </>
    )
}
