window.addEventListener("load", () => {
    webgazer.setGazeListener(function (data, elapsedTime) {
        if (data == null) {
            return;
        }
        var xprediction = data.x; //these x coordinates are relative to the viewport
        var yprediction = data.y; //these y coordinates are relative to the viewport
        console.log(xprediction, yprediction);
    }).begin();

    setInterval(async () => {
        let data = await webgazer.getCurrentPrediction();
        console.log(data);
    }, 1000);
});

