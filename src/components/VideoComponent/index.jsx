const VideoComponent = () => {
  return (
    <div className="videoComponent">
      {/* <h2>Видео и комментарии</h2> */}
      <a href="https://alexyanovsky.com/udvoenie_pribyli?utm_source=trafik_web ">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wVkD89V1-BQ?si=TMKF3s-HyCZxwIpU&amp;start=14"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </a>
    </div>
  );
};
export default VideoComponent;
