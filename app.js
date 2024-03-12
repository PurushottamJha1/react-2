
/*
  <div id="parent">
    <div class="child"
     <h1 class="child2">
      Inside react
      </h1>
      </div>
      </div>
*/

const pv=React.createElement("h1",{className:"child2"} , "Inside React h1")
const pv2=React.createElement("h2",{className:"child3"},"Inside React h2")
const pv1=React.createElement("div",{className:"child1"} , [pv,pv2]);
const heading=React.createElement("div",{id:"parent"}, pv1  ) ;

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
