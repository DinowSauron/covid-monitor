import { ReactNode } from "react";
import styles from "./style.module.scss";


type containerProps = {
  children: ReactNode;
}

function ContainerBox(props: containerProps) {

  return (
    <div>
      <div className={styles.blur}>

      </div>
      <div className={styles.container}>
        {props.children}
      </div>
    </div>
  )
}


export default ContainerBox;