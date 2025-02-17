import { Finger, FingerCurl, FingerDirection } from "fingerpose";
import { GestureDescription } from "fingerpose";

const okSign = new GestureDescription("OK_SIGN");

/**
 * 
[["Thumb", "No Curl", "Horizontal Right"], 
["Index", "Half Curl", "Horizontal Right"], 
["Middle", "Half Curl", "Horizontal Right"], ["Ring", "Half Curl", "Horizontal Right"], ["Pinky", "Half Curl", "Horizontal Right"]]
 */

//Thumb
okSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
okSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
okSign.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.9);
okSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
okSign.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.9);
//Index
okSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0)
okSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0)
okSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.9)
okSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0)
okSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.9)

for (let finger of [
    Finger.Middle,
    Finger.Ring,
    Finger.Pinky,
]) {
    okSign.addCurl(finger, FingerCurl.NoCurl, 1.0);
    okSign.addDirection(finger, FingerDirection.VerticalUp, 1.0);
    okSign.addDirection(finger, FingerDirection.DiagonalUpRight, 0.9);
    okSign.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.9);
}

export default okSign;
