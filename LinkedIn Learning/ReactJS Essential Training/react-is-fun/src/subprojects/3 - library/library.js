import React from "react";
import PropTypes from "prop-types";

export const Library = ({books}) => {
    return (
        <div>
            {books.map(
                (book, i) =>
                    <Book
                        key={i}
                        title={book.title}
                        author={book.author}
                        numPages={book.pages}
                    />
            )}
        </div>
    )
}

Library.propTypes = {
    books: PropTypes.array
}
