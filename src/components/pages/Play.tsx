function PlayPage() {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 hue-rotate-[330deg]"
        autoPlay
        muted
        loop
        playsInline
        controlsList="nodownload"
      >
        <source src="/src/assets/video/play-bg.mp4" type="video/mp4" />
      </video>

      <div className="w-full h-full absolute flex z-10 p-10">
        <div className="w-1/2 relative">
          <img
            className="object-cover h-[80vh]"
            src="src/assets/image/landbanana.png"
            alt=""
          />
          <img
            className="object-cover absolute"
            src="src/assets/image/sound.png"
            alt=""
          />
          <img
            className="object-cover absolute pl-24 pb-8  ;"
            src="\src\assets\image\info.png"
            alt=""
          />
        </div>
        <div className="w-1/2 relative">
          <img
            className="object-cover absolute right-0 h-[80vh]"
            src="src/assets/image/guesstheban.png"
            alt=""
          />
          <img
            className="object-cover absolute bottom-0 right-0"
            src="src/assets/image/play.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default PlayPage;
