export default function AutomateMCAContent() {
  return (
    <div className="w-full h-full flex flex-col px-6 pb-6 overflow-y-auto text-console-screen-dark space-y-4">
      <h2 className="font-pixel text-lg uppercase border-b-2 border-console-screen-mid pb-2 mb-2 sticky top-0 bg-console-dark-gray z-10 w-[calc(100%+48px)] -mx-6 px-6 pt-6 text-purple-400">
        Automate MCA
      </h2>

      <div className="font-sans text-base space-y-6 pb-6">
        <p className="font-bold text-purple-400">
          AI-powered underwriting automation for the MCA industry.
        </p>

        <p className="text-zinc-200">
          AutomateMCA is an AI platform that automates bank statement analysis for Merchant Cash Advance underwriting. It enables funders and ISOs to make decisions based on customized criteria — operating continuously without hiring additional staff.
        </p>

        <div>
          <h3 className="font-pixel text-xs text-purple-400 mt-4 mb-2">Key Features</h3>
          <ul className="list-disc pl-4 space-y-1 text-zinc-200">
            <li>Automated bank statement analysis</li>
            <li>Revenue detection and validation</li>
            <li>Existing loan position identification</li>
            <li>Risk signal flagging</li>
            <li>Auto-generated offers or declines</li>
            <li>Multiple simultaneous application processing</li>
          </ul>
        </div>

        <div>
          <h3 className="font-pixel text-xs text-purple-400 mt-4 mb-2">How It Works</h3>
          <p className="text-zinc-200">
            Upload bank statements and let the AI analyze revenue patterns, detect existing positions, flag risk signals, and generate underwriting decisions — all based on your custom criteria.
          </p>
        </div>

        <a href="https://automatemca.com/" target="_blank" rel="noopener noreferrer" className="inline-block font-pixel text-sm text-white bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded transition-colors">
          Visit Automate MCA
        </a>
      </div>
    </div>
  );
}
