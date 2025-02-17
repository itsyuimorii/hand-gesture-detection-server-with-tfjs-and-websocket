import { Finger, FingerCurl, FingerDirection } from "fingerpose";
import { GestureDescription } from "fingerpose";

const OkSign = new GestureDescription("OK_SIGN");

/**
 * [["Thumb","No Curl","Diagonal Up Right"],
 * ["Index","Half Curl","Diagonal Up Right"],
 * ["Middle","No Curl","Vertical Up"],
 * ["Ring","No Curl","Vertical Up"],
 * ["Pinky","No Curl","Vertical Up"]]
 */

//Thumb
OkSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, FingerDirection.DiagonalUpRight, 1.0);

//Index
OkSign.addCurl(Finger.Index, FingerCurl.HalfCurl, FingerDirection.DiagonalUpRight, 1.0)

//Rest of fingers
for (let finger of [
    Finger.Middle,
    Finger.Ring,
    Finger.Pinky,
]) {
    OkSign.addDirection(finger, FingerDirection.VerticalUp, 1.0);
    OkSign.addDirection(finger, FingerDirection.VerticalUp, 1.0);
    OkSign.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

export default OkSign;
