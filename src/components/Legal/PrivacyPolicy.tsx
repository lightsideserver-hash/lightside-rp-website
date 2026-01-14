import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Shield,
  Database,
  Lock,
  Eye,
  Users,
  Globe,
  Cookie,
  AlertCircle
} from 'lucide-react'
import siteConfig from '../../config/site.config.json'

export const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sections = [
    { id: 'introduction', title: '1. Bevezetés', icon: <Shield /> },
    { id: 'collection', title: '2. Gyűjtött adatok', icon: <Database /> },
    { id: 'usage', title: '3. Adatok felhasználása', icon: <Eye /> },
    { id: 'sharing', title: '4. Adatok megosztása', icon: <Users /> },
    { id: 'security', title: '5. Adatbiztonság', icon: <Lock /> },
    { id: 'retention', title: '6. Adatmegőrzés', icon: <Database /> },
    { id: 'rights', title: '7. Felhasználói jogok', icon: <Users /> },
    { id: 'cookies', title: '8. Sütik és analitika', icon: <Cookie /> },
    { id: 'third-party', title: '9. Harmadik fél szolgáltatásai', icon: <Globe /> },
    { id: 'contact', title: '10. Kapcsolat', icon: <AlertCircle /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gta-black to-gta-graphite">
      {/* Fejléc */}
      <div className="bg-gta-graphite/90 backdrop-blur-sm border-b border-gta-medium sticky top-0 z-40">
        <div className="container-gta py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gta-light hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Vissza a főoldalra
          </Link>
        </div>
      </div>

      <div className="container-gta py-12">
        <div className="max-w-4xl mx-auto">
          {/* Cím */}
          <div className="text-center mb-12">
            <Lock className="w-16 h-16 text-gta-gold mx-auto mb-4" />
            <h1 className="text-5xl md:text-7xl font-bebas text-white mb-4">
              Adatkezelési tájékoztató
            </h1>
            <p className="text-xl text-gta-light">
              Utolsó frissítés:{' '}
              {new Date(siteConfig.legal.lastUpdated).toLocaleDateString('hu-HU', {
                year: 'numeric',
                month: 'long'
              })}
            </p>
          </div>

          {/* GDPR értesítés */}
          <div className="card-gta bg-gta-green/10 border border-gta-green/30 mb-12">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-gta-green flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bebas text-gta-green mb-2">
                  GDPR kompatibilis
                </h3>
                <p className="text-gta-light text-sm">
                  Ez az adatkezelési tájékoztató megfelel az Általános Adatvédelmi
                  Rendeletnek (GDPR) és az egyéb vonatkozó adatvédelmi jogszabályoknak.
                  Elkötelezettek vagyunk a személyes adatok védelme és az átlátható
                  adatkezelés mellett.
                </p>
              </div>
            </div>
          </div>

          {/* Tartalomjegyzék */}
          <div className="card-gta mb-12">
            <h2 className="text-2xl font-bebas text-gta-gold mb-4">
              Tartalomjegyzék
            </h2>
            <div className="grid md:grid-cols-2 gap-2">
              {sections.map(section => (
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

          {/* Bevezetés */}
          <section id="introduction" className="card-gta">
            <h2 className="text-3xl font-bebas text-white mb-4">1. Bevezetés</h2>
            <div className="space-y-4 text-gta-light">
              <p>
                Üdvözlünk a FiveM RolePlay szerverünkön. Ez az adatkezelési
                tájékoztató bemutatja, hogyan gyűjtjük, használjuk, tároljuk és
                védjük a személyes adataidat a szerver és közösségi felületeink
                használata során.
              </p>
              <p>
                A szerver használatával elfogadod az itt leírt adatkezelési
                gyakorlatokat. Amennyiben nem értesz egyet velük, kérjük ne használd
                szolgáltatásainkat.
              </p>
            </div>
          </section>

          {/* Gyűjtött adatok */}
          <section id="collection" className="card-gta">
            <h2 className="text-3xl font-bebas text-white mb-4">
              2. Gyűjtött adatok
            </h2>
            <div className="space-y-4 text-gta-light">
              <h3 className="text-xl font-bebas text-gta-gold">
                Automatikusan gyűjtött adatok
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>FiveM licenc (egyedi játékosazonosító)</li>
                <li>Steam ID / Discord ID</li>
                <li>IP cím (biztonsági és csalásmegelőzési célból)</li>
                <li>Hardverazonosítók (kitiltások érvényesítéséhez)</li>
                <li>Csatlakozási időpontok és játékidő</li>
                <li>Játékon belüli tevékenységek és chat naplók</li>
              </ul>

              <h3 className="text-xl font-bebas text-gta-gold mt-6">
                Általad megadott adatok
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Whitelist jelentkezési adatok</li>
                <li>Discord felhasználónév és profiladatok</li>
                <li>E-mail cím (ha megadásra kerül)</li>
                <li>Karakternevek és háttértörténetek</li>
                <li>Support ticket tartalmak</li>
              </ul>
            </div>
          </section>

          {/* Felhasználói jogok */}
          <section id="rights" className="card-gta">
            <h2 className="text-3xl font-bebas text-white mb-4">
              7. Felhasználói jogok
            </h2>
            <div className="space-y-4 text-gta-light">
              <p>
                A GDPR és a vonatkozó jogszabályok alapján jogosult vagy:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Személyes adataid megtekintésére</li>
                <li>Adatok helyesbítésére</li>
                <li>Adatok törlésének kérésére</li>
                <li>Adathordozhatóságra</li>
                <li>Adatkezelés korlátozására</li>
              </ul>
              <p className="mt-4">
                Jogérvényesítéshez vedd fel velünk a kapcsolatot Discordon vagy
                e-mailben. 30 napon belül válaszolunk.
              </p>
            </div>
          </section>

          {/* Kapcsolat */}
          <section id="contact" className="card-gta">
            <h2 className="text-3xl font-bebas text-white mb-4">10. Kapcsolat</h2>
            <div className="space-y-4 text-gta-light">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Discord support ticket</li>
                <li>E-mail: {siteConfig.legal.privacyEmail}</li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <div className="card-gta mt-12 text-center bg-gradient-to-br from-gta-dark to-gta-graphite">
            <h2 className="text-2xl font-bebas text-white mb-4">
              Kérdésed van?
            </h2>
            <p className="text-gta-light mb-6">
              Elkötelezettek vagyunk az átláthatóság mellett. Fordulj hozzánk
              bizalommal adatvédelmi kérdésekben.
            </p>
            <a
              href={siteConfig.social.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gta-gold inline-block"
            >
              Kapcsolatfelvétel
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
