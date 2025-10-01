import Image from "next/image";
import { EXTERNAL_LINKS } from '@/config/constants';

interface FooterLink {
  href: string;
  icon: {
    src: string;
    alt: string;
  };
  label: string;
}

const footerLinks: FooterLink[] = [
  {
    href: EXTERNAL_LINKS.LEARN,
    icon: { src: "/file.svg", alt: "File icon" },
    label: "Learn"
  },
  {
    href: EXTERNAL_LINKS.TEMPLATES,
    icon: { src: "/window.svg", alt: "Window icon" },
    label: "Examples"
  },
  {
    href: EXTERNAL_LINKS.NEXTJS,
    icon: { src: "/globe.svg", alt: "Globe icon" },
    label: "Go to nextjs.org →"
  }
];

const ICON_SIZE = 16;

export function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      {footerLinks.map(({ href, icon, label }) => (
        <a
          key={href}
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={icon.src}
            alt={icon.alt}
            width={ICON_SIZE}
            height={ICON_SIZE}
          />
          {label}
        </a>
      ))}
    </footer>
  );
}
