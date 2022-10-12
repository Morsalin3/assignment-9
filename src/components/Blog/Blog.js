import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='question-container'>

            <div className='question'>
            <h1 className="">Question And Anwser</h1>
            <h4>1. What is the purpose of react ?</h4>
            <strong>ans:</strong><p>React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM.</p>       
            <h4>2. How does context API works ?</h4>
                <strong>ans:</strong><p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
            <h4>3. What is the function of useHref?</h4>
                <strong>ans:</strong><p>
                The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router.
             </p>

           </div>
        </div>
    );
};

export default Blog;