import React from 'react';
import {createRoot} from "react-dom/client";
import Hello from './components/Hello.jsx';

const appContainer = document.getElementById('appContainer');
const root = createRoot(appContainer);

root.render(<Hello />);