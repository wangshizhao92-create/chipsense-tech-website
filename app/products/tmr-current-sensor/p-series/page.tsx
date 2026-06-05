import TmrSeriesDetail from "@/components/TmrSeriesDetail";
import { tmrSeries } from "@/data/tmrProducts";

const series = tmrSeries.find((item) => item.slug === "p-series")!;

export default function PSeriesPage() {
  return <TmrSeriesDetail series={series} />;
}