import { Card } from "@/components/design-system/Card";
import Link from "next/link";

export const metadata = {
  title: "About | Nerdonica",
  description: "About Veronica Ray",
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <header className="mb-12">
        <h1 className="text-5xl font-semibold mb-4 tracking-[0.15em] glow-text">
          About
        </h1>
      </header>

      <Card>
        <div className="space-y-6 text-[#e8e6e3]">
          <p>
            Hi! I'm Veronica Ray, a software engineer passionate about building
            beautiful, creative tools and exploring the intersection of code and
            art.
          </p>

          <p>
            My work spans full-stack development, creative coding, visual design,
            and open-source contributions. I'm particularly interested in
            interactive experiences, canvas-based graphics, and developer
            tooling that makes building fun.
          </p>

          <p>
            On this blog, I share explorations in software engineering, creative
            coding techniques, developer experience insights, and the occasional
            deep dive into visual effects and animation.
          </p>

          <div className="pt-6 space-y-4 border-t border-[rgba(77,208,225,0.2)]">
            <p className="text-sm text-[rgba(232,230,227,0.7)]">
              Connect with me:
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/veronicalray/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4dd0e1] hover:text-[#e8e6e3] transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/mathonsunday"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4dd0e1] hover:text-[#e8e6e3] transition-colors duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-[0.15em] text-[#4dd0e1]">
            Projects
          </h2>
          <div className="text-[rgba(232,230,227,0.6)] space-y-2">
            <p>
              Check out my creative projects on{" "}
              <a
                href="https://github.com/mathonsunday"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4dd0e1] hover:text-[#e8e6e3] transition-colors"
              >
                GitHub
              </a>
              , including interactive visual toolkits, creative coding
              experiments, and developer utilities.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
