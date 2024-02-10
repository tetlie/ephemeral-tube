const fetchVideos = async () => {
  // const apiKey = process.env.YOUTUBE_API_KEY
  const maxResults = 10
  const keyword = 'unique niche'
  const publishedAfter = '2023-01-01T00:00:00Z'

  // Use the search endpoint to find video IDs based on search criteria
  const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=id&maxResults=${maxResults}&q=${keyword}&publishedAfter=${publishedAfter}&type=video&key=${apiKey}`

  try {
    // Fetch video IDs from the search endpoint
    const searchResponse = await fetch(searchUrl)
    const searchData = await searchResponse.json()
    const videoIds = searchData.items.map((item) => item.id.videoId).join(',')

    if (!videoIds) {
      console.log('No videos found matching the criteria.')
      return []
    }

    // Use the video IDs to fetch details from the videos endpoint
    const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoIds}&part=snippet,statistics&key=${apiKey}`
    const detailsResponse = await fetch(detailsUrl)
    const detailsData = await detailsResponse.json()
    return detailsData.items
  } catch (error) {
    console.error('Error fetching videos:', error)
    return []
  }
}

export default fetchVideos
