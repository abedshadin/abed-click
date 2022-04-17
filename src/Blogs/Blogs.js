import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2>1. Difference between authorization and authentication</h2>
            <p>Authentication verifies who the user is. On the other hand, Authorization determines what resources a user can access.</p>
            <p>Authentication is the first step of a good identity and access management process.. On the other hand, Authorization always takes place after authentication.</p>
            <p>Authentication is visible to and partially changeable by the user. On the other hand, 	Authorization isn’t visible to or changeable by the user.</p>
            <p>Authentication needs usually user’s login details. On the other hand, 	Authorization needs user’s privilege or security levels.</p>
            <p>Authentication determines whether the person is user or not.</p>
            <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p>Firebase ships with its own email/password auth as well as OAuth2 integrations for Google, Facebook, Twitter and GitHub. I can also integrate your own proprietary auth systems with Firebase Authentication to grant users access to data without forcing them to create an account outside of my existing systems.</p>
            <h2>What other services does firebase provide other than authentication</h2>
            <p>They provide hosting, realtime database, storage etc.</p>
        </div>
    );
};

export default Blogs;