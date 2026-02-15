import { NewsAgency, NewsChannel } from "./observer";

const agency = new NewsAgency();

const channel1 = new NewsChannel("Channel 1");
const channel2 = new NewsChannel("Channel 2");

agency.attach(channel1);
agency.attach(channel2);

agency.setNews("TypeScript 6.0 released!");

agency.detach(channel1);

agency.setNews("Observer pattern is powerful!");