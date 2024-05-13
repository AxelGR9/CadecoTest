import Image from "next/image";
import styles from "./page.module.css";
import Counter from "../components/counter";
import UserCard from "../components/userCard";
import Login from "../components/login";
import Timer from "../components/timer";
import InputForm from "@/components/inputForm";

export default function Home() {
  return (
    <main className={styles.main}>
      

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div>
      <Counter />
      </div>

      <div>
      <UserCard name="Axel García" age={27} />
      </div>

      <div>
        <Login />
      </div>

      <div>
        <Timer />
      </div>

      <div>
        <InputForm />
      </div>
    </main>
  );
}
