import * as handPoseDetection from "@tensorflow-models/hand-pose-detection";
import * as tf from "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-backend-webgl";

import Webcam from "react-webcam";
import * as fp from "fingerpose";
import { useRef } from "react";
import { drawHand } from "./components/utils";
import okSign from "./gestures/okSign";
import uSign from "./gestures/uSign";
import wSign from "./gestures/wSign";
import fourFingerUpSign from "./gestures/fourFingerUpSign";
import fullHandUp from "./gestures/fullHandUp";
import pinchSign from "./gestures/pinchSign"
import fistSign from "./gestures/fistSign";


const App = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runHandpose = async () => {
    const loadedHandModel = await handPoseDetection.SupportedModels
      .MediaPipeHands;

    const estimationConfig = {
      runtime: "tfjs",
      flipHorizontal: true
    };

    const detector = await handPoseDetection.createDetector(
      loadedHandModel,
      estimationConfig
    );

    setInterval(async () => {
      await detectModel(detector);
    }, (1 / 30) * 1000);
  };
  runHandpose();

  const detectModel = async (detector) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      //Get video properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      //Set video height and width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      //Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      //Make Detections
      const hands = await detector.estimateHands(video, {
        flipHorizontal: true,
      });

      // const mapGestures = [{hND: "Hnd1", gest: ["HandUp", jumptata]}, {hND: "Hnd2", gest: "HandUp"}];
      const mapGestures = [];
      hands.forEach((hand) => {
        const GE = new fp.GestureEstimator([uSign, okSign, wSign, fistSign, fourFingerUpSign, fullHandUp, pinchSign ]);

        const gesturePrediction = GE.estimate(hand.keypoints3D, 9);


        console.log("🦔🦔🦔🦔🦔🦔🦔🦔🦔~ hands.forEach ~ gesturePrediction:", gesturePrediction)
        console.log("🧀🧀🧀🧀🧀🧀🧀🧀🧀 ~ Test:", JSON.stringify(gesturePrediction.gestures))
        console.log("💩💩💩💩💩💩💩💩💩 ~ JSON.stringify(gesturePrediction.poseData):", JSON.stringify(gesturePrediction.poseData))
        if (gesturePrediction.gestures.length > 0) {
          console.log("🦖🦖🦖🦖🦖🦖🦖🦖🦖🦖",hand)
          mapGestures.push({ hand: hand, gestures: gesturePrediction.gestures, width: videoWidth, height: videoHeight });
        }
      });

      // sendWSNotification(mapGestures); 
      if (window.electron && mapGestures.length > 0) {
        window.electron.sendHandGestureNotification(mapGestures)
      }
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hands, ctx);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Webcam
        ref={webcamRef}
        mirrored={true}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 640,
          height: 480,
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          // border: "2px solid red",
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 99,
          width: 640,
          height: 480,
        }}
      />
    </div>
  );
};

export default App;
