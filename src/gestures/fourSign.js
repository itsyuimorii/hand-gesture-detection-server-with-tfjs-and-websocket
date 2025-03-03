// 🚀 ~ hands.forEach ~ JSON.stringify(gesturePrediction.poseData): [["Thumb","Half Curl","Diagonal Up Left"],["Index","No Curl","Vertical Up"],["Middle","No Curl","Vertical Up"],["Ring","No Curl","Vertical Up"],["Pinky","No Curl","Vertical Up"]]


//scroll up and scroll down
import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

export const fourSign = new GestureDescription('FOUR_SIGN');

//Thumb
fourSign.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
fourSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9);
fourSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft,  0.9);

//Index
fourSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
fourSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.9);
fourSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.9);
fourSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft,  0.9);

//Middle
fourSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
fourSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

//Ring
fourSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
fourSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.9);
fourSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.9);
fourSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight,0.9);

//Pinky
fourSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
fourSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.9);
fourSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight,0.9);

export default fourSign;