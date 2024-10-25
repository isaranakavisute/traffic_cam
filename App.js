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
         
         <div style={{ background: 'black', backgroundColor: 'black', paddingBottom: '0px', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}> 
          <div style={{ background: 'black', backgroundColor: 'black', paddingBottom: '0px', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'left'}}>
           <div><img src="images/Group_1000004584.png" backgroundColor="black" /></div>
           <div><img src="images/License_Plate_Recognition.png" backgroundColor="black" /></div>
          </div>
          {/* <div><img src="images/Group_1000004584.png" backgroundColor="black" /></div>
          <div><img src="images/License_Plate_Recognition.png" backgroundColor="black" /></div> */}
          {/* <div><img src="images/Group_1000004586.png" backgroundColor="black" /> </div> */}
          <div><img src="images/Group_1000004583.png" backgroundColor="black" /></div>
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
                {/* <div style={{ border: '1px solid black', width: '500px', height: '50px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                 78-5456 กรุงเทพมหานคร
                </div> */}
                {/* <div style={{ border: '1px solid black', width: '500px', height: '50px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                 78-5456 กรุงเทพมหานคร
                </div> */}
                <table border="1" bordercolor="black" align="center" width='500px'>
                 <tr>
                  <td colSpan="2" align="center">78-5456 กรุงเทพมหานคร</td>
                 </tr>
                 <tr>
                  <td align="center" borderRight="1">Isuzu White</td>
                  <td align="center">2024-06-28 10:12:02</td>
                 </tr>
                </table>
               </div>
              </div>
              
             <div>
              <div style={{ border: '1px solid green', width: '565px', height: '275px', borderRadius: '0px', flexWrap: 'wrap', display: 'flex' }}>
               <div style={{ background: 'black', backgroundColor: 'black', paddingBottom: '0px'}} ><img src="images/Rectangle_16148.png" backgroundColor="black" width="274px" height="246px" /></div>
               <div style={{ background: 'grey', backgroundColor: 'grey', paddingBottom: '0px', height: '246px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                <div style={{ background: 'grey', backgroundColor: 'grey', paddingBottom: '0px'}} ><img src="images/Rectangle_16149.png" backgroundColor="black" width="274px" height="247px"/></div>
               </div>
              </div>
              <div style={{ background: 'grey', backgroundColor: 'grey', paddingBottom: '0px', width: '565px', height: '120px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
               {/* <div style={{ border: '1px solid black', width: '500px', height: '50px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                78-5456 กรุงเทพมหานคร
               </div>
               <div style={{ border: '1px solid black', width: '500px', height: '50px', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                78-5456 กรุงเทพมหานคร
               </div> */}

               <table border="1" bordercolor="black" align="center" width='500px'>
                 <tr>
                  <td colSpan="2" align="center">66-4589 กรุงเทพมหานคร</td>
                 </tr>
                 <tr>
                  <td align="center" borderRight="1">Toyota Hilux Revo</td>
                  <td align="center">2024-06-28 10:13:02</td>
                 </tr>
                </table>
              
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
