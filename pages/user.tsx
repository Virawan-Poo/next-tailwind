import React, { useState, useEffect, ReactElement } from "react";
import GetData from "@/components/data/GetData";
import TableLayout from "@/components/layout/TableLayout";
import type { IUserData } from "@/components/Type";

export default function User(): ReactElement {
  const [userData, setUserData] = useState<IUserData[]>([]);
  const columns = ["name", "username", "email", "phone"];
  async function getUserData() {
    try {
      const userData = await GetData<IUserData[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUserData(userData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUserData();
  });

  return (
    <div className="container mx-auto">
      <TableLayout columns={columns} data={userData} />
    </div>
  );
}
