import styles from "./styles.module.scss"

type InfoCapsuleProps = {
  name: string;
  data: number; 
  color: string;
}

function InfoCapsule(props: InfoCapsuleProps){

  return (
    <div className={styles.container}>
      <aside style={{background: props.color}}></aside>
      <h1>{props.name}</h1>
      <p>{props.data}</p>
    </div>
  )
}

export default InfoCapsule