import { Box } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
// import { useState, useEffect } from "react";
import video from '../../../assets/images/optimized.mp4'

export default function Video() {
  const targetRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = targetRef.current
      if (targetElement) {
        const { top, bottom } = targetElement.getBoundingClientRect()
        const isVisible = top < window.innerHeight && bottom >= 0
        setIsVisible(isVisible)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // console.log(isVisible)

  return (
    // <Box className="hm-vdo-container">
    <Box ref={targetRef} sx={{ height: '200px' }} className="">
      hlw
      {/* <ReactPlayer 
            url={video}
            controls
            loop={true}
        /> */}
      {/* {isVisible && ( */}
      <ReactPlayer
        url={video} // Replace with your video URL
        playing={isVisible ? true : false}
        //   controls
        loop
        muted
        width="auto"
        height="100%"
      />
      {/* )} */}
    </Box>
  )
}

// const VideoPlayer = (videoElement) => {
//   const [playerState, setPlayerState] = useState({
//     isPlaying: false,
//     progress: 0,
//     speed: 1,
//     isMuted: false,
//   });

//   const togglePlay = () => {
//     setPlayerState({
//       ...playerState,
//       isPlaying: !playerState.isPlaying,
//     });
//   };

//   useEffect(() => {
//     playerState.isPlaying
//     ? videoElement.current.play()
//     : videoElement.current.pause();
//   }, [playerState.isPlaying, videoElement]);

//   const handleOnTimeUpdate = () => {
//     const progress = (videoElement.current.currentTime / videoElement.current.duration) * 100;
//     setPlayerState({
//       ...playerState,
//       progress,
//     });
//   };

//   const handleVideoProgress = (event) => {
//     const manualChange = Number(event.target.value);
//     videoElement.current.currentTime = (videoElement.current.duration / 100) * manualChange;
//     setPlayerState({
//       ...playerState,
//       progress: manualChange,
//     });
//   };

//   const handleVideoSpeed = (event) => {
//     const speed = Number(event.target.value);
//     videoElement.current.playbackRate = speed;
//     setPlayerState({
//       ...playerState,
//       speed,
//     });
//   }

//   const toggleMute = () => {
//     setPlayerState({
//       ...playerState,
//       isMuted: !playerState.isMuted,
//     });
//   };

//   useEffect(() => {
//     playerState.isMuted
//     ? (videoElement.current.muted = true)
//     : (videoElement.current.muted = false);
//   }, [playerState.isMuted, videoElement]);

//   return {
//     playerState,
//     togglePlay,
//     handleOnTimeUpdate,
//     handleVideoProgress,
//     handleVideoSpeed,
//     toggleMute,
//   };
// };
