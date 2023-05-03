import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Tell us the differences between uncontrolled and controlled components.</Accordion.Header>
                <Accordion.Body>
                    <h2>Uncontrolled Components:</h2>
                    <br />
                    <ul>
                        <li>Value management: Managed by components own internal state.</li>
                        <li>User interaction: Component updates own internal state on user interaction.</li>
                        <li>Debugging: More difficult to debug.</li>
                    </ul>
                    <br />
                    <h2>Controlled Components:</h2>
                    <ul>
                        <li>Value management: Managed by react state.</li>
                        <li>User interaction: Parent component updates state on user interaction.</li>
                        <li>Debugging: Easier to debut.</li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>How to validate React props using PropTypes</Accordion.Header>
                <Accordion.Body>
                    <h2>The steps to validate react props are:</h2>
                    <br />
                    <ul>
                        <li>Install PropsTypes (npm install prop-types)</li>
                        <li>Import PropTypes.</li>
                        <li>Define prop types.</li>
                        <li>React will automatically validate the props against the defined prop types during development. </li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Tell us the difference between nodejs and express js.</Accordion.Header>
                <Accordion.Body>
                    <h2>The difference between node js and express js are given below:</h2>
                    <br />
                    <p>Node js: It is a runtime environment that allows developers to run JavaScript on the server-side. It provides an event-driven, non=blocking model. Node js enables serverside scripting, newtorking applications and building scalable web servers.</p>
                    <br />
                    <p>Express js: It is a web application framework built on the of Node js. It provides a set of features and tools to simplify the development of web applications and APIs. </p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>What is a custom hook, and why will you create a custom hook?</Accordion.Header>
                <Accordion.Body>
                    <p>A custom hook is a JavaScript function that starts with the prefix "use" and enables to reuse stateful logic across multiple components. I can create a custom hook for reusability, readability, extract, reuse and share complex logic and to maintain.</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Blogs;