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
} from 'assets/svg/service-icons';

interface Service {
  id: number;
  title: string;
  component: ReactNode;
}

export const services: Service[] = [
  {
    id: 0,
    title: 'Rengasmyynti ja Rengashotelli, kausisäilytys',
    component: <WheelSvg />,
  },
  {
    id: 1,
    title: 'Sijaisautot huollon tai korjauksen ajaksi',
    component: <ChangeVehicleSvg />,
  },
  {
    id: 2,
    title: 'Henkilö- ja pakettiautojen kaikki huollot ja korjaukset',
    component: <ServiceSvg />,
  },
  {
    id: 3,
    title: 'Ilmastointi huolto ja korjaus',
    component: <ConditioningSvg />,
  },
  {
    id: 4,
    title: 'Renkaiden tasapainotus ja 3D-suuntaus',
    component: <TireBalancingSvg />,
  },
  {
    id: 5,
    title: 'Vikadiagnostiikka ja raportointi',
    component: <DiagnosisSvg />,
  },
  {
    id: 6,
    title: 'Määräaikaishuollot – Autosi takuu säilyy',
    component: <MaintenanceWarrantySvg />,
  },
  {
    id: 7,
    title: 'Ruostevauriokorjaukset',
    component: <RustSvg />,
  },
  {
    id: 8,
    title: 'Sisätilalämmittimet',
    component: <HeaterSvg />,
  },
  {
    id: 9,
    title: 'Päästömittaukset ja diagnostiikat',
    component: <EmissionSvg />,
  },
  {
    id: 10,
    title: 'Henkilöauton ja pakettiauton käynnistimet, akut, laturit',
    component: <BatterySvg />,
  },
  {
    id: 11,
    title: 'Öljynvaihdot',
    component: <OilChangeSvg />,
  },
  {
    id: 12,
    title: 'Jakopää huollot- ja korjaukset',
    component: <EngineSvg />,
  },
  {
    id: 13,
    title: 'Jäähdytysjärjestelmän huollot- ja korjaukset',
    component: <CoolingSvg />,
  },
  {
    id: 14,
    title: 'Ohjaus- ja jousitus työt',
    component: <SuspensionSvg />,
  },
  {
    id: 15,
    title: 'Jarrujen huollot- ja korjaukset',
    component: <BrakesSvg />,
  },
  {
    id: 16,
    title: 'Polttoainejarjestelmien huollot sekä korjaukset',
    component: <FuelSvg />,
  },
  {
    id: 17,
    title: 'Pakokaasujärjestelmien korjaustyöt',
    component: <ExhaustPipeSvg />,
  },
  {
    id: 18,
    title: 'Voimansiirron huollot ja korjaukset',
    component: <WheelSvg />,
  },
];
