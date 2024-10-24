import React, { Component } from 'react';  
import SplitPane from 'react-split-pane';
//import up_arrow_icon from './up_arrow_icon.png';
class App extends Component{  
   render(){  
      return(  
        <SplitPane
         split="horizontal"
         defaultSize="5%"
         style={{ background: 'black'}}
        >
         
         <div>
         <img src="images/Group_1000004584.png" backgroundColor="black" />
         <img src="images/License_Plate_Recognition.png" backgroundColor="black" />
         {/* <img src="images/Group_1000004586.png" backgroundColor="black" /> */}
         </div>


         <SplitPane
          split="vertical"
          defaultSize="5%"
          style={{ background: 'white'}}
         >
          <div style={{ background: 'black', backgroundColor: 'black', height: '100%', borderLeft: '1px dotted black', borderRight: '1px dotted black', borderTop: '1px dotted black', borderBottom: '1px dotted black', alignItems: 'top', justifyContent: 'center', display: 'flex' }}>
           
           <div style={{ border: '1px solid yellow', width: '60px', height: '600px', borderRadius: '0px' }}>
            <div style={{ background: 'black', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', display: 'flex', paddingBottom: '10px'}} ><img src="images/Vector.png" backgroundColor="black" /></div>
            <div style={{ background: 'black', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', display: 'flex', paddingBottom: '10px'}} ><img src="images/Group_1000004633.png" backgroundColor="black" /></div>
            <div style={{ background: 'black', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', display: 'flex', paddingBottom: '10px'}} ><img src="images/Group_1000004637.png" backgroundColor="black" /></div>
            <div style={{ background: 'black', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', display: 'flex', paddingBottom: '10px'}} ><img src="images/Group_1000004765.png" backgroundColor="black" /></div>
            <div style={{ background: 'black', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', display: 'flex', paddingBottom: '10px'}} ><img src="images/Group_1000004646.png" backgroundColor="black" /></div>
            <div style={{ background: 'black', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', display: 'flex', paddingBottom: '10px'}} ><img src="images/Group_1000004768.png" backgroundColor="black" /></div>
            <div style={{ background: 'black', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', display: 'flex', paddingBottom: '10px'}} ><img src="images/Group_1000004642.png" backgroundColor="black" /></div>
            <div style={{ background: 'black', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', display: 'flex', paddingBottom: '10px'}} ><img src="images/Group_1000004645.png" backgroundColor="black" /></div>
            <div style={{ background: 'black', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', display: 'flex', paddingBottom: '10px'}} ><img src="images/Group_1000004634.png" backgroundColor="black" /></div>
           </div>
           
          </div>
          <div>
           <SplitPane
            split="vertical"
            defaultSize="67%"
            style={{ background: 'black'}}
            >
            <div style={{ background: 'black', height: '100%', borderLeft: '1px dotted black', borderRight: '1px dotted black', borderTop: '1px dotted black', borderBottom: '1px dotted black' }}>
            
             <div style={{ border: '1px solid yellow', width: '1150px', height: '400px', borderRadius: '0px', flexWrap: 'wrap', display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ background: 'black', backgroundColor: 'black', paddingBottom: '0px'}} ><img src="images/Rectangle_16142.png" backgroundColor="black" /></div>
              <div style={{ background: 'black', backgroundColor: 'black', paddingBottom: '0px'}} ><img src="images/Rectangle_16143.png" backgroundColor="black" /></div>
             </div>

             <div style={{ border: '1px solid yellow', width: '1150px', height: '400px', borderRadius: '0px', flexWrap: 'wrap', display: 'flex' }}>

              <div>
               <div style={{ border: '1px solid green', width: '565px', height: '275px', borderRadius: '0px', flexWrap: 'wrap', display: 'flex', paddingBottom: '0px' }}>
                <div style={{ background: 'black', backgroundColor: 'black', paddingBottom: '0px'}} ><img src="images/Rectangle_16156.png" backgroundColor="black" /></div>
                <div style={{ background: 'grey', backgroundColor: 'grey', paddingBottom: '0px', height: '246px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                 <div style={{ background: 'black', backgroundColor: 'black', paddingBottom: '0px'}} ><img src="images/Rectangle_16155.png" backgroundColor="black" /></div>
                </div>
               </div>
               <div style={{ background: 'grey', backgroundColor: 'grey', paddingBottom: '0px', width: '565px', height: '120px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                <div style={{ border: '1px solid black', width: '500px', height: '50px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                 78-5456 กรุงเทพมหานคร
                </div>
                <div style={{ border: '1px solid black', width: '500px', height: '50px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                 78-5456 กรุงเทพมหานคร
                </div>
               </div>
              </div>
              
             <div>
              <div style={{ border: '1px solid green', width: '565px', height: '275px', borderRadius: '0px', flexWrap: 'wrap', display: 'flex' }}>
               <div style={{ background: 'black', backgroundColor: 'black', paddingBottom: '0px'}} ><img src="images/Rectangle_16156.png" backgroundColor="black" /></div>
               <div style={{ background: 'grey', backgroundColor: 'grey', paddingBottom: '0px', height: '246px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                <div style={{ background: 'black', backgroundColor: 'black', paddingBottom: '0px'}} ><img src="images/Rectangle_16155.png" backgroundColor="black" /></div>
               </div>
              </div>
              <div style={{ background: 'grey', backgroundColor: 'grey', paddingBottom: '0px', width: '565px', height: '120px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
               <div style={{ border: '1px solid black', width: '500px', height: '50px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                78-5456 กรุงเทพมหานคร
               </div>
               <div style={{ border: '1px solid black', width: '500px', height: '50px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                78-5456 กรุงเทพมหานคร
               </div>
              
              </div>
             </div>
             
            </div>
             

            </div>

            <div style={{ background: 'black', height: '860px', width: '500px', borderLeft: '1px dotted black', borderRight: '1px dotted black', borderTop: '1px dotted black', borderBottom: '1px dotted black' }}>
              <div style={{ border: '1px solid yellow', width: '500x', height: '860px', borderRadius: '0px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
               <div style={{ background: 'black', backgroundColor: 'black', paddingBottom: '0px'}} ><img src="images/Frame_11472.png" backgroundColor="black" height="850px" /></div>
              </div>
            </div>
            

            {/* <div>
             <SplitPane
              split="vertical"
              defaultSize="50%"
              style={{ background: 'white'}}
             >
             <div style={{ background: 'white', height: '100%', borderLeft: '1px dotted black', borderRight: '1px dotted black', borderTop: '1px dotted black', borderBottom: '1px dotted black' }}>Pane 3</div>
             <div style={{ background: 'white', height: '100%', borderLeft: '1px dotted black', borderRight: '1px dotted black', borderTop: '1px dotted black', borderBottom: '1px dotted black' }}>Pane 4</div>
             </SplitPane>
            </div> */}

            
        </SplitPane>
      </div>
      </SplitPane>
      </SplitPane>
      );  
   }  
}  
export default App;  
