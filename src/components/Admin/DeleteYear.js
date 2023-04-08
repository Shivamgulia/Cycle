import { useRef, useState } from 'react';
import classes from './AddStudentForm.module.css';
import useHttp from '../hooks/use-http';
import { DeleteStudents } from '../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import AuthContext from '../../store/auth-context';
import ListRented from './ListRented';

const DeleteYear = () => {
  const yearref = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [showList, setShowList] = useState(false);
  //   const [list, setList] = useState([]);

  const { sendRequest, data, status, error } = useHttp(DeleteStudents, false);

  //   useEffect(() => {
  //     setList(createYearList());
  //   }, [isLoading]);

  function removeList() {
    setShowList(false);
  }

  const submitionHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const value = Number(yearref.current.value);
    const year = value % 100;
    console.log(year);
    sendRequest({
      year: year,
      token: AuthContext.token,
    });

    setIsLoading(false);
    setShowList(true);
  };

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (status == 'completed ') {
    console.log(data);
  }

  return (
    <section className={classes.auth}>
      <h1>Delete Students from Year</h1>
      <form onSubmit={submitionHandler}>
        <div className={classes.control}>
          <label htmlFor="Year">Start Year</label>
          {/* <select name="Year" id="Year" ref={yearref}>
            {list.map((y) => {
              return (
                <option key={y} value={y}>
                  {y}
                </option>
              );
            })}
          </select> */}
          <input
            type="Number"
            min="1999"
            max={new Date().getFullYear()}
            required
            ref={yearref}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>Delete Students</button>}
          {isLoading && <p>Sending Request....</p>}
        </div>
      </form>
      {showList && data && data.length > 0 && (
        <ListRented list={data} removeOverlay={removeList} />
      )}
    </section>
  );
};

export default DeleteYear;

// function createYearList() {
//   let yearList = [];
//   const currYear = new Date().getFullYear();
//   //   console.log(currYear);

//   for (let i = currYear - 7; i <= currYear; i++) {
//     yearList = [i, ...yearList];
//   }
//   //   console.log(yearList);
//   return yearList;
// }
