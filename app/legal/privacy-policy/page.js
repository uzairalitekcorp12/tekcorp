import LegalPolicyPage from "@/app/main-website-components/LegalPolicyPage/LegalPolicyPage";
import { buildPageMetadata } from "@/app/_lib/metadata";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  canonical: "/legal/privacy-policy",
  description:
    "Read how TekCorp collects, uses, stores, and protects personal information when you use our website or contact our team.",
});

/*
 * EDITABLE PRIVACY POLICY CONTENT
 * --------------------------------
 * Update the text in this object whenever the policy changes. The shared
 * LegalPolicyPage component controls presentation only.
 *
 * Have legal counsel review material policy changes before publishing them.
 */
const privacyPolicy = {
  slug: "privacy-policy",
  variant: "privacy",
  eyebrow: "Privacy & Data",
  title: "Privacy Policy",
  summary:
    "This Privacy Policy explains how TekCorp LLC collects, uses, shares, and protects personal information when you visit our website, contact us, or engage with our digital services.",
  lastUpdated: "September 1, 2026",
  heroNote:
    "We aim to collect only the information needed to answer enquiries, deliver services, operate securely, and improve the experience we provide.",
  overviewItems: [
    "Clear information about what we collect",
    "Practical choices over communications and cookies",
    "Reasonable safeguards for information in our care",
  ],
  contactText:
    "Contact us if you have a privacy question, want to exercise an available data right, or believe information we hold about you is inaccurate.",
  sections: [
    {
      id: "scope",
      title: "Scope of this policy",
      paragraphs: [
        "This policy applies to personal information handled through TekCorp websites, enquiry forms, sales conversations, project communications, and related business interactions. A separate contract, product notice, or client agreement may provide additional terms for a particular service.",
        "This policy does not govern websites, platforms, or services operated independently by third parties, even when our website links to them.",
      ],
    },
    {
      id: "information-we-collect",
      title: "Information we collect",
      paragraphs: [
        "The information we collect depends on how you interact with TekCorp and what information you choose to provide.",
      ],
      items: [
        "Contact details such as your name, business email address, telephone number, company, and job title.",
        "Project and business information included in an enquiry, brief, proposal request, support message, or meeting.",
        "Communication records, including messages, meeting notes, feedback, and correspondence with our team.",
        "Technical and usage information such as browser type, device information, IP address, approximate location, referring pages, and website activity.",
        "Information provided during a client relationship where it is necessary to deliver, support, invoice, or administer agreed services.",
      ],
    },
    {
      id: "how-we-collect-information",
      title: "How information is collected",
      paragraphs: [
        "We collect information directly when you complete a form, email or call us, schedule a meeting, request a proposal, enter into an agreement, or otherwise communicate with TekCorp.",
        "Some technical information may be collected automatically through cookies, server logs, analytics tools, and similar technologies. We may also receive business contact information from referrals, public professional sources, service providers, or an organization you represent.",
      ],
    },
    {
      id: "how-we-use-information",
      title: "How we use information",
      paragraphs: [
        "We use personal information for legitimate business and operational purposes, where permitted by applicable law.",
      ],
      items: [
        "Responding to enquiries and preparing proposals, estimates, or service recommendations.",
        "Delivering, administering, maintaining, and supporting contracted services and products.",
        "Managing client relationships, billing, project records, and business communications.",
        "Operating, securing, troubleshooting, and improving our websites and systems.",
        "Sending service updates or relevant marketing communications where permitted, with an option to opt out.",
        "Meeting legal, regulatory, contractual, fraud-prevention, and record-keeping obligations.",
      ],
    },
    {
      id: "cookies-and-analytics",
      title: "Cookies and analytics",
      paragraphs: [
        "Our website may use essential cookies and similar technologies needed for security, functionality, preferences, and performance measurement. Analytics tools may help us understand aggregated website activity and improve navigation and content.",
        "You can control many cookies through your browser settings. Disabling certain cookies may affect some website features. Where applicable, additional cookie choices may be provided through a consent tool.",
      ],
    },
    {
      id: "sharing-information",
      title: "When information may be shared",
      paragraphs: [
        "We may share information with trusted providers that support hosting, analytics, communications, project delivery, payment administration, security, and professional advice. Those providers should receive only the information reasonably needed for their role.",
        "Information may also be disclosed when required by law, to protect rights or security, in connection with a business reorganization or transaction, or when you direct or authorize us to share it.",
      ],
    },
    {
      id: "retention",
      title: "Data retention",
      paragraphs: [
        "We retain personal information only for as long as reasonably necessary for the purpose it was collected, including service delivery, support, relationship management, security, dispute resolution, and legal or financial record-keeping.",
        "Retention periods vary according to the type of information, the client relationship, contractual requirements, and applicable law. Information that is no longer required may be deleted, anonymized, or securely archived.",
      ],
    },
    {
      id: "international-transfers",
      title: "International operations and transfers",
      paragraphs: [
        "TekCorp works across multiple locations and may use service providers in different countries. Personal information may therefore be processed outside the country where it was collected.",
        "Where cross-border safeguards are required, we take reasonable steps to use appropriate contractual, organizational, or technical measures for the transfer and handling of information.",
      ],
    },
    {
      id: "rights-and-choices",
      title: "Your rights and choices",
      paragraphs: [
        "Depending on where you live and the law that applies, you may have rights to request access, correction, deletion, restriction, objection, portability, or withdrawal of consent relating to your personal information.",
        "You may opt out of non-essential marketing emails by using the unsubscribe option in the message or contacting us. We may need to verify your identity before completing certain requests, and some information may need to be retained where permitted or required by law.",
      ],
    },
    {
      id: "security",
      title: "Information security",
      paragraphs: [
        "We use reasonable administrative, technical, and organizational measures designed to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure.",
        "No website, storage system, or transmission method is completely secure. You should avoid sending highly sensitive information through ordinary website forms or unencrypted email unless specifically requested through an approved channel.",
      ],
    },
    {
      id: "children-and-updates",
      title: "Children, external links, and policy updates",
      paragraphs: [
        "Our website and business services are intended for organizations and professional users. They are not directed to children, and we do not knowingly seek personal information from children where parental consent would be required.",
        "We may update this policy as our services, technology, or legal obligations change. The revised policy will be posted on this page with an updated date. Material changes may also be communicated through another appropriate channel.",
      ],
    },
  ],
};

export default function PrivacyPolicyRoute() {
  return <LegalPolicyPage policy={privacyPolicy} />;
}
