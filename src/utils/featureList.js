import cluster from '../assets/cluster.gif';
import dashboard from '../assets/dashboard.gif';
import home from '../assets/home.gif';
import branden from '../assets/teamPicture/branden.png';

const featureList = [
  {
    name: 'Google OAuth 2.0',
    picture: branden,
    description:
      'Secure your Kubernetes cluster health monitoring with the power of Google Authentication and log in seamlessly using your Google credentials. This standardized approach to user access provides a robust layer of security for your project and cluster data.',
  },
  {
    name: 'Cluster Integration',
    picture: home,
    description:
      'Expand your monitoring capabilities by connecting and adding Kubernetes clusters to your centralized health tracking system. Streamline the process of integrating clusters, allowing you to keep an eye on multiple environments from a single platform.',
  },
  {
    name: 'Metrics Dashboard',
    picture: dashboard,
    description:
      'Experience comprehensive insights into the health and performance of your Kubernetes cluster through a responsive dashboard. Monitor key metrics such as CPU utilization, RAM usage, disk space, memory, and network performance in real-time. ',
  },
  {
    name: 'Cluster Visualization',
    picture: cluster,
    description:
      'Gain a deeper understanding of your Kubernetes ecosystem with an interactive cluster graph representation. Explore the intricate relationships and complex interdependencies among nodes, pods, services, and deployments in a visually engaging manner. ',
  },
];

export default featureList;
