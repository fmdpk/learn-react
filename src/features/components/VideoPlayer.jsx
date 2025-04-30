import { useState, useRef, useEffect } from "react";

function Video({ src, isPlaying, isMute }) {
  const ref = useRef(null);

  useEffect(() => {
    console.log(ref.current);
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);

  return (
    <video ref={ref} src={src} loop playsInline controls muted={!isMute} />
  );
}

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMute, setIsMute] = useState(false);
  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button onClick={() => setIsMute(!isMute)}>
        {isMute ? "mute" : "unMute"}
      </button>
      <Video
        isPlaying={isPlaying}
        isMute={isMute}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
