import ServicePageLayout from "@/app/_shared/ServicePageLayout/ServicePageLayout";
import AIChatbotsAssistantsPage from "@/app/main-website-components/AIChatbotsAssistantsPage/AIChatbotsAssistantsPage";

export default function AIChatbotsAssistants() {
  return (
    <ServicePageLayout page="ai-chatbots-assistants" contactId="ai-chatbots-contact" navbarProps={{ variant: "adaptive", transparentTargetId: "ai-chatbots-hero", ctaHref: "/contact" }} footerProps={{ ctaHref: "/contact" }}>
      <AIChatbotsAssistantsPage />
    </ServicePageLayout>
  );
}
