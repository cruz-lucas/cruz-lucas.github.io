import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  LearningSidebar: [
    
    {
      type: "category",
      label: "Topics",
      link: {type: 'doc', id: 'wiki/index'},
      items: [
        {type: "doc", id: 'wiki/reinforcement-learning/foundations-drl/index', label: 'Reinforcement Learning'},
        {type: "doc", id: 'wiki/machine-learning/ml-systems/index', label: 'Machine Learning'},
        {type: "doc", id: 'wiki/statistics/basic-statistics/index', label: 'Statistics'},
      ]
    }
  ],
  MLSidebar: [{ type: "autogenerated", dirName: "wiki/machine-learning" }],
  RLSidebar: [{ type: "autogenerated", dirName: "wiki/reinforcement-learning" }],
  StatsSidebar: [{ type: "autogenerated", dirName: "wiki/statistics" }],
};

export default sidebars;
