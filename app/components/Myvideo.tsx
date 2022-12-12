import React from "react";


const MyVideo = () => (
<video className="bkg h-full w-full absolute object-cover"
id="bg"
loop
autoPlay
muted
>
         <source src="./video-1.mp4" type="video/mp4"
         />
        
     </video>
)

export default MyVideo
