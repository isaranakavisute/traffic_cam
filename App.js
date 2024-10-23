import React, { Component } from 'react';  
import SplitPane from 'react-split-pane';
class App extends Component{  
   render(){  
      return(  

         /*
         <div>  
            <h1>Traffic Cam</h1>  
         </div>  
         */

         <SplitPane
          split="vertical"
          //minSize={50}
          //maxSize={300}
          //defaultSize={100}
          minSize="50%" 
          defaultSize="50%"
          //height="100%"
          height= "100%"
          style={{ background: 'white', borderLeft: '1px solid #ccc' }}
        >
          <div style={{ background: 'green' }}>Pane 1</div>
          <div style={{ background: 'purple' }}>Pane 2</div>
        </SplitPane>

      );  
   }  
}  
export default App;  
