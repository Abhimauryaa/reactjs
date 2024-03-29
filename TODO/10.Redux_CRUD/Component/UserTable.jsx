import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "reactstrap";
import { intialData, deleteUser } from "../redux/feature/FormSlice";
import { Edit } from "lucide-react";
import { Trash } from "lucide-react";

export default function UserTable({ setUpdateData, setIndex }) {
  let [data, setData] = useState([]);
  let userData = useSelector((state) => state?.formReducer.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(intialData());
  }, []);

  useEffect(() => {
    setData(userData);
  }, [userData]);

  const update = (user, index) => {
    setUpdateData(user);
    setIndex(index);
  };

  return (
    <div className="text-center">
      {data?.length > 0 ? (
        <Table className="mt-4 border border-dark">
          <thead>
            <tr>
              <th>Sr.</th>
              <th>Email</th>
              <th>password</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map?.((user, i) => {
              return (
                <>
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{user?.email}</td>
                    <td>{user?.password}</td>
                    <td className="w-25">{user?.address}</td>
                    <td>{user?.city}</td>
                    <td>{user?.state}</td>
                    <td>{user?.gender}</td>
                    <td>
                      <Edit
                        role="button"
                        onClick={() => update(user, i)}
                        color="#463D3D"
                        // className="b-5"
                      />
                      <Trash
                        role="button"
                        color="#F83131"
                        onClick={() => dispatch(deleteUser(i))}
                      />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <h1>Data not Available...!</h1>
      )}
    </div>
  );
}
