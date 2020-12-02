import React from 'react';
import { render } from 'react-dom';
import HelloWorld from './subprojects/1 - helloWorld/helloWorld'
import PropsMessage from './subprojects/1 - helloWorld/propsMessage'
import FruitsCount from './subprojects/2 - fruitsBasket/fruitsCount'
import FruitsGoal from './subprojects/2 - fruitsBasket/fruitsGoal'
import FunctionComponent from './subprojects/2 - fruitsBasket/functionComponent'
import LibraryClass from "./subprojects/3 - library/libraryClass";
import FavoriteColorForm from "./subprojects/4 - form/favoriteColorForm";

let fruits = {
    apples: 10,
    bananas: 4,
    pears: 13,
    goal: 50
}

// dynamic book list
let bookList = [
    {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
    {"title": "White Teeth", "author": "Zadie Smith", "pages": 48},
    {"title": "Catch 22", "author": "Joseph Heller", "pages": 519},
    {}
]

//--------------------------------------------------------------------------------------------------------------------//

render(
    <div>

        <HelloWorld />,
        <p>
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        </p>
        <PropsMessage message={"This is a custom message!"} color={"purple"} />,
        <p>
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        </p>
        <FruitsCount
            apples={fruits.apples}
            bananas={fruits.bananas}
            pears={fruits.pears}
            goal={fruits.goal}
        />
        <FruitsGoal
            apples={fruits.apples}
            bananas={fruits.bananas}
            pears={fruits.pears}
            goal={fruits.goal}
        />
        <FunctionComponent
                apples={fruits.apples}
                bananas={fruits.bananas}
                pears={fruits.pears}
                goal={fruits.goal}
        />
        <p>
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        </p>
        <LibraryClass books={bookList}/>
        <p>
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        </p>
        <FavoriteColorForm />

    </div>,
    document.getElementById("root")
)