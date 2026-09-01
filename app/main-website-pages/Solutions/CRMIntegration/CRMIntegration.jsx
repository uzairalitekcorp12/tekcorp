import SolutionDetailPage from "@/app/main-website-components/SolutionDetailPage/SolutionDetailPage";
import { getSolutionPage } from "@/app/_lib/data/solutionProductPages";

export default function CRMIntegration() {
  return (
    <SolutionDetailPage
      page={getSolutionPage("crm-integration")}
    />
  );
}
