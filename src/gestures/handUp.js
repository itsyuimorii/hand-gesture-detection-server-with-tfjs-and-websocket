import { Finger, FingerCurl, FingerDirection } from "fingerpose";
import { GestureDescription } from "fingerpose";

const HandUp = new GestureDescription("HAND_UP");

/**
 * [["Thumb","No Curl","Diagonal Up Right"],
 * ["Index","No Curl","Diagonal Up Right"],
 * ["Middle","No Curl","Diagonal Up Right"],
 * ["Ring","No Curl","Diagonal Up Right"],
 * ["Pinky","No Curl","Vertical Up"]]
 */

// All fingers: Fully extended and pointing up
for (let finger of [
  Finger.Thumb,
  Finger.Index,
  Finger.Middle,
  Finger.Ring,
  Finger.Pinky,
]) {
  HandUp.addCurl(finger, FingerCurl.NoCurl, 1.0);
  HandUp.addDirection(finger, FingerDirection.VerticalUp, 1.0);
  HandUp.addDirection(finger, FingerDirection.DiagonalUpLeft, 1.0);
  HandUp.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0);
}

export default HandUp;
