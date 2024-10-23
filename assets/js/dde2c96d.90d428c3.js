"use strict";(self.webpackChunklucas_cruz=self.webpackChunklucas_cruz||[]).push([[5960],{5419:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=t(4848),i=t(8453);const a={title:"7. Model Deployment and Prediction Service",sidebar_position:7,slug:"/ml-systems/chapter-7"},s="Model Deployment and Prediction Service",r={id:"wiki/machine-learning/ml-systems/chapter-7",title:"7. Model Deployment and Prediction Service",description:"In many companies, the team that develops the models is also responsible for deploying them. In others, once the model is ready for deployment, it is exported and handed off to a different team (e.g., DevOps, MLOps, Data Platform) for deployment. This separation can lead to high communication overhead across teams and slow down model updates. It can also complicate debugging when issues arise.",source:"@site/docs/wiki/machine-learning/ml-systems/chapter-7.mdx",sourceDirName:"wiki/machine-learning/ml-systems",slug:"/ml-systems/chapter-7",permalink:"/ml-systems/chapter-7",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"7. Model Deployment and Prediction Service",sidebar_position:7,slug:"/ml-systems/chapter-7"},sidebar:"MLSidebar",previous:{title:"6. Model Development and Offline Evaluation",permalink:"/ml-systems/chapter-6"}},d={},l=[{value:"Machine Learning Deployment Myths",id:"machine-learning-deployment-myths",level:2},{value:"Myth 1: You only deploy one or two ML models at a time",id:"myth-1-you-only-deploy-one-or-two-ml-models-at-a-time",level:3},{value:"Myth 2: If we don&#39;t do anything, model performance remains the same",id:"myth-2-if-we-dont-do-anything-model-performance-remains-the-same",level:3},{value:"Myth 3: You don&#39;t need to update your models as much",id:"myth-3-you-dont-need-to-update-your-models-as-much",level:3},{value:"Myth 4: Most ML engineers don&#39;t need to worry about scale",id:"myth-4-most-ml-engineers-dont-need-to-worry-about-scale",level:3},{value:"Batch Prediction versus Online Prediction",id:"batch-prediction-versus-online-prediction",level:2},{value:"Batch Prediction",id:"batch-prediction",level:3}];function c(e){const n={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"model-deployment-and-prediction-service",children:"Model Deployment and Prediction Service"})}),"\n",(0,o.jsx)(n.p,{children:"In many companies, the team that develops the models is also responsible for deploying them. In others, once the model is ready for deployment, it is exported and handed off to a different team (e.g., DevOps, MLOps, Data Platform) for deployment. This separation can lead to high communication overhead across teams and slow down model updates. It can also complicate debugging when issues arise."}),"\n",(0,o.jsx)(n.admonition,{title:"Exporting a model",type:"tip",children:(0,o.jsx)(n.p,{children:"Exporting a model involves converting it into a format usable by another application, a process called \"serialization.\" Two parts of a model can be serialized: the model definition and the model's parameter values. The model definition outlines the model's structure, while the parameter values (weights) provide the numerical values for its units."})}),"\n",(0,o.jsx)(n.p,{children:"During development, our model runs in a controlled environment. For deployment, it can be moved to a staging environment for testing or directly to a production environment for use by end users."}),"\n",(0,o.jsx)(n.p,{children:"The production environment can be as simple as wrapping a predict function in a POST request endpoint using frameworks like Flask or FastAPI. This involves building/installing all dependencies in a container alongside the model and hosting it on a cloud service like AWS or GCP. The exposed endpoint can then be utilized by downstream applications."}),"\n",(0,o.jsx)(n.p,{children:"In this chapter, we'll discuss two main ways a model generates and serves its predictions to users: online and batch predictions. We will also cover where the computation should be performed: on the device (edge) or in the cloud. The method of serving and computing predictions influences the model's design, required infrastructure, and user experience."}),"\n",(0,o.jsx)(n.h2,{id:"machine-learning-deployment-myths",children:"Machine Learning Deployment Myths"}),"\n",(0,o.jsx)(n.h3,{id:"myth-1-you-only-deploy-one-or-two-ml-models-at-a-time",children:"Myth 1: You only deploy one or two ML models at a time"}),"\n",(0,o.jsx)(n.p,{children:"It's a common misconception, especially among those with an academic background, that organizations deploy only a few machine learning models at a time. Academic problems are often smaller in scale, solving one or few specific set of problems. In reality, companies often deploy hundreds or even thousands of models simultaneously. These models serve various purposes across different domains."}),"\n",(0,o.jsx)(n.p,{children:"Consider a ride-sharing app like Uber. It needs to solve numerous problems, including ride demand prediction, driver availability, estimated time of arrival, dynamic pricing, fraud detection, customer churn, and more. Given that Uber operates in multiple countries, each with its unique market dynamics, the number of deployed models can be substantial. Managing such a large number of models requires robust infrastructure and careful orchestration to ensure they function correctly and efficiently."}),"\n",(0,o.jsx)(n.h3,{id:"myth-2-if-we-dont-do-anything-model-performance-remains-the-same",children:"Myth 2: If we don't do anything, model performance remains the same"}),"\n",(0,o.jsx)(n.p,{children:"Another myth is that once a model is deployed, its performance remains stable over time without intervention. However, models can degrade due to several factors, including changes in data distribution shifts (data drift), evolving user behavior, and changes in the external environment. Regular monitoring, retraining, and updating of models are essential to maintain their performance and relevance."}),"\n",(0,o.jsx)(n.h3,{id:"myth-3-you-dont-need-to-update-your-models-as-much",children:"Myth 3: You don't need to update your models as much"}),"\n",(0,o.jsx)(n.p,{children:"Some believe that models, once deployed, need minimal updates. On the contrary, models often require frequent updates to adapt to new data and changing conditions. Continuous integration and continuous deployment (CI/CD) practices for ML models (referred to as MLOps) are critical to ensure models are consistently retrained, validated, and redeployed to maintain optimal performance. More on the frequency of retraining in Chapter 9."}),"\n",(0,o.jsx)(n.h3,{id:"myth-4-most-ml-engineers-dont-need-to-worry-about-scale",children:"Myth 4: Most ML engineers don't need to worry about scale"}),"\n",(0,o.jsx)(n.p,{children:"It's a misconception that scaling concerns are only relevant for a few ML engineers. In reality, most ML applications need to handle significant scale, whether it's the volume of data, the number of predictions made per second, or the complexity of the models. Engineers need to design and deploy models that can scale efficiently, manage large datasets, and serve predictions in real-time to meet business requirements."}),"\n",(0,o.jsx)(n.h2,{id:"batch-prediction-versus-online-prediction",children:"Batch Prediction versus Online Prediction"}),"\n",(0,o.jsx)(n.p,{children:"When deploying machine learning models, one fundamental decision you have to make involves choosing the mode of prediction. Each method serves different use cases and has its own advantages and trade-offs:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Batch prediction, which uses only batch features."}),"\n",(0,o.jsx)(n.li,{children:"Online prediction that uses only batch features (e.g., precomputed embeddings)."}),"\n",(0,o.jsx)(n.li,{children:"Online prediction that uses both batch features and streaming features. This is also known as streaming prediction."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"batch-prediction",children:"Batch Prediction"}),"\n"]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(6540);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);