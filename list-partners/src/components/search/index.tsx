import { LuSearch } from "react-icons/lu";
import styles from "./search.module.css"
import React, { FormEvent } from "react";

interface SearchProps {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  search: (e: FormEvent<Element>) => void
}

export function Search({ value, setValue, search}: SearchProps) {

  return (
    <div className={styles.container}>
      <form onSubmit={search} className={styles.content}>
        <input 
          type="text" 
          className={styles.input} 
          placeholder="Buscar..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit" className={styles.button}><LuSearch /></button>
      </form>
    </div>
  )
}