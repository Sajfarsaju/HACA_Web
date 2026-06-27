import { partnerLogoAltFromFilename } from "@/lib/image-alt-text";
import type { HiringPartnerLogo } from "@/components/marketing/HiringPartnersGrid";

const logo = (city: string, filename: string): HiringPartnerLogo => ({
    src: `/photos/schools/marketing/hiring-partners/${city}/${encodeURIComponent(filename)}`,
    alt: partnerLogoAltFromFilename(filename),
});

export const KOZHIKODE_LOGOS: HiringPartnerLogo[] = [
    logo("kozhikode", "reform-logo-1-1.png"),
    logo("kozhikode", "viramafia-logo-6-years.png"),
    logo("kozhikode", "retina-coffee.png"),
    logo("kozhikode", "bloombiz-web-logo-370x148.webp"),
    logo("kozhikode", "Xpresso-Digital-Logo.png"),
    logo("kozhikode", "Konzepta-Advertising-Pvt-Ltd-03.webp"),
    logo("kozhikode", "dologoblb.f7cefb18.svg"),
    logo("kozhikode", "logo.svg"),
    logo("kozhikode", "logo (1).svg"),
    logo("kozhikode", "logo-w-2-scaled.webp"),
    logo("kozhikode", "logofooter-BiV6xIG4.svg"),
    logo("kozhikode", "Model_B_LOGO_MS2-3-png.avif"),
    logo("kozhikode", "101X101-01.png"),
    logo("kozhikode", "Backup_of_logo black.png"),
];

export const ERNAKULAM_LOGOS: HiringPartnerLogo[] = [
    logo("ernakulam", "ArtUs-Brand.webp"),
    logo("ernakulam", "FuturaX-Logo-03.png"),
    logo("ernakulam", "fourart-logo-dark.png"),
    logo("ernakulam", "reform-logo-1-1.png"),
    logo("ernakulam", "Koco-logo-scaled-724x1024.png"),
    logo("ernakulam", "GS-scaled-1.png"),
    logo("ernakulam", "accolades_logo1.8d51c9eb.svg"),
    logo("ernakulam", "weblogobfm1.png"),
    logo("ernakulam", "cropped-cropped-assista-white-png.png"),
    logo("ernakulam", "5ZWQ4p34dkx8G4dbK6lMGBMvXO4.avif"),
    logo("ernakulam", "Untitled-design-37-e1741685155709-r2p3a94qnjqf93d6y64fvqlj8segydjx914x0odm30.png"),
    logo("ernakulam", "WhatsApp Image 2026-04-09 at 7_20_17 PM (1).avif"),
];

export const KANNUR_LOGOS: HiringPartnerLogo[] = [
    logo("kannur", "logo.png"),
    logo("kannur", "logo (1).png"),
    logo("kannur", "logo (2).png"),
    logo("kannur", "logoblack.7346c60b.svg"),
];

export const KASARAGOD_LOGOS: HiringPartnerLogo[] = [
    logo("kasargod", "iod-logo-1-1.webp"),
    logo("kasargod", "logo_2-1-removebg-preview.webp"),
    logo("kasargod", "453528481_2216339995409404_8614298646627989178_n.jpg"),
    logo("kasargod", "503105311_17887368789268663_4495020389194295724_n.jpg"),
    logo("kasargod", "625316394_18218085655313009_4071098070292256493_n.jpg"),
    logo("kasargod", "671036726_18045674687772366_6168458962568868253_n.jpg"),
];

export const KOLLAM_LOGOS: HiringPartnerLogo[] = [
    logo("kollam", "logo.svg"),
    logo("kollam", "cropped-logo-logo.png"),
    logo("kollam", "551794445_17896492242297641_6371911598428026428_n.jpg"),
];

