import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  LearningSidebar: [
    
    {
      type: "category",
      label: "Topics",
      link: {type: 'doc', id: 'learning/index'},
      items: [
        {type: "doc", id: 'learning/reinforcement-learning/foundations-drl/index', label: 'Reinforcement Learning'},
        {type: "doc", id: 'learning/machine-learning/ml-systems/index', label: 'Machine Learning'},
        {type: "doc", id: 'learning/statistics/basic-statistics/index', label: 'Statistics'},
      ]
    }
  ],
  MLSidebar: [{ type: "autogenerated", dirName: "learning/machine-learning" }],
  RLSidebar: [{ type: "autogenerated", dirName: "learning/reinforcement-learning" }],
  StatsSidebar: [{ type: "autogenerated", dirName: "learning/statistics" }],
};

export default sidebars;