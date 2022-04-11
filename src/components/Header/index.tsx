import { ChangeEvent } from "react";
import styles from "./styles.module.scss";
import countries from "../../services/countriesAvalible"

type HeaderProps = {
  setCountry: (agr0: string) => void;
}

function Header(props: HeaderProps) {

  const date = new Date();

  function handleChangeCountry(e: ChangeEvent<HTMLSelectElement>) {
    props.setCountry(e.target.value);
    console.log(e.target.value)
  }

  return (
    <header className={styles.main}>
      <div>
        <h1>Painel Coronavírus</h1>
        <p>Atualizado em: {
        date.toLocaleDateString('pt-br', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric'
        })}
        </p>
      </div>

      <select onChange={e => handleChangeCountry(e)}>
        {countries.map(country => {
          return <option key={country[0]} value={country[0]}>{country[1]}</option>
        })}
      </select>

    </header>
  )
}

export default Header;