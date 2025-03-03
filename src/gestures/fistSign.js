//drag the screen, mouse action is click and drag
import { Finger, FingerCurl, FingerDirection } from "fingerpose";
import { GestureDescription } from "fingerpose";

const fistSign = new GestureDescription("DRAG_SIGN");

// JSON.stringify(gesturePrediction.poseData): [["Thumb","Half Curl","Vertical Up"],["Index","No Curl","Diagonal Up Right"],["Middle","Half Curl","Vertical Up"],["Ring","Full Curl","Vertical Up"],["Pinky","Full Curl","Vertical Up"]]

//Thumb
fistSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
fistSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.9)

//Index
fistSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0)
fistSign.addCurl(Finger.Index, FingerCurl.HalfCurl,0.9)
fistSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.9);
fistSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.9);
fistSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.9);

//Middle
fistSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0)
fistSign.addCurl(Finger.Middle, FingerCurl.HalfCurl,0.9)
fistSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.9);
fistSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.9);
fistSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.9);

//Ring
fistSign.addCurl(Finger.Ring, FingerCurl.FullCurl,1.0)
fistSign.addCurl(Finger.Ring, FingerCurl.HalfCurl,0.9)
fistSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.9);
fistSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.9);
fistSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight,0.9);

//Pinky
fistSign.addCurl(Finger.Pinky, FingerCurl.FullCurl,1.0)
fistSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl,0.9)
fistSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.9);
fistSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.9);
fistSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight,0.9);

export default fistSign;
