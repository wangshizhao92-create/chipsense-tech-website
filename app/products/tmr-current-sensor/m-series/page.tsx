import TmrSeriesDetail from "@/components/TmrSeriesDetail";
import { tmrSeries } from "@/data/tmrProducts";

const series = tmrSeries.find((item) => item.slug === "m-series")!;

export default function MSeriesPage() {
  return <TmrSeriesDetail series={series} />;
}