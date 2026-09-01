import SolutionDetailPage from "@/app/main-website-components/SolutionDetailPage/SolutionDetailPage";
import { getSolutionPage } from "@/app/_lib/data/solutionProductPages";

export default function ReportsDataAnalysis() {
  return (
    <SolutionDetailPage
      page={getSolutionPage("reports-data-analysis")}
    />
  );
}
