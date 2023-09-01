import React from 'react';
import ReactDOM from 'react-dom/client';
import Road_404 from "./Road_404";
import RoadContent from "./RoadContent";

const root = ReactDOM.createRoot(document.getElementById('React'));
root.render(
   <React.StrictMode>
       <Road_404 roadConten={RoadContent.content(1)}></Road_404>
    </React.StrictMode>
);