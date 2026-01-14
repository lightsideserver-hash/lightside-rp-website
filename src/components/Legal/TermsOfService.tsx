import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, FileText, AlertTriangle, Shield, Users, DollarSign, Ban, Video } from 'lucide-react'
import siteConfig from '../../config/site.config.json'

export const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sections = [
    { id: 'acceptance', title: '1. Feltételek elfogadása', icon: <FileText /> },
    { id: 'eligibility', title: '2. Jogosultság és hozzáférés', icon: <Users /> },
    { id: 'conduct', title: '3. Magatartási kódex', icon: <Shield /> },
    { id: 'accounts', title: '4. Fiókszabályok', icon: <Users /> },
    { id: 'violations', title: '5. Szabálysértések és büntetések', icon: <Ban /> },
    { id: 'donations', title: '6. Támogatások és előnyök', icon: <DollarSign /> },
    { id: 'content', title: '7. Tartalomkészítés', icon: <Video /> },
    { id: 'liability', title: '8. Felelősség korlátozása', icon: <AlertTriangle /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gta-black to-gta-graphite">
      {/* Fejléc */}
      <div className="bg-gta-graphite/90 backdrop-blur-sm border-b border-gta-medium sticky top-0 z-40">
        <div className="container-gta py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-gta-light hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Vissza a főoldalra
          </Link>
        </div>
      </div>

      <div className="container-gta py-12">
        <div className="max-w-4xl mx-auto">
          {/* Cím */}
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-gta-gold mx-auto mb-4" />
            <h1 className="text-5xl md:text-7xl font-bebas text-white mb-4">
              Felhasználási feltételek
            </h1>
            <p className="text-xl text-gta-light">
              Utolsó frissítés:{' '}
              {new Date(siteConfig.legal.lastUpdated).toLocaleDateString('hu-HU', {
                year: 'numeric',
                month: 'long'
              })}
            </p>
          </div>

          {/* Tartalomjegyzék */}
          <div className="card-gta mb-12">
            <h2 className="text-2xl font-bebas text-gta-gold mb-4">Tartalomjegyzék</h2>
            <div className="grid md:grid-cols-2 gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-3 p-3 hover:bg-gta-dark/50 transition-colors rounded"
                >
                  <span className="text-gta-green">{section.icon}</span>
                  <span className="text-white">{section.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Tartalom */}
          <div className="space-y-8">
            <section id="acceptance" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">1. Feltételek elfogadása</h2>
              <div className="space-y-4 text-gta-light">
                <p>
                  A FiveM szerverünkhöz történő csatlakozással elfogadod a jelen felhasználási
                  feltételeket. Amennyiben nem értesz egyet ezekkel, nem jogosult a szerver
                  használatára.
                </p>
                <p>
                  A feltételek minden játékosra, staff tagra és a közösségi felületek látogatóira
                  vonatkoznak. Fenntartjuk a jogot a feltételek bármikori módosítására előzetes
                  értesítés nélkül.
                </p>
              </div>
            </section>

            <section id="eligibility" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">2. Jogosultság és hozzáférés</h2>
              <div className="space-y-4 text-gta-light">
                <h3 className="text-xl font-bebas text-gta-gold">Korhatár</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>A szerveren való játékhoz minimum {siteConfig.legal.minAge} éves életkor szükséges</li>
                  <li>18 év alatti játékosok esetén szülői/törvényes képviselői hozzájárulás szükséges</li>
                  <li>Whitelist jelentkezésnél életkor-ellenőrzés kérhető</li>
                </ul>

                <h3 className="text-xl font-bebas text-gta-gold mt-6">Whitelist rendszer</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Minden játékosnak át kell mennie a whitelist jelentkezésen</li>
                  <li>A jelentkezések elbírálása általában 48–72 órán belül történik</li>
                  <li>Valótlan adatok megadása végleges kitiltást vonhat maga után</li>
                  <li>A whitelist státusz nem átruházható</li>
                </ul>
              </div>
            </section>

            <section id="conduct" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">3. Magatartási kódex</h2>
              <div className="space-y-4 text-gta-light">
                <h3 className="text-xl font-bebas text-gta-gold">Tiltott viselkedések</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Zaklatás, diszkrimináció, gyűlöletbeszéd</li>
                  <li>Exploitek, csalás, engedély nélküli módosítások használata</li>
                  <li>Játékon belüli tárgyak/valuta valós pénzért történő adásvétele</li>
                  <li>Staff tag megszemélyesítése</li>
                  <li>Más játékosok személyes adatainak megosztása</li>
                  <li>Stream sniping vagy metagaming</li>
                </ul>

                <h3 className="text-xl font-bebas text-gta-gold mt-6">Roleplay elvárások</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>A karakterben maradás (IC) folyamatosan elvárt</li>
                  <li>Nyilvános helyszíneken a karakter megtörése tilos</li>
                  <li>A folyamatban lévő RP szituációk tiszteletben tartása kötelező</li>
                  <li>Halál után az Új Élet Szabály (NLR) betartása kötelező</li>
                  <li>A Fear RP irányelvek betartása kötelező</li>
                </ul>
              </div>
            </section>

            <section id="accounts" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">4. Fiókszabályok</h2>
              <div className="space-y-4 text-gta-light">
                <p>
                  Minden játékosnak kizárólag egy fiók használata engedélyezett. A fiókmegosztás
                  szigorúan tilos, és minden érintett fiók végleges felfüggesztését eredményezheti.
                </p>
                <h3 className="text-xl font-bebas text-gta-gold">Fiókbiztonság</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>A fiókod biztonságáért te felelsz</li>
                  <li>Használj erős, egyedi jelszót</li>
                  <li>Ajánlott a kétlépcsős azonosítás (2FA) bekapcsolása Discordon</li>
                  <li>Feltört fiók gyanúja esetén azonnal jelezd a staffnak</li>
                </ul>
              </div>
            </section>

            <section id="violations" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">5. Szabálysértések és büntetések</h2>
              <div className="space-y-4 text-gta-light">
                <h3 className="text-xl font-bebas text-gta-gold">Figyelmeztetési rendszer</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>1. alkalom: Szóbeli figyelmeztetés</li>
                  <li>2. alkalom: 24 órás kitiltás</li>
                  <li>3. alkalom: 7 napos kitiltás</li>
                  <li>4. alkalom: 30 napos kitiltás</li>
                  <li>5. alkalom: Végleges kitiltás</li>
                </ul>

                <div className="bg-gta-dark/50 p-4 rounded border-l-4 border-gta-gold mt-6">
                  <p className="text-sm">
                    <strong>Megjegyzés:</strong> Súlyos szabálysértés esetén előzetes figyelmeztetés nélkül
                    is kiszabható azonnali végleges kitiltás.
                  </p>
                </div>
              </div>
            </section>

            <section id="donations" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">6. Támogatások és előnyök</h2>
              <div className="space-y-4 text-gta-light">
                <p>
                  A támogatások a szerver fenntartási költségeit és fejlesztését segítik. Minden támogatás
                  önkéntes, és nem visszatéríthető.
                </p>
                <h3 className="text-xl font-bebas text-gta-gold">Támogatói előnyök</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Prioritásos csatlakozás</li>
                  <li>Exkluzív járművek és ruházat</li>
                  <li>Egyedi rendszám</li>
                  <li>További karakter slotok</li>
                  <li>Külön Discord rang és csatornák</li>
                </ul>
                <p className="mt-4">
                  A támogatói előnyök nem jelentenek szabályok alóli felmentést és nem járnak különleges
                  bánásmóddal roleplay során.
                </p>
              </div>
            </section>

            <section id="content" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">7. Tartalomkészítés</h2>
              <div className="space-y-4 text-gta-light">
                <p>
                  Támogatjuk a tartalomkészítést és a streamelést. A szerveren való játék során hozzájárulsz,
                  hogy a szerverrel kapcsolatos tartalmaidat promóciós célokra felhasználhatjuk.
                </p>
                <h3 className="text-xl font-bebas text-gta-gold">Tartalomkészítési irányelvek</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>A szerver nevének feltüntetése a stream címében ajánlott</li>
                  <li>Szerver-specifikus tartalom engedély nélküli monetizálása nem megengedett</li>
                  <li>Más játékosok adatvédelmi beállításait tiszteletben kell tartani</li>
                  <li>Érzékeny UI elemek elrejtése streamelés közben ajánlott</li>
                </ul>
              </div>
            </section>

            <section id="liability" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">8. Felelősség korlátozása</h2>
              <div className="space-y-4 text-gta-light">
                <p>
                  A szerver „ahogy van” alapon működik, bármiféle garancia nélkül. Nem vállalunk felelősséget
                  játékbeli előrehaladás, virtuális tárgyak vagy adatok elvesztéséért.
                </p>
                <p>Fenntartjuk a jogot arra, hogy:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>A szervert bármikor módosítsuk vagy megszüntessük</li>
                  <li>Technikai vagy gameplay okokból játékos adatokat visszaállítsunk/töröljünk</li>
                  <li>A játékmenetet és a gazdasági egyensúlyt módosítsuk</li>
                  <li>Hosszú ideje inaktív whitelist játékosokat töröljünk</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Kapcsolat */}
          <div className="card-gta mt-12 text-center">
            <h2 className="text-2xl font-bebas text-white mb-4">Kérdésed van?</h2>
            <p className="text-gta-light mb-6">
              Ha kérdésed van a felhasználási feltételekkel kapcsolatban, vedd fel a kapcsolatot az admin csapattal.
            </p>
            <a
              href={siteConfig.social.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gta-gold inline-block"
            >
              Support elérése
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
