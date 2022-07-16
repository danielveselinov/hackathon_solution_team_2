import { GetStaticProps, NextPage } from "next";

// components
import Services from "../components/Services";

import { ServiceType } from "../components/Service";

import { fetchData } from "../helpers/helpers";

interface Props {
  services: ServiceType[];
}

const WareHouse: NextPage<Props> = ({ services }) => {
  return <Services title="Warehouse Storage" service={services} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchData(
    "https://5884-46-217-247-67.eu.ngrok.io/api/services"
  );

  const services = data.warehouse_storage;

  return {
    props: {
      services,
    },
  };
};

export default WareHouse;
