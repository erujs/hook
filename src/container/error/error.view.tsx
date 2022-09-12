import React, { FC } from 'react';
import logo from '../../logo.svg';
import '../../App.css';

interface Props {
  errorcode: string;
  info: string;
}

const AppErr:FC<Props> = ({
  errorcode,
  info,
}) => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <code aria-label={errorcode} tabIndex={0}>{errorcode}</code>
                </p>
                <p>
                    <code aria-label={info} tabIndex={0}>{info}</code>
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
            </a>
            </header>
        </div>
    );
}

export default AppErr;
