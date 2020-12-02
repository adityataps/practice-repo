import React from "react";
import PropTypes from "prop-types";

export const Book = ({title="No Title Provided", author="No Author", numPages=-1, freeBookmark}) => {
    return (
        <section>
            <h2>
                {title}
            </h2>
            <h3>
                by {author}
            </h3>
            <p>
                {numPages} pages
            </p>
            {freeBookmark ?
                <p>
                    Free bookmarks available!
                </p>:
                <p>
                    No bookmarks available.
                </p>}
        </section>
    )
}

Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freeBookmark: PropTypes.bool
}