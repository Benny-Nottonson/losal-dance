import React from "react";
import YouTube, { YouTubeEvent } from "react-youtube";

export default function YoutubeVideo({ videoId }: { videoId: string }) {
	const [width, setWidth] = React.useState(0);
	React.useEffect(() => {
		setWidth(window.innerWidth * 0.44);
	}, []);
	const vidHeight = width * 0.5625;
	const vidWidth = width;
	const opts = {
		height: `${vidHeight}`,
		width: `${vidWidth}`,
		playerVars: {
			autoplay: 1,
		},
	};

	return <YouTube videoId={videoId} opts={opts} onReady={_onReady} />;
}

function _onReady(event: YouTubeEvent) {
	event.target.pauseVideo();
}
