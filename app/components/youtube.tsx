import React from "react";
import YouTube from "react-youtube";

export default function YoutubeVideo({ videoId }: { videoId: string }) {
	const [width, setWidth] = React.useState(0);
	React.useEffect(() => {
		setWidth(window.innerWidth * 0.8);
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

function _onReady(event: any) {
	event.target.pauseVideo();
}
