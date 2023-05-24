import axios from "axios";
import { useEffect, useState } from "react";

export default function Student() {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [batchnum, setBatchnum] = useState();
  const [students, setStudents] = useState();

  // UPDATE
  const updateBtn = (e) => {
    // alert(e.currentTarget.title);
    let getData = new FormData();
    getData.append("function", "update");
    getData.append("id", e.currentTarget.title);
    getData.append(
      "upfname",
      document.getElementById("fname" + e.currentTarget.title).value
    );
    getData.append(
      "uplname",
      document.getElementById("lname" + e.currentTarget.title).value
    );
    getData.append(
      "upbatchnum",
      document.getElementById("batchnum" + e.currentTarget.title).value
    );

    axios({
      method: "POST",
      url: "http://localhost/axios/db.php",
      data: getData,
    }).then((response) => {
      // TO RELOAD THE PAGE
      alert("Update Success");
      const url = "http://localhost/axios/db.php";
      axios.get(url).then((res) => setStudents(res.data));
    });
  };

  // DELETE
  const deleteBtn = (e) => {
    // alert(e.currentTarget.id);
    let getData = new FormData();
    getData.append("function", "delete");
    getData.append("id", e.currentTarget.id);

    axios({
      method: "POST",
      url: "http://localhost/axios/db.php",
      data: getData,
    }).then((response) => {
      // TO RELOAD THE PAGE
      const url = "http://localhost/axios/db.php";
      axios.get(url).then((res) => setStudents(res.data));
    });
  };

  // ADD DATA
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // GET THE DATA FROM INPUT
    let getData = new FormData();
    getData.append("fname", fname);
    getData.append("lname", lname);
    getData.append("batchnum", batchnum);
    getData.append("function", "insert");
    // console.log(getData);

    // TO SUBMIT THE DATA TO DATABASE/MySQL
    axios({
      method: "POST",
      url: "http://localhost/axios/db.php",
      data: getData,
      config: { Header: { "Content-Type": "multipart/formdata" } },
    }).then((response) => {
      // TO RELOAD THE PAGE
      const url = "http://localhost/axios/db.php";
      axios.get(url).then((res) => setStudents(res.data));

      // CLEAR THE INPUT AFTER THE SUBMIT
      setFname("");
      setLname("");
      setBatchnum("");
    });
  };

  useEffect(() => {
    const url = "http://localhost/axios/db.php";
    axios.get(url).then((res) => setStudents(res.data));
    // console.log(students);
  });

  return (
    <div className="container-xxl">
      <div className="mt-5" style={{ width: "20rem" }}>
        <form>
          Firstname:
          <input
            className="form-control"
            type="text"
            name="fname"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />{" "}
          <br /> <br />
          Lastname:
          <input
            className="form-control"
            type="text"
            name="lname"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
          <br /> <br />
          Batch ID:
          <input
            className="form-control"
            type="text"
            name="batchnum"
            value={batchnum}
            onChange={(e) => setBatchnum(e.target.value)}
          />{" "}
          <br />
          <input
            type="submit"
            className="btn btn-info px-4"
            value="Submit"
            onClick={handleFormSubmit}
          />
        </form>
      </div>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Batch ID</th>
            <th>Actions</th>
            <th>Updates</th>
          </tr>
        </thead>

        <tbody>
          {students &&
            students.map((val) => (
              <tr key={val.student_id}>
                <td>
                  <input
                    type="text"
                    defaultValue={val.fname}
                    id={"fname" + val.student_id}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    defaultValue={val.lname}
                    id={"lname" + val.student_id}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    defaultValue={val.batch_id}
                    id={"batchnum" + val.student_id}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={deleteBtn}
                    id={val.student_id}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={updateBtn}
                    title={val.student_id}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
