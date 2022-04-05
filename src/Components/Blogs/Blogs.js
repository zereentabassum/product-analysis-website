import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-5xl py-6 text-blue-900'>Questions and Answers</h1>
            <h3 className='text-2xl'> <strong> Question-1:</strong>What is Context API? What is the purpose of it?</h3>
            <p className='text-2xl'><strong>Answer:</strong> Context API is a react structure which gives the chance to produce global variables that can be passed around easily. The purpose of it is providing a way to pass data to any component. It enables us to pass around any information to any component. </p>
            <h3 className='text-2xl'><strong>Question-2:</strong>What is Semantic tag?</h3>
            <p className='text-2xl'><strong>Answer:</strong> Semantic tags are the tags which describe the purpose of the tag through their names. Semantic tag names are meaningful. For example,  article, header, footer, section, nav  etc. are semantic elements. </p>
        </div>
    );
};

export default Blogs;