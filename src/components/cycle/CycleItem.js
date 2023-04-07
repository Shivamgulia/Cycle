import classes from './CycleItem.module.css';

const CycleItem = (props) => {
  let status;
  status = 'Not Rented';
  if (props.status === 'rented') status = 'Rented';

  let branchName;
  const branchCode = props.stdemail.substring(4, 6);
  if (branchCode === '01') {
    branchName = 'Bio Chemical Engineering';
  }
  if (branchCode === '02') {
    branchName = 'Civil Engineering';
  }
  if (branchCode === '03') {
    branchName = 'Chemical Techonology';
  }
  if (branchCode === '04') {
    branchName = 'Computer Sceince and Engineering';
  }
  if (branchCode === '05') {
    branchName = 'Electrical Engineering';
  }
  if (branchCode === '06') {
    branchName = 'Electronics Engineering';
  }
  if (branchCode === '07') {
    branchName = 'Food Technology';
  }
  if (branchCode === '08') {
    branchName = 'Information Technology';
  }
  if (branchCode === '09') {
    branchName = 'Leather Technology';
  }
  if (branchCode === '10') {
    branchName = 'Mechanical Engineering';
  }
  if (branchCode === '11') {
    branchName = 'Oil Technology';
  }
  if (branchCode === '12') {
    branchName = 'Plastic Technology';
  }
  if (branchCode === '13') {
    branchName = 'Paint Technology';
  }

  return (
    <li className={classes.item}>
      <figure>
        <h3>Cycle Id: {props.id}</h3>
        <h3>Name: {props.stdname}</h3>
        <h3>Email: {props.stdemail}</h3>
        <h3>Branch: {branchName}</h3>
        {/* <figcaption>{status}</figcaption> */}
      </figure>
    </li>
  );
};

export default CycleItem;
