import React from "react";
import Paralax from "../../../home/Paralax";
import logo from "../assets/surme/plus1.png";
import background from "./assets/comfort-plus-bg.jpg";
import background2 from "./assets/comfort-plus-bg2.jpg";
import teknik from "./assets/comfort-plus-teknik.png";
import TanıtımComponent from "./components/TanıtımComponent";
import TeknikComponent from "./components/TeknikComponent";
import ColorPickerPage from "../ColorPickerComponent";
import { colors, colors1, description } from "../colorArrays";
import Form from "../Form";
export default function ComfortSlidePlus() {
  return (
    <div>
      <Paralax logo={logo} background={background} title={title} />
      <TanıtımComponent background={background2} description={aciklama} />
      <TeknikComponent
        technicalData={technicalData}
        teknik={teknik}
        logo={logo}
      />
      <ColorPickerPage colors={colors1} />
      <ColorPickerPage colors={colors} description={description} />
      <Form />
    </div>
  );
}

const title = ["Kolay Kullanımı İle", "Kontrol Sizin Elinizde"];
const aciklama = [
  {
    title: "Yalıtım",
    desc: "Comfort Slide Plus PVC sürme kapı ve pencere sisteminde, özel tasarıma sahip 149 mm genişliğinde, 5 odacıklı kasa ve 76 mm genişliğinde kanat profilleri ısı ve ses yalıtımı performasını benzer PVC sürme kapı ve pencere sistemlerine göre daha üst seviyeye çıkarır. Özel tasarlanan donanımı ve 52 mm kadar üçlü cam uygulanabilmesi ısı iletim katsayısı değerini minimuma indirir.",
  },
  {
    title: "Tasarım",
    desc: "Comfort Slide Plus PVC sürme kapı ve pencere sistemi, bilinen tüm sürme uygulamalarından farklı bir bakış açısı ile , kullanıldığı mekana daha fazla yaşam alanı kazandırmanın yanı sıra kolay kullanım ve sızdırmazlığın çok daha güçlü olması hedeflenerek uluslararası deneyimlerden kazanılan tecrübe ve profesyonellikle tasarlandı. Comfort Slide Plus sürme kapı ve pencere sistemi estetik yapısıyla maksimum görüş alanı sağlarken mimari projelerde farklı tarzların yansıtılmasına imkân verir.",
  },
  {
    title: "Donanım",
    desc: "Comfort Slıde Plus Sürme Sistemine özel olarak tasarlanan donanımı sayesinde açma ve kapama fonksiyonlarında oldukça kolay ve konforlu bir kullanım deneyimi sunar. Winsa donanımları, Comfort Slıde Plus Sürme Sisteminin renklerine de tam uyum sağlayarak estetik bir görünüm kazandırır.",
  },
];
const technicalData = [
  { label: "Kasa Profil Genişliği", value: "149 mm" },
  { label: "Kanat Profil Genişliği", value: "76 mm" },
  { label: "Kasa Odacık Sayısı", value: "5" },
  { label: "Kanat Odacık Sayısı", value: "5" },
  { label: "Sınıf", value: "B Class - TS EN 12608-1 + A1" },
  { label: "Conta", value: "TPE Gri / Siyah" },
  { label: "Conta Sayısı", value: "2" },
  { label: "Çıta", value: "Tek tırnaklı - PCE contalı" },
  { label: "Cam Kalınlıkları", value: "24, 30, 36, 44, 52 mm" },
];