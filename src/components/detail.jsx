import Image from "next/image";
import styles from "@/styles/Detail.module.scss";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

export default function Detail({ country, borders }) {
  return (
    <main className={styles.main}>
      <Link href="/">
        <button className={styles.backbtn}>
          <BiArrowBack /> Back
        </button>
      </Link>
      <section className={styles.container}>
        <div className={styles.image}>
          <Image
            src={country.flags.png}
            alt={
              country.flags.alt
                ? country.flags.alt
                : `${country.name.official} flag`
            }
            fill
            sizes="(min-width: 768px) 45vw,
              90vw"
          />
        </div>
        <section className={styles.details}>
          <h1>{country.name.official}</h1>
          <section className={styles.detailscontainer}>
            <div>
              <p>
                <span>Population:</span> {country.population}
              </p>
              <p>
                <span>Region:</span> {country.region}
              </p>
              <p>
                <span>Sub Region:</span> {country.subregion}
              </p>
              <p>
                <span>Capital:</span> {country.capital}
              </p>
            </div>

            <div>
              <p>
                <span>Top Level Domain:</span> {country.tld}
              </p>
              <p>
                <span>Currencies:</span>{" "}
                {Object.values(country.currencies).map(
                  (curr) => `${curr.name}  `
                )}
              </p>
              <p>
                <span>Languages:</span>{" "}
                {Object.values(country.languages).map(
                  (lang) => `${lang}`
                )}
              </p>
            </div>
          </section>

          {borders.length > 0 ? (
            <div className={styles.borderinfo}>
              <h3>border countries: </h3>
              <div>
                {borders.map((border) => (
                  <Link href={`/${border.code}`} key={border.code}>
                    <button className={styles.backbtn}>{border.name}</button>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </section>
      </section>
    </main>
  );
}
