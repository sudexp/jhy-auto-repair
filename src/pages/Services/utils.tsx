import { ReactNode } from 'react';

import {
  WheelSvg,
  ChangeVehicleSvg,
  ServiceSvg,
  ConditioningSvg,
  TireBalancingSvg,
  DiagnosisSvg,
  MaintenanceWarrantySvg,
  RustSvg,
  HeaterSvg,
  EmissionSvg,
  BatterySvg,
  OilChangeSvg,
  EngineSvg,
  CoolingSvg,
  SuspensionSvg,
  BrakesSvg,
  FuelSvg,
  ExhaustPipeSvg,
  TransmissionSvg,
} from 'assets/svg/service-icons';
import { typographyColors } from 'theme/colors';

interface Service {
  id: number;
  title: string;
  component: ReactNode;
}

export const services: Service[] = [
  {
    id: 0,
    title: 'Rengasmyynti ja Rengashotelli, kausisäilytys',
    component: <WheelSvg fill={typographyColors.dark} />,
  },
  {
    id: 1,
    title: 'Sijaisautot huollon tai korjauksen ajaksi',
    component: <ChangeVehicleSvg fill={typographyColors.dark} />,
  },
  {
    id: 2,
    title: 'Henkilö- ja pakettiautojen kaikki huollot ja korjaukset',
    component: <ServiceSvg fill={typographyColors.dark} />,
  },
  {
    id: 3,
    title: 'Ilmastointi huolto ja korjaus',
    component: <ConditioningSvg fill={typographyColors.dark} />,
  },
  {
    id: 4,
    title: 'Renkaiden tasapainotus ja 3D-suuntaus',
    component: <TireBalancingSvg fill={typographyColors.dark} />,
  },
  {
    id: 5,
    title: 'Vikadiagnostiikka ja raportointi',
    component: <DiagnosisSvg fill={typographyColors.dark} />,
  },
  {
    id: 6,
    title: 'Määräaikaishuollot – Autosi takuu säilyy',
    component: <MaintenanceWarrantySvg fill={typographyColors.dark} />,
  },
  {
    id: 7,
    title: 'Ruostevauriokorjaukset',
    component: <RustSvg fill={typographyColors.dark} />,
  },
  {
    id: 8,
    title: 'Sisätilalämmittimet',
    component: <HeaterSvg fill={typographyColors.dark} />,
  },
  {
    id: 9,
    title: 'Päästömittaukset ja diagnostiikat',
    component: <EmissionSvg fill={typographyColors.dark} />,
  },
  {
    id: 10,
    title: 'Henkilöauton ja pakettiauton käynnistimet, akut, laturit',
    component: <BatterySvg fill={typographyColors.dark} />,
  },
  {
    id: 11,
    title: 'Öljynvaihdot',
    component: <OilChangeSvg fill={typographyColors.dark} />,
  },
  {
    id: 12,
    title: 'Jakopää huollot- ja korjaukset',
    component: <EngineSvg fill={typographyColors.dark} />,
  },
  {
    id: 13,
    title: 'Jäähdytysjärjestelmän huollot- ja korjaukset',
    component: <CoolingSvg fill={typographyColors.dark} />,
  },
  {
    id: 14,
    title: 'Ohjaus- ja jousitus työt',
    component: <SuspensionSvg fill={typographyColors.dark} />,
  },
  {
    id: 15,
    title: 'Jarrujen huollot- ja korjaukset',
    component: <BrakesSvg fill={typographyColors.dark} />,
  },
  {
    id: 16,
    title: 'Polttoainejarjestelmien huollot sekä korjaukset',
    component: <FuelSvg fill={typographyColors.dark} />,
  },
  {
    id: 17,
    title: 'Pakokaasujärjestelmien korjaustyöt',
    component: <ExhaustPipeSvg fill={typographyColors.dark} />,
  },
  {
    id: 18,
    title: 'Voimansiirron huollot ja korjaukset',
    component: <TransmissionSvg fill={typographyColors.dark} />,
  },
];
