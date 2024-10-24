import React, { Component } from 'react';  
import SplitPane from 'react-split-pane';
class App extends Component{  
   render(){  
      return(  

         
         // <div>  
         //    <h1>Traffic Cam</h1>  
         // </div>  
         

         <SplitPane
          split="vertical"
          defaultSize="25%"
          style={{ background: 'white'}}
         >
          <div style={{ background: 'white', height: '100%', borderLeft: '1px dotted black', borderRight: '1px dotted black', borderTop: '1px dotted black', borderBottom: '1px dotted black' }}>Pane 1</div>
          <div>
           <SplitPane
            split="vertical"
            defaultSize="33.33%"
            style={{ background: 'white'}}
            >
            <div style={{ background: 'white', height: '100%', borderLeft: '1px dotted black', borderRight: '1px dotted black', borderTop: '1px dotted black', borderBottom: '1px dotted black' }}>Pane 2</div>
            <div>
            <SplitPane
             split="vertical"
             defaultSize="50%"
             style={{ background: 'white'}}
            >
            <div style={{ background: 'white', height: '100%', borderLeft: '1px dotted black', borderRight: '1px dotted black', borderTop: '1px dotted black', borderBottom: '1px dotted black' }}>Pane 3</div>
            <div style={{ background: 'white', height: '100%', borderLeft: '1px dotted black', borderRight: '1px dotted black', borderTop: '1px dotted black', borderBottom: '1px dotted black' }}>Pane 4</div>
            </SplitPane>
          </div>
        </SplitPane>
      </div>
      </SplitPane>
      );  
   }  
}  
export default App;  
