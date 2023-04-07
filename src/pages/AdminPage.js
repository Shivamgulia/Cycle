import { useState } from 'react';

import AddCycle from '../components/Admin/AddCycle';
import AddGuard from '../components/Admin/AddGuard';
import AddStudentForm from '../components/Admin/AddStudentForm';
import DeleteCycle from '../components/Admin/DeleteCycle';
import DeleteGuard from '../components/Admin/DeleteGuard';
import DeleteStudent from '../components/Admin/DeleteStudent';
import Form from '../components/Admin/Form';

import classes from './AdminPage.module.css';
import DeleteYear from '../components/Admin/DeleteYear';

const AdminPage = () => {
  const [addst, setAddst] = useState(false);
  const [delst, setDelst] = useState(false);
  const [addgu, setAddgu] = useState(false);
  const [delgu, setDelgu] = useState(false);
  const [addcy, setAddcy] = useState(false);
  const [delcy, setDelcy] = useState(false);
  const [delye, showDely] = useState(false);
  // const [showForm, setShowForm] = useState(true);

  const adds = () => {
    if (addst) setAddst(false);
    if (!addst) {
      setAddst(!addst);
      setDelst(false);
      setAddgu(false);
      setDelgu(false);
      setAddcy(false);
      setDelcy(false);
      showDely(false);
    }
  };
  const dels = () => {
    if (delst) setDelst(false);
    if (!delst) {
      setAddst(false);
      setDelst(!delst);
      setAddgu(false);
      setDelgu(false);
      setAddcy(false);
      setDelcy(false);
      showDely(false);
    }
  };
  const addg = () => {
    if (addgu) setAddgu(false);
    if (!addgu) {
      setAddst(false);
      setDelst(false);
      setAddgu(!addgu);
      setDelgu(false);
      setAddcy(false);
      setDelcy(false);
      showDely(false);
    }
  };
  const delg = () => {
    if (delgu) setDelgu(false);
    if (!delgu) {
      setAddst(false);
      setDelst(false);
      setAddgu(false);
      setDelgu(!delgu);
      setAddcy(false);
      setDelcy(false);
      showDely(false);
    }
  };
  const addc = () => {
    if (addcy) setAddcy(false);
    if (!addcy) {
      setAddst(false);
      setDelst(false);
      setAddgu(false);
      setDelgu(false);
      setAddcy(!addcy);
      setDelcy(false);
      showDely(false);
    }
  };
  const delc = () => {
    if (delcy) setDelcy(false);
    if (!delcy) {
      setAddst(false);
      setDelst(false);
      setAddgu(false);
      setDelgu(false);
      setAddcy(false);
      setDelcy(!delcy);
      showDely(false);
    }
  };
  const dely = () => {
    if (delgu) setDelgu(false);
    if (!delgu) {
      setAddst(false);
      setDelst(false);
      setAddgu(false);
      setDelgu(false);
      setAddcy(false);
      setDelcy(false);
      showDely(!delye);
    }
  };

  return (
    <div className={classes.container}>
      <div>
        {addst && <AddStudentForm />}
        {delst && <DeleteStudent />}
        {addgu && <AddGuard />}
        {delgu && <DeleteGuard />}
        {addcy && <AddCycle />}
        {delcy && <DeleteCycle />}
        {delye && <DeleteYear />}

        {
          <Form
            printadds={adds}
            printdels={dels}
            printaddg={addg}
            printdelg={delg}
            printaddc={addc}
            printdelc={delc}
            printdely={dely}
          />
        }
      </div>
    </div>
  );
};
export default AdminPage;
