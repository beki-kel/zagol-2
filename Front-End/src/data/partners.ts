import { Partner } from "@/components/sectionOurPartners";
import Abyssinia from "@/images/BankofAbyssinia-logo.png";
import Awash from "@/images/awashbank.png";
import cbebirr from "@/images/cbe-wallet.png";
import cbe from "@/images/cbe-2.png";
import EgyptianAir from "@/images/Egyptair-Logo-2010.svg.png";
import emirates from "@/images/emiarates no back.png";
import Et from "@/images/Ethiopian_Airlines_Logo.svg.png";
import FlyDubai from "@/images/Flydubai-Logo.png";
import hahnAir from "@/images/Hahn_Air_Logo.avif";
import KenyaAirways from "@/images/Kenya-Airways-Logo.png";
import AirAlgeries from "@/images/Logo_Air_Algérie.svg.png";
import SaudiAir from "@/images/saudia air.png";
import nibBank from "@/images/nib bank.png";
import QatarAirways from "@/images/Qatar-Airways-Emblem.png";
import telebirr from "@/images/Telebirr.png";
import TurkishAirlines from "@/images/Turkish_Airlines.png";
import Zemen from "@/images/zemen bank.png";

const PARTNERS: Partner[] = [
  { id: 1, name: "Awash", logo: Awash },
  { id: 2, name: "CBE Birr", logo: cbebirr, height: 120, width: 120 },
  { id: 3, name: "CBE", logo: cbe, height: 120, width: 120 },
  { id: 4, name: "Egyptian Air", logo: EgyptianAir },
  { id: 5, name: "Emirates", logo: emirates },
  { id: 6, name: "Fly Dubai", logo: FlyDubai },
  { id: 7, name: "Hahn Air", logo: hahnAir },
  { id: 8, name: "Kenya Airways", logo: KenyaAirways },
  { id: 9, name: "Air Algeries", logo: AirAlgeries },
  { id: 10, name: "Saudi Air", logo: SaudiAir },
  { id: 11, name: "Nib Bank", logo: nibBank },
  { id: 12, name: "Qatar Airways", logo: QatarAirways },
  { id: 13, name: "Telebirr", logo: telebirr, height: 150, width: 150 },
  { id: 14, name: "Turkish Airlines", logo: TurkishAirlines },
  { id: 15, name: "Zemen Bank", logo: Zemen },
  { id: 16, name: "Ethiopian Airlines", logo: Et },
  { id: 17, name: "Bank of Abyssinia", logo: Abyssinia },
];
export default PARTNERS;
