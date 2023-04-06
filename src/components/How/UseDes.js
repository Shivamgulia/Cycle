import classes from './UseDes.module.css';

export default function UseDes() {
  return (
    <div>
      <h1>About</h1>
      <p>
        Green rides is an application developed to make the renting of cycles
        easier just by scanning the qr code present on cycles. Students can rent
        the cycles from any stand and then return it to the guard present in any
        stand.
      </p>
      <h1>How to Use Green Rides</h1>
      <ul>
        <li>Download the Green Rides app with the link below.</li>
        <a href="">Download the App</a>
        <li>
          Sign Up using your University email Id in the signup option. Do not
          use your personal email if you do you will have to uninstall and then
          reinstall the app. After that you will be prompted to create a
          password for your account, create a password and create an account.
        </li>
        <li>Now, you can eaily login with you email and password.</li>
        <li>
          To Rent a cycle just go the the rent option, scan the QR code present
          on the cycle and confirm that you want to rent this cycle.
        </li>
        <li>
          To Return the cycle just take it to the guard, he will scan the qr
          code with his device and return the cycle.
        </li>
      </ul>
    </div>
  );
}
