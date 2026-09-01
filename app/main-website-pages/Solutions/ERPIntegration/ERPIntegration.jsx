import SolutionDetailPage from "@/app/main-website-components/SolutionDetailPage/SolutionDetailPage";
import { getSolutionPage } from "@/app/_lib/data/solutionProductPages";

export default function ERPIntegration() {
  return (
    <SolutionDetailPage
      page={getSolutionPage("erp-integration")}
    />
  );
}
