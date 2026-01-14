import { useEffect, useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, smoothScrollTo } from '../../lib/gsap-config'
import { Home, Shield, Users, ScrollText } from 'lucide-react'
import siteConfig from '../../config/site.config.json'
import { BottomNavigation } from './BottomNavigation'

const navItems = [
  { id: 'home', label: 'Főoldal', href: '#home', icon: <Home className="w-5 h-5" /> },
  { id: 'features', label: 'Funkciók', href: '#features', icon: <Shield className="w-5 h-5" /> },
  { id: 'rules', label: 'Szabályzat', href: '#rules', icon: <ScrollText className="w-5 h-5" /> },
  { id: 'team', label: 'Vezetőség', href: '#team', icon: <Users className="w-5 h-5" /> }
]

export const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false)

  // Mobil eszköz felismerése
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Mobil navigáció mobil eszközön
  if (isMobile) {
    return <BottomNavigation />
  }

  // Asztali navigáció
  return <DesktopNavigation />
}

const DesktopNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navRef = useRef<HTMLElement>(null)

  // Scroll események kezelése
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Kezdeti állapot mountnál
  useEffect(() => {
    // Biztosítsuk, hogy betöltéskor a Főoldal legyen aktív, ha a tetején vagyunk
    if (window.scrollY < 100) {
      setActiveSection('home')
    }
  }, [])

  // ScrollTrigger alapú aktív szekciók
  useGSAP(() => {
    // Főoldal speciális kezelés
    ScrollTrigger.create({
      id: 'nav-home',
      trigger: '#home',
      start: 'top top',
      end: 'bottom top+=80',
      onEnter: () => setActiveSection('home'),
      onEnterBack: () => setActiveSection('home'),
      onLeaveBack: () => setActiveSection('home')
    })

    // A többi szekció
    navItems.forEach((item) => {
      if (item.id !== 'home') {
        ScrollTrigger.create({
          id: `nav-${item.id}`,
          trigger: `#${item.id}`,
          start: 'top top+=80', // Fix navbar magasság kompenzálása
          end: 'bottom top+=80',
          onEnter: () => setActiveSection(item.id),
          onEnterBack: () => setActiveSection(item.id)
        })
      }
    })

    ScrollTrigger.refresh()
    ScrollTrigger.sort()

    return () => {
      navItems.forEach((item) => {
        const trigger = ScrollTrigger.getById(`nav-${item.id}`)
        if (trigger) trigger.kill()
      })
    }
  })

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      smoothScrollTo(target, -80) // -80px offset a fix navigáció miatt
    }
  }

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-gta shadow-gta' : 'bg-gta-black/80 backdrop-blur-sm border-b border-white/10'
        }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logó */}
          <div className="flex items-center gap-2 md:gap-3 opacity-100 animate-fade-in">
            {siteConfig.server.logo.type === 'text' ? (
              <div className="w-9 h-9 md:w-10 md:h-10 bg-gta-green flex items-center justify-center">
                <span className="font-bebas text-lg md:text-xl text-white">
                  {siteConfig.server.logo.content}
                </span>
              </div>
            ) : (
              <div className="w-9 h-9 md:w-10 md:h-10 overflow-hidden rounded bg-gta-dark/40 flex items-center justify-center">
                <img
                  src={siteConfig.server.logo.content}
                  alt="Szerver logó"
                  className="w-full h-full object-contain"
                  draggable={false}
                />
              </div>
            )}
            <span className="font-bebas text-xl md:text-2xl text-white">
              <span className="hidden sm:inline">{siteConfig.server.name}</span>
              <span className="sm:hidden">
                {siteConfig.server.name.split(' ').map(word => word[0]).join('')}
              </span>
            </span>
          </div>

          {/* Asztali menü */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-2 text-sm font-inter font-medium transition-all duration-300 opacity-100 animate-fade-in ${activeSection === item.id
                  ? 'text-gta-gold'
                  : 'text-white/80 hover:text-white'
                  }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gta-gold" />
                )}
              </a>
            ))}
          </div>

          {/* CTA gombok - asztali */}
          <div className="flex items-center gap-4 opacity-100 animate-fade-in">
            <a
              href={siteConfig.social.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 text-sm font-inter font-medium uppercase tracking-wider border border-gta-gold text-gta-gold hover:bg-gta-gold hover:text-gta-black transition-all duration-300"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
