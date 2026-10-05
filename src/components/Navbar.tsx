import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Compass, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onStartToolkit: () => void;
  answeredCount: number;
}

export const Navbar: FC<NavbarProps> = ({
  onStartToolkit,
  answeredCount,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const sectionIds = [
      'problem',
      'toolkit',
      'framework',
      'human-value',
      'cultivation',
    ];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Thêm offset 240px để kích hoạt ngay khi đỉnh của section tiến gần navbar
      const scrollPosition = window.scrollY + 240;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }
      setActiveSection(''); // Đang ở đầu trang (Hero)
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Kích hoạt ngay khi tải trang
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'problem', label: 'Vấn đề', href: '#problem' },
    { id: 'toolkit', label: 'Tình huống', href: '#toolkit', badge: answeredCount > 0 ? `${answeredCount}/5` : undefined },
    { id: 'framework', label: 'Khung tự vấn', href: '#framework' },
    { id: 'human-value', label: 'Giá trị con người', href: '#human-value' },
    { id: 'cultivation', label: 'Tự tu dưỡng', href: '#cultivation' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-100/95 backdrop-blur-md border-b border-academic-border/80 py-2.5 shadow-subtle'
          : 'bg-cream-50/90 backdrop-blur-sm border-b border-academic-border/50 py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 lg:gap-4">
          
          {/* Logo & Course Badge */}
          <a
            href="#"
            className="flex flex-col group text-charcoal hover:text-burgundy transition-colors shrink-0 text-left"
          >
            <span className="font-serif font-bold text-base sm:text-lg tracking-tight block leading-none whitespace-nowrap">
              BỘ CÔNG CỤ ĐẠO ĐỨC AI
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-charcoal-500 block mt-1 whitespace-nowrap">
              <span className="hidden xl:inline">HCM202 • Đạo đức & Tu dưỡng trong thời đại AI</span>
              <span className="xl:hidden inline">HCM202 • Đạo đức AI</span>
            </span>
          </a>

          {/* Desktop Navigation Links (Never wrap text) */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 xl:px-3 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all duration-150 relative flex items-center gap-1.5 shrink-0 ${
                    isActive
                      ? 'bg-burgundy text-white font-bold shadow-sm'
                      : 'text-charcoal-700 hover:text-burgundy hover:bg-burgundy-50 font-medium'
                  }`}
                >
                  <span className="whitespace-nowrap">{link.label}</span>
                  {link.badge && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono transition-colors shrink-0 ${
                        isActive
                          ? 'bg-white text-burgundy font-bold'
                          : 'bg-burgundy text-white'
                      }`}
                    >
                      {link.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            {/* Start Toolkit CTA */}
            <button
              onClick={onStartToolkit}
              className="px-3 xl:px-3.5 py-1.5 rounded-lg bg-burgundy hover:bg-burgundy-700 text-white text-xs font-semibold tracking-wide flex items-center gap-1.5 transition-all shadow-subtle hover:shadow-academic active:scale-95 whitespace-nowrap shrink-0"
            >
              <span>BẮT ĐẦU</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg text-charcoal hover:bg-cream-200 border border-academic-border transition-colors shrink-0"
              aria-label="Mở danh mục điều hướng"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream-50 border-b border-academic-border px-4 pt-3 pb-6 shadow-elevated">
          <div className="flex flex-col gap-1.5 mb-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-burgundy text-white font-bold'
                      : 'text-charcoal hover:text-burgundy hover:bg-burgundy-50 font-medium'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                        isActive ? 'bg-white text-burgundy font-bold' : 'bg-burgundy text-white'
                      }`}
                    >
                      {link.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </div>
          <div className="pt-3 border-t border-academic-border/60 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartToolkit();
              }}
              className="w-full py-2.5 rounded-lg bg-burgundy text-white text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>BẮT ĐẦU TRẢI NGHIỆM TÌNH HUỐNG</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
