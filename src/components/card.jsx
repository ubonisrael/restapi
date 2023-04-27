import Image from "next/image";
import styles from "@/styles/Card.module.scss";
import Link from "next/link";

export default function Card({ country }) {
  return (
    <article className={styles.card}>
      <Link href={`/${country.cca3}`}>
        <article>
          <div className={styles.image}>
            <Image
              alt={
                country.flags.alt
                  ? country.flags.alt
                  : `${country.name.official} flag`
              }
              src={country.flags.png}
              fill
              sizes="(min-width: 550px) 45vw,
              (min-width: 992px) 33vw,
              90vw"
            />
          </div>
          <div className={styles.details}>
            <h3>{country.name.common}</h3>
            <p>
              <span>Population</span>: {country.population}
            </p>
            <p>
              <span>Region</span>: {country.region}
            </p>
            <p>
              <span>Capital</span>: {country.capital}
            </p>
          </div>
        </article>
      </Link>
    </article>
  );
}
