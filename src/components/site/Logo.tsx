import brobexLogo from "../../assets/brobex-logo.png";

export function Logo() {
  return (
    <a 
      href="https://brobexportfolio.vercel.app/" 
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 z-50"
    >
      <img
        src={brobexLogo}
        alt="BROBEX"
        className="h-14 md:h-16 w-auto object-contain"
      />
    </a>
  );
}