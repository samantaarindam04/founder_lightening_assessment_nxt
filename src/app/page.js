"use client"
import styles from "./page.module.css";
import Usercard from "@/components/Usercard";
import { fetchUsers, selectAllUsers } from "../../redux/slices/userSlice";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import Loading from "@/components/Loading";


export default function Home() {
  const dispatch = useAppDispatch()
  const usersLists = useAppSelector(selectAllUsers)
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <main className={styles.main}>
      <div className={styles.user_lists}>
        {
          usersLists.status ? '' : <div className="pos_abs"><Loading /></div>
        }
        {
          usersLists.users?.map((key, index) => <Usercard name={key.name} email={key.email} phone={key.phone} username={key.username} key={index} />)
        }

      </div>
    </main>
  );
}
