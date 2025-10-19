import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import routeLink from './App';
import { RouterProvider } from 'react-router-dom';

const container = document.getElementById('root');
if (!container) {
  throw new Error("Root container (#root) が見つかりません。");
}
const root = ReactDOM.createRoot(container);

//const root = ReactDOM.createRoot(document.getElementById('root'));
//..createRoot に渡している getElementById('root') の戻り値の型は HTMLElement | null
//createRoot の第1引数の型は Container（型エイリアス）で、type Container = Element | DocumentFragment;。したがって null は不可。そのまま渡すと「null の可能性がある」と TypeScript が警告する
//HTMLElement は Element のサブタイプ（HTMLElement extends Element）なので、HTMLElement は Container に代入可能。
//つまり document.getElementById('root') で null を除外して HTMLElement を渡せばOK。

root.render(
  <React.StrictMode>
  <RouterProvider router={routeLink} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();