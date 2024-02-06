import { Edit, Trash } from "lucide-react";
import React, { useState, useEffect } from "react";
import { findData } from "../REDUX/FEATURE/Form";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "reactstrap";

export default function UserC(setUpdateD, setIndex) {
  let [data, setData] = useState([]);
  let userData = useSelector((state) => state?.formReducer.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findData());
  }, []);

  useEffect(() => {
    setData(userData);
  }, [userData]);

  const update = (user, index) => {
    setUpdateD(user);
    setIndex(index);
  };

  return (
    <div className="text-center">
      {data?.length > 0 ? (
        <Table className="mt-4 border border-dark">
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map?.((user, i) => {
              return (
                <>
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{user?.name}</td>
                    <td>{user?.age}</td>
                    <td>{user?.city}</td>

                    <td>
                      <Edit
                        role="button"
                        onClick={() => update(user, i)}
                        color="#463D3D"
                      />
                      <Trash role="button" color="#F83131" />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <h1>Data is not Available.....!</h1>
      )}
    </div>
  );
}
