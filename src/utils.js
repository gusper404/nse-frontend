export const getYoutubeVideoThumbnail = (url, size = 'mqdefault') => {
	var regex = /v=([^&]+)/;
	var match = regex.exec(url);
	const videoId = match[1]

  const SIZES = {
    small: 'default',
    medium: 'mqdefault',
    large: 'hqdefault',
    max: 'maxresdefault',
  }

	return `https://img.youtube.com/vi/${videoId}/${SIZES[size] ?? size}.jpg`
}