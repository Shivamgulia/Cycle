import classes from './UseDes.module.css';
import apk from '../../resources/greenrides.apk';
import one from '../../resources/how/1_locateDownload.jpg';
import two from '../../resources/how/2_installUsingPackageInstaller.jpg';
import three from '../../resources/how/3_ClickInstall.jpg';
import four from '../../resources/how/4_InstallAnyway.jpg';
import five from '../../resources/how/5_GiveCameraPermission.jpg';
import six from '../../resources/how/6_signUpWithGoogle.jpg';
import seven from '../../resources/how/7_selectCollegeMail.jpg';
import eight from '../../resources/how/8_enterPassword.jpg';
import nine from '../../resources/how/9_nowYouCanLogIn.jpg';
import ten from '../../resources/how/10_homepage.jpg';
import eleven from '../../resources/how/11_afterTappingScanQR.jpg';
import twelve from '../../resources/how/12_clickRent.jpg';
import thirteen from '../../resources/how/13_cycleIsRented.jpg';

export default function UseDes() {
  return (
    <div>
      <p>
        <h1>Green rides </h1> is an application developed to make the renting of
        cycles easier just by scanning the qr code present on cycles. Students
        can rent the cycles from any stand and then return it to the guard
        present in any stand.
      </p>
      <h1>How to Use Green Rides</h1>
      <ol>
        <li>Download the Green Rides app with the link below.</li>
        <div className={classes.download}>
          <a href={apk} download>
            <button class={classes.button56} role="button">
              Download the App
            </button>
          </a>
        </div>
        <li>
          Installing : locate the downloaded app. Install the app using package
          installer.
        </li>
        <div className={classes.images1}>
          <img src={one} alt="" />
          <img src={two} alt="" />
          <img src={three} alt="" />
          <img src={four} alt="" />
          <img src={five} alt="" />
          {/* <img src={six} alt="" /> */}
        </div>
        <li>
          Sign Up using your University email Id in the signup option. Do not
          use your personal email if you do you will have to uninstall and then
          reinstall the app. After that you will be prompted to create a
          password for your account, create a password and create an account.
        </li>
        <div className={classes.images1}>
          <img src={six} alt="" />
          <img src={seven} alt="" />
          <img src={eight} alt="" />
        </div>
        <li>Now, you can eaily login with you email and password.</li>
        <div className={classes.images1}>
          <img src={nine} alt="" />
          <img src={ten} alt="" />
        </div>
        <li>
          To Rent a cycle just go the the rent option, scan the QR code present
          on the cycle and confirm that you want to rent this cycle.
        </li>
        <div className={classes.images1}>
          <img src={eleven} alt="" />
          <img src={twelve} alt="" />
          <img src={thirteen} alt="" />
        </div>
        <li>
          To Return the cycle just take it to the guard, he will scan the qr
          code with his device and return the cycle.
        </li>
      </ol>
    </div>
  );
}
