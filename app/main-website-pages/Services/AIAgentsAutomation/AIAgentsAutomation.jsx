import ServicePageLayout from "@/app/_shared/ServicePageLayout/ServicePageLayout";
import AIAgentsAutomationPage from "@/app/main-website-components/AIAgentsAutomationPage/AIAgentsAutomationPage";

export default function AIAgentsAutomation() {
  return (
    <ServicePageLayout page="ai-agents-automation" contactId="ai-agents-contact" navbarProps={{ variant: "adaptive", transparentTargetId: "ai-agents-hero", ctaHref: "/contact" }} footerProps={{ ctaHref: "/contact" }}>
      <AIAgentsAutomationPage />
    </ServicePageLayout>
  );
}