export const MALAPPURAM_LOGOS: HiringPartnerLogo[] = [
    logo("malappuram", "inmark-logo.png"),
    logo("malappuram", "logo-ablefolks.png"),
    logo("malappuram", "lurn-ex-school.svg"),
    logo("malappuram", "alims-w-logo.svg"),
    logo("malappuram", "logo-clr.svg"),
    logo("malappuram", "logo.svg"),
    logo("malappuram", "logo.png"),
    logo("malappuram", "logo (1).png"),
    logo("malappuram", "VALAYAM-LOGO-02-768x960.webp"),
    logo("malappuram", "white-logo.webp"),
    logo("malappuram", "Untitled-2-1.png"),
    logo("malappuram", "VXIpx5lHcjK2mO5vsx3AHxNQA0.avif"),
];

export const PALAKKAD_LOGOS: HiringPartnerLogo[] = [
    logo("palakkad", "insbix-logo.svg"),
    logo("palakkad", "main-logo.webp"),
    logo("palakkad", "logo-CNnWJhMX.svg"),
    logo("palakkad", "ex n 5 w-01-01.bd8cc28338d0670504fd.png"),
];

export const THRISSUR_LOGOS: HiringPartnerLogo[] = [
    logo("thrissur", "galtech technology logo.png"),
    logo("thrissur", "logo.svg"),
    logo("thrissur", "LOGOANIMATION2_2048x_copy_4a710ad9-f306-455f-96f1-40dcedc65874.avif"),
];

export const TRIVANDRUM_LOGOS: HiringPartnerLogo[] = [
    logo("trivandrum", "Revita-Logo-Redesigned.webp"),
    logo("trivandrum", "flumenx-logo2.webp"),
    logo("trivandrum", "atv-logo.png"),
    logo("trivandrum", "png-03-scaled-e1756203892437-1024x295.png"),
    logo("trivandrum", "1763721171648.jpeg"),
    logo("trivandrum", "cropped-logo.jpg"),
    logo("trivandrum", "logo.jpg"),
];

export const WAYANAD_LOGOS: HiringPartnerLogo[] = [
    logo("wayanad", "cropped-tflogo.webp"),
    logo("wayanad", "logo-white.png"),
    logo("wayanad", "322-removebg-preview.png"),
];

/** Kerala-wide mix — 2–3 logos per district, 27 total (9 × 3 grid). */
export const KERALA_MIX_LOGOS: HiringPartnerLogo[] = [
    // Kozhikode
    logo("kozhikode", "reform-logo-1-1.png"),
    logo("kozhikode", "viramafia-logo-6-years.png"),
    logo("kozhikode", "retina-coffee.png"),
    // Ernakulam
    logo("ernakulam", "ArtUs-Brand.webp"),
    logo("ernakulam", "FuturaX-Logo-03.png"),
    logo("ernakulam", "fourart-logo-dark.png"),
    // Malappuram
    logo("malappuram", "inmark-logo.png"),
    logo("malappuram", "logo-ablefolks.png"),
    logo("malappuram", "lurn-ex-school.svg"),
    // Trivandrum
    logo("trivandrum", "Revita-Logo-Redesigned.webp"),
    logo("trivandrum", "flumenx-logo2.webp"),
    logo("trivandrum", "atv-logo.png"),
    // Kannur
    logo("kannur", "logo.png"),
    logo("kannur", "logo (1).png"),
    // Kasaragod
    logo("kasargod", "iod-logo-1-1.webp"),
    logo("kasargod", "logo_2-1-removebg-preview.webp"),
    // Palakkad
    logo("palakkad", "insbix-logo.svg"),
    logo("palakkad", "main-logo.webp"),
    // Thrissur
    logo("thrissur", "galtech technology logo.png"),
    logo("thrissur", "logo.svg"),
    // Kollam
    logo("kollam", "logo.svg"),
    logo("kollam", "cropped-logo-logo.png"),
    // Wayanad
    logo("wayanad", "cropped-tflogo.webp"),
    logo("wayanad", "logo-white.png"),
    // Kottayam
    logo("kottayam", "astreda-new-logo.png"),
    logo("kottayam", "renoware_logo.png"),
    // Alappuzha
    logo("allapuzha", "Asset-5.png"),
];
