import ServicePageLayout from "@/app/_shared/ServicePageLayout/ServicePageLayout";
import VoiceAIConversationalAgentsPage from "@/app/main-website-components/VoiceAIConversationalAgentsPage/VoiceAIConversationalAgentsPage";

export default function VoiceAIConversationalAgents() {
  return (
    <ServicePageLayout page="voice-ai-conversational-agents" contactId="voice-ai-contact" navbarProps={{ variant: "adaptive", transparentTargetId: "voice-ai-hero", ctaHref: "/contact" }} footerProps={{ ctaHref: "/contact" }}>
      <VoiceAIConversationalAgentsPage />
    </ServicePageLayout>
  );
}
