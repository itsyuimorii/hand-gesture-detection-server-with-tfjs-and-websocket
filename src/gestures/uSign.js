import { Finger, FingerCurl, FingerDirection } from "fingerpose";
import { GestureDescription } from "fingerpose";

const uSign = new GestureDescription("U_SIGN");
/**
 * [["Thumb","Half Curl","Diagonal Up Left"],
 * ["Index","No Curl","Vertical Up"],
 * ["Middle","No Curl","Vertical Up"],
 * ["Ring","Full Curl","Vertical Up"],
 * ["Pinky","Full Curl","Diagonal Up Left"]]
 */

//Thumb
uSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
uSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.9);
uSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
uSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

//Index
uSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
uSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.9);
uSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.9);
uSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.9);

//Middle
uSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
uSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.9);
uSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.9);
uSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.9);

//Ring
uSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
uSign.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);
uSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
uSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.9);
uSign.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.9);

//Pinky
uSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
uSign.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);
uSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
uSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
uSign.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);


export default uSign;


