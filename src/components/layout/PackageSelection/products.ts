import { getMessages } from '@/i8n';
export const products = {
  "menstrual":  [
    {
      key: "pads",
      title: getMessages("006"),
      description: getMessages("066"),
      main_product_id: "1",
      icon: "/ped.svg",
      sub_products: [
        {
          product: getMessages("072"),
          product_id: "1",
          iconSr: "/ped.svg",
          backgroundColor: "#ef4e25",
        },
  
        {
          product: getMessages("073"),
          product_id: "2",
          iconSr: "./ped.svg",
          backgroundColor: "#b52129",
        },
        {
          product: getMessages("074"),
          product_id: "3",
          iconSr: "/ped.svg",
          backgroundColor: "#610d00",
        },
      ],
    },
    {
      key: "pantyliners",
      title: getMessages("007"),
      description: getMessages("067"),
      main_product_id: "2",
      icon: "/dailyped.svg",
      sub_products: [
        {
          product: getMessages("075"),
          product_id: "4",
          iconSr: "/ped.svg",
          backgroundColor: "#f68c1e",
        },
        {
          product: getMessages("076"),
          product_id: "5",
          iconSr: "/ped.svg",
          backgroundColor: "#ce7328",
        },
        {
          product: getMessages("077"),
          product_id: "6",
          iconSr: "/ped.svg",
          backgroundColor: "#f5ba18",
        },
      ],
    },
    {
      key: "tampons",
      title: getMessages("008"),
      description: null,
      main_product_id: "3",
      icon: "/tampon.svg",
      sub_products: [
        {
          product: getMessages("068"),
          product_id: "7",
          iconSr: "/ped.svg",
          backgroundColor: "#a2557c",
        },
        {
          product: getMessages("069"),
          product_id: "8",
          iconSr: "/ped.svg",
          backgroundColor: "#693566",
        },
        {
          product: getMessages("070"),
          product_id: "9",
          iconSr: "/ped.svg",
          backgroundColor: "#3c223c",
        },
      ],
    },
  ],
  "supportive":  [
    {
      key: "cycle",
      title: getMessages("080"),
      description: getMessages("063"),
      main_product_id: "4",
      icon: "/cycle.svg",
      sub_products: [
        {
          product: getMessages("081"),
          product_id: "10",
          iconSr: "/ped.svg",
          backgroundColor: "#ef4e25",
        },
  
        {
          product: getMessages("082"),
          product_id: "11",
          iconSr: "./ped.svg",
          backgroundColor: "#b52129",
        },
      ],
    },
    {
      key: "cycleEssentials",
      title: getMessages("078"),
      description: getMessages("064"),
      main_product_id: "5",
      icon: "/dailyped.svg",
      sub_products: [
        {
          product: getMessages("075"),
          product_id: "12",
          iconSr: "/ped.svg",
          backgroundColor: "#f68c1e",
        },
      ],
    },
    {
      key: "cranberryEssentials",
      title: getMessages("079"),
      description: getMessages("065"),
      main_product_id: "6",
      icon: "/tampon.svg",
      sub_products: [
        {
          product: getMessages("068"),
          product_id: "13",
          iconSr: "/ped.svg",
          backgroundColor: "#a2557c",
        },
      ],
    },
  ],
};

