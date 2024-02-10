export default async function Page() {
  // const videos = await fetchVideos()

  return (
    <div className="text-white">
      {/* <h1>Low Engagement Videos</h1>
      <ul>
        {videos?.map((video) => (
          <li key={video?.id.videoId}>
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {video?.snippet.title} - Views: {video?.statistics.viewCount}
            </a>
          </li>
        ))}
      </ul> */}
    </div>
  )
}
