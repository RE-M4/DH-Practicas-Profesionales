import React from 'react';
import Prevent from './Prevent';
import Applicant from './Applicant';
import Profession from './Profession';

function Content() {
    return (
        <main className="content-wrap">
            <Prevent />
            <Applicant />
            <Profession />
        </main>
    );
}
export default Content;