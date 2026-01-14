import { Link } from 'react-router-dom'
import siteConfig from '../../config/site.config.json'
import { MessageCircle } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="relative bg-gta-graphite border-t border-gta-medium">
      <div className="container-gta py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Szerver információ */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gta-green flex items-center justify-center">
                <span className="font-bebas text-xl text-white">RP</span>
              </div>
              <span className="font-bebas text-2xl text-white">
                {siteConfig.server.name}
              </span>
            </div>
            <p className="text-gta-light leading-relaxed">
              {siteConfig.server.description}
            </p>
          </div>

          {/* Gyors linkek */}
          <div>
            <h3 className="font-bebas text-xl text-gta-gold mb-4">Gyors linkek</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gta-light hover:text-white transition-colors">
                  Funkciók
                </a>
              </li>
              <li>
                <a href="#rules" className="text-gta-light hover:text-white transition-colors">
                  Szabályzat
                </a>
              </li>
              <li>
                <a href="#team" className="text-gta-light hover:text-white transition-colors">
                  Vezetőség
                </a>
              </li>
            </ul>
          </div>

          {/* Kapcsolat */}
          <div>
            <h3 className="font-bebas text-xl text-gta-gold mb-4">Kapcsolat</h3>
            <div className="p-3 bg-gta-dark">
              <p className="text-xs text-gta-light uppercase tracking-wider mb-1">
                Szerver IP
              </p>
              <p className="text-white font-mono">
                {siteConfig.server.ip}
              </p>
            </div>
          </div>
        </div>

        {/* Alsó sáv */}
        <div className="divider-gta" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gta-light text-sm">
          <p>
            © {siteConfig.legal.copyrightYear} {siteConfig.server.name}. Minden jog fenntartva.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Adatkezelési tájékoztató
            </Link>
            <span className="text-gta-medium">|</span>
            <Link to="/terms" className="hover:text-white transition-colors">
              Felhasználási feltételek
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
