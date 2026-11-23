import SectionFrame, { SubHeading, PixelList, Panel, PixelLink } from '../SectionFrame';
import { CARTRIDGES } from '@/data/cartridges';

const cart = CARTRIDGES.find((c) => c.id === 'automatemca');

export default function AutomateMCAContent() {
  return (
    <SectionFrame title="Automate MCA" kicker="AI UNDERWRITING" icon={cart.icon} accent={cart.accent}>
      <div className="max-w-3xl space-y-4">
        <p className="text-lg desk:text-xl font-bold text-(--accent)">
          AI-powered underwriting automation for the MCA industry.
        </p>
        <p>
          AutomateMCA is an AI platform that automates bank statement analysis for Merchant Cash Advance underwriting. It enables funders and ISOs to make decisions based on customized criteria — operating continuously without hiring additional staff.
        </p>
      </div>

      <div className="grid gap-6 min-[1000px]:grid-cols-2">
        <Panel>
          <SubHeading>Key Features</SubHeading>
          <PixelList
            items={[
              'Automated bank statement analysis',
              'Revenue detection and validation',
              'Existing loan position identification',
              'Risk signal flagging',
              'Auto-generated offers or declines',
              'Multiple simultaneous application processing',
            ]}
          />
        </Panel>

        <Panel>
          <SubHeading>How It Works</SubHeading>
          <p>
            Upload bank statements and let the AI analyze revenue patterns, detect existing positions, flag risk signals, and generate underwriting decisions — all based on your custom criteria.
          </p>
        </Panel>
      </div>

      <PixelLink href="https://automatemca.com/">Visit Automate MCA</PixelLink>
    </SectionFrame>
  );
}
