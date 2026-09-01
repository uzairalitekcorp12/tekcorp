import "../CapabilityFoundation/CapabilityFoundation.css";
import "./TekLMSPage.css";
import "./TekLMSPage.polish.css";

import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Check,
  ClipboardCheck,
  GraduationCap,
  Users,
  Video,
} from "lucide-react";
import CapabilityMedia from "../CapabilityMedia/CapabilityMedia";

const roles = [
  {
    title: "Administration",
    text: "Manage programs, learners, instructors, access and the operational structure behind delivery.",
    icon: Users,
  },
  {
    title: "Teaching",
    text: "Organize courses, learning material, sessions, assessments and learner communication.",
    icon: BookOpen,
  },
  {
    title: "Learning",
    text: "Give students one clear place for classes, content, tasks, progress and feedback.",
    icon: GraduationCap,
  },
];

export default function TekLMSPage() {
  return (
    <div className="cap-page teklms-page">
      <section className="teklms-hero" aria-labelledby="teklms-title">
        <div className="cap-shell teklms-hero__grid">
          <div data-reveal="left">
            <span className="cap-kicker">
              Learning management for institutes & academies
            </span>
            <h1 id="teklms-title" className="cap-heading">
              Run teaching, learning and academic operations from one connected
              platform.
            </h1>
            <p className="cap-copy">
              TekLMS helps education organizations manage courses, students,
              instructors, sessions, assessments and progress through a digital
              learning environment designed around real institutional workflows.
            </p>
            <div className="teklms-hero__actions">
              <Link href="/contact" className="cap-button">
                Request TekLMS demo{" "}
                <ArrowUpRight aria-hidden="true" size={13} />
              </Link>
              <span className="cap-chip">
                Institutes · Academies · Training teams
              </span>
            </div>
          </div>
          <CapabilityMedia
            alt="Tekcorp TekLMS learning management dashboard"
            className="teklms-hero__media"
            label="TekLMS learning workspace"
            priority
            src="/assets/product-assets/TekLMS/ui-workspace-v2.png"
          />
        </div>
      </section>

      <section className="teklms-roles" aria-labelledby="teklms-roles-title">
        <div className="cap-shell">
          <header>
            <span className="cap-kicker">
              One platform, different responsibilities
            </span>
            <h2 id="teklms-roles-title" className="cap-heading">
              Give each role the tools it needs without making the system
              confusing.
            </h2>
          </header>
          <div className="teklms-roles__grid">
            {roles.map(({ title, text, icon: Icon }, index) => (
              <article key={title}>
                <span className="teklms-roles__icon">
                  <Icon aria-hidden="true" size={18} />
                </span>
                <em>0{index + 1}</em>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="teklms-lifecycle cap-dark"
        aria-labelledby="teklms-lifecycle-title"
      >
        <div className="cap-shell">
          <div className="teklms-lifecycle__head">
            <div>
              <span className="cap-kicker">The learning lifecycle</span>
              <h2
                id="teklms-lifecycle-title"
                className="cap-heading cap-heading--white"
              >
                Connect course setup to measurable learner progress.
              </h2>
            </div>
            <p className="cap-copy">
              A learning platform should support the full academic journey
              instead of splitting course delivery, attendance, assessment and
              reporting across disconnected tools.
            </p>
          </div>
          <div className="teklms-lifecycle__rail">
            {[
              ["Create", "Course structure"],
              ["Enroll", "Students & cohorts"],
              ["Teach", "Content & live sessions"],
              ["Assess", "Tasks & evaluations"],
              ["Track", "Progress & reporting"],
            ].map(([title, text], index) => (
              <div key={title}>
                <span>0{index + 1}</span>
                <strong>{title}</strong>
                <small>{text}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="teklms-learning"
        aria-labelledby="teklms-learning-title"
      >
        <div className="cap-shell teklms-learning__grid">
          <div className="teklms-learning__copy">
            <span className="cap-kicker">
              Designed around learning operations
            </span>
            <h2 id="teklms-learning-title" className="cap-heading">
              Bring the classroom workflow into a clearer digital experience.
            </h2>
            <p className="cap-copy">
              From course material and live classes to submissions and progress,
              TekLMS helps organize the moments students and staff need to
              return to every week.
            </p>
            <ul>
              {[
                "Course and module organization",
                "Student enrollment and cohort management",
                "Live class and learning resource access",
                "Assignments, assessments and feedback",
                "Progress and administrative reporting",
              ].map((item) => (
                <li key={item}>
                  <Check aria-hidden="true" size={13} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <CapabilityMedia
            alt="Tekcorp TekLMS student and course dashboard"
            className="teklms-learning__media"
            label="Learning operations"
            src="/assets/product-assets/TekLMS/ui-workspace.png"
          />
        </div>
      </section>

      <section
        className="teklms-bento"
        aria-labelledby="teklms-capabilities-title"
      >
        <div className="cap-shell">
          <header>
            <span className="cap-kicker">Core learning capabilities</span>
            <h2 id="teklms-capabilities-title" className="cap-heading">
              A digital campus made from practical building blocks.
            </h2>
          </header>
          <div className="teklms-bento__grid">
            <article className="large">
              <Video aria-hidden="true" size={19} />
              <h3>Live & blended delivery</h3>
              <p>
                Connect scheduled teaching with the content, communication and
                follow-up around each session.
              </p>
            </article>
            <article>
              <ClipboardCheck aria-hidden="true" size={18} />
              <h3>Assessments</h3>
              <p>Organize assignments, quizzes and evaluation workflows.</p>
            </article>
            <article>
              <BarChart3 aria-hidden="true" size={18} />
              <h3>Progress</h3>
              <p>Give staff and learners visibility into academic activity.</p>
            </article>
            <article>
              <Users aria-hidden="true" size={18} />
              <h3>Administration</h3>
              <p>
                Manage access, cohorts and the operational structure of
                learning.
              </p>
            </article>
            <article>
              <BookOpen aria-hidden="true" size={18} />
              <h3>Content Library</h3>
              <p>
                Keep learning material organized around courses and modules.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="teklms-outcomes" aria-label="TekLMS outcomes">
        <div className="cap-shell teklms-outcomes__panel">
          <div>
            <span>01</span>
            <strong>Less admin fragmentation</strong>
          </div>
          <div>
            <span>02</span>
            <strong>Clearer student experience</strong>
          </div>
          <div>
            <span>03</span>
            <strong>More visible progress</strong>
          </div>
          <div>
            <span>04</span>
            <strong>Scalable learning operations</strong>
          </div>
        </div>
      </section>
      <section className="teklms-cta" aria-labelledby="teklms-cta-title">
        <div className="cap-shell teklms-cta__panel">
          <div>
            <span className="cap-kicker">
              Planning a better learning experience?
            </span>
            <h2 id="teklms-cta-title" className="cap-heading">
              See how TekLMS can fit the way your institute or academy actually
              operates.
            </h2>
          </div>
          <Link href="/contact" className="cap-button">
            Request TekLMS demo <ArrowUpRight aria-hidden="true" size={13} />
          </Link>
        </div>
      </section>
    </div>
  );
}
