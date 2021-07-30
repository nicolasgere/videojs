import Videolytics from "../lib";
const videolytics = new Videolytics();

document.querySelector("body").innerHTML = `<video id="test" width="400" controls>
<source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4">
Your browser does not support HTML video.
</video>`;

console.log("myLibraryInstance", videolytics);
videolytics.track('test')
videolytics.myMethod(); 