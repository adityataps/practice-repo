import React, {Component} from "react";
import PropTypes from "prop-types";
import {Book} from './book'
import {Hiring} from './hiring'
import {NotHiring} from './nothiring'

class LibraryClass extends Component {

    static defaultProps = {
        books: [{
            "title": "default prop",
            "author": "no author",
            "pages": -1
        }]
    }

    state = {
        open: false,
        freeBookmark: false,
        hiring: false,
        data: [],
        loading: false
    }

    componentDidMount() {
        console.log("This component has mounted.")
        this.setState({loading: true})
        fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
            .then(data => data.json())
            .then(data => this.setState({data, loading: false}))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("The component just updated.")
    }

    // Arrow functions will bind 'this' to LibraryClass
    toggleOpen = () => {
        //setState is asynchronous
        this.setState(prevState => ({
            open: !(prevState.open)
        }))
    }

    render() {
        console.log(this.state)
        const { books } = this.props
        return (
            <div>

                {this.state.hiring ? <Hiring /> : <NotHiring />}
                {this.state.loading ?
                    "loading..." :
                    <div>
                        {this.state.data.map(product => {
                            return (
                                <div key={product.id}>
                                    <h4>
                                        Library Product of the Week!
                                    </h4>
                                    <h5>
                                        {product.name}
                                    </h5>
                                    <img src={product.image} height={100} alt={"product of the week"}/>
                                </div>
                            )
                        })}
                    </div>
                }

                <h1>
                    The library is... {this.state.open ? "open!" : "closed."}
                </h1>

                <button onClick={this.toggleOpen}>
                    Click here to {this.state.open ? "close" : "open"} the library.
                </button>

                {books.map(
                    (book, i) =>
                        <Book
                            key={i}
                            title={book.title}
                            author={book.author}
                            numPages={book.pages}
                            freeBookmark={this.state.freeBookmark}
                        />
                )}

            </div>
        )
    }
}

LibraryClass.propTypes = {
    books: PropTypes.array
}

export default LibraryClass