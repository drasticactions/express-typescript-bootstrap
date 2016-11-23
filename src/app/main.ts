import 'babel-polyfill';
import { createElement } from 'react';
import { render } from 'react-dom';
import { IAction, Actions, initialAction } from './actions';
import { App } from './components/app';
import { InitialState, IState, getInitialState } from './state';
import { Observable, Subject } from 'rx';

const content = document.getElementById('app');
const initial = [];

async function view (s) {
    let state = await s;
    render(createElement(App, state), content);
}

function run() {
    Actions
        .startWith(getInitialState())
        .scan((s: Promise<IState>, action: IAction) => Promise.resolve(s).then(action))
        .subscribe(view);

    Actions.onNext(initialAction);
}

window.onload = run;