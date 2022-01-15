import React from 'react'
import { content } from '../../Styles/Sview';
// import { useRef, useState, useEffect } from 'react';

const Private = () =>{

    // const myVideo = useRef()
    // const [ stream, setStream ] = useState()

    // useEffect(() => {
	// 	navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
	// 		// setStream(stream)	
    //         // myVideo.current.srcObject = stream
	// 	})
    // },[])

    return (
        <div style={content}>
            {/* {stream &&  <video type="video" muted ref={myVideo} autoPlay style={{ width: "500px" }} />} */}
        </div>
    )
}

export default Private;