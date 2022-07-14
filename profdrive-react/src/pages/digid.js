import React from 'react'
import { Helmet } from 'react-helmet'
const Digid = () => {
  return (
    <>
      <Helmet>
        <title>Rijschool Profdrive - Machtigen via DigiD</title>
        <meta
          name='description'
          content='Rijschool Profdrive - Machtigen via DigiD'
        />
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Helmet>

      <div className='mt-28'>
        <h1 className='text-center text-3xl font-semibold'>Digid</h1>
        <p className='text-center text-md mt-4 mx-12'>
          Voordat wij het rijexamen voor jou gaan aanvragen moet jij daar eerst
          toestemming voor geven. Deze toestemming geef je door ons een
          machtiging geven via mijn.cbr.nl. Hiervoor heeft u een{' '}
          <a
            className='text-blue-500'
            target='_blank'
            rel='noreferrer'
            href='https://www.digid.nl/'
          >
            DigiID
          </a>{' '}
          nodig
        </p>
        <p className='text-center text-md mt-4 mx-12'>
          Het machtigen doe je op{' '}
          <a
            className='text-blue-500'
            target='_blank'
            rel='noreferrer'
            href='https://www.cbr.nl/nl/mijncbr/u-staat-in-de-wachtrij.htm?orgurl=https%3A%2F%2Fwww.cbr.nl%2Fweb%2Fnl%2Fmijncbr%2Finloggen-op-mijn-cbr.htm%3Forgurl%3Dhttps%253A%252F%252Fwww.cbr.nl%252Fweb%252Fnl%252Fmijncbr.htm'
          >
            mijn.cbr.nl
          </a>{' '}
          met je DigiD. DigiD is jouw persoonlijke digitale legitimatie voor
          overheidsdiensten. Geef deze nooit aan een ander. De machtiging is
          geldig tot je bent geslaagd. Dus, wat moet je nu doen:
        </p>
        <ul>
          <li className='text-center text-md mt-4 mx-12'>
            a. Vraag het Rijschoolnummer van je rijschool ?. van Rijschool
            ProfDrive is dat 3416k9.
          </li>
          <li className='text-center text-md mt-4 mx-12'>
            b. Nog geen DigiD? vraag dan gratis DigiD aan op{' '}
            <a
              className='text-blue-500'
              target='_blank'
              rel='noreferrer'
              href='https://www.digid.nl/'
            >
              DigiD.nl
            </a>{' '}
            Je hebt dan je persoonlijke DigiD binnen 5 dagen in huis.Ga naar
            mijn.cbr.nl en klik op het DigiD logo. Vul dan je gebruikersnaam en
            wachtwoord in. Voer dan het rijschoolnummer en je adresgegevens in.
            Ga dan akkoord met de voorwaarden. Als laatste machtig je
            rijschool.Na de machtiging krijg jij per email een bevestiging.
          </li>
          <li className='text-center text-md mt-4 mx-12'>
            c. Mochten er vragen zijn ontstaan, neem dan met ons contact op, of
            ga naar www.cbr.nl.
          </li>
        </ul>
        <h2 className='mt-6 text-xl font-medium text-center'>
          Geldigheidsduur
        </h2>
        <p className='text-center text-md mt-4 mx-12'>
          De machtiging geldt tot je bent geslaagd. Wil de machtiging eerdere
          intrekken? Kijk dan op{' '}
          <a
            className='text-blue-500'
            target='_blank'
            rel='noreferrer'
            href='https://www.cbr.nl/nl/mijncbr/inloggen-op-mijn-cbr.htm'
          >
            mijn.cbr.nl
          </a>{' '}
          voor de voorwaarden. lees de flyer Cbr staat precies wat je moet doen
          om je Rijschool te machtigen . je kan ook eventueel aan je Rijschool
          vragen . Rijschool nummer : 3416k9 nodig bij het invullen op de CBR
          site.
        </p>
      </div>
    </>
  )
}

export default Digid