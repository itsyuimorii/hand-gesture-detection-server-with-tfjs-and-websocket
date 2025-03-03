// 🚀 ~ hands.forEach ~ JSON.stringify(gesturePrediction.poseData): [["Thumb","Half Curl","Diagonal Up Left"],["Index","No Curl","Vertical Up"],["Middle","No Curl","Vertical Up"],["Ring","No Curl","Vertical Up"],["Pinky","No Curl","Vertical Up"]]


//scroll up and scroll down
import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const fourFingerUpSign = new GestureDescription('FOUR_FINGER_UP');

//Thumb
fourFingerUpSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
fourFingerUpSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9);
fourFingerUpSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.9);
fourFingerUpSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.9);


//Index
fourFingerUpSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
fourFingerUpSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.9);
fourFingerUpSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.9);
fourFingerUpSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.9);

//Middle
fourFingerUpSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)
fourFingerUpSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

//Ring
fourFingerUpSign.addCurl(Finger.Ring, FingerCurl.NoCurl,1.0)
fourFingerUpSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.9);
fourFingerUpSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.9);
fourFingerUpSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight,0.9);

//Pinky
fourFingerUpSign.addCurl(Finger.Ring, FingerCurl.NoCurl,1.0)
fourFingerUpSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.9);
fourFingerUpSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight,0.9);

export default fourFingerUpSign;