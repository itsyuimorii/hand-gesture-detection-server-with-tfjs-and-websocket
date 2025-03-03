//drag the screen, mouse action is click and drag
import { Finger, FingerCurl, FingerDirection } from "fingerpose";
import { GestureDescription } from "fingerpose";

const dragSign = new GestureDescription("PINCH_SIGN");

 /**
  * [["Thumb","No Curl","Diagonal Up Right"],
  * ["Index","Half Curl","Diagonal Up Right"],
  * ["Middle","Full Curl","Diagonal Up Right"],
  * ["Ring","Full Curl","Diagonal Up Right"],
  * ["Pinky","Full Curl","Diagonal Up Right"]]
  */
 
//Thumb
dragSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
dragSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
dragSign.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.9);
dragSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
dragSign.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.9);

//Index
dragSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0)
dragSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0)
dragSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.9)
dragSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0)
dragSign.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.9)

//Rest of fingers
for (let finger of [
    Finger.Middle,
    Finger.Ring,
    Finger.Pinky,
]) {
    dragSign.addCurl(finger, FingerCurl.FullCurl, 1.0)
    dragSign.addDirection(finger, FingerDirection.VerticalUp, 1.0);
    dragSign.addDirection(finger, FingerDirection.DiagonalUpRight, 0.9);
    dragSign.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.9);
}

export default dragSign;
