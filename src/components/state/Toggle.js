import React, { useState } from "react";
import "./ToggleStyles.css";

const Toggle = () => {
     const [on, setOn] = useState(false);

     const handleToggle = () => {
          setOn(on => !on); // có thể sử dụng 2 cách nhưng setOn(!on) có thể sẽ sai trong case gọi 2 lần setOn(!on) trong cùng 1 function
          //     setOn(!on);
     };

     return (
          <div className="wrapper">
               <div
                    className={`toggle ${on ? "active" : ""}`}
                    onClick={handleToggle}
               >
                    <div className={`spinner ${on ? "active" : ""}`}></div>
               </div>

               {/* <div className="toggle-control">
                    <div className="toggle-on" onClick={() => setOn(true)}>On</div>
                    <div className="toggle-off" onClick={() => setOn(false)}>Off</div>
               </div> */}
          </div>
     );
};

export default Toggle;
