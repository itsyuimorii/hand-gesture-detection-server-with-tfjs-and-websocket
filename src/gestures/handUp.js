import { Finger, FingerCurl, FingerDirection } from "fingerpose";
import { GestureDescription } from "fingerpose";

// Define "jump" gesture where all fingers are up
const HandUp = new GestureDescription("HAND_UP");

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
